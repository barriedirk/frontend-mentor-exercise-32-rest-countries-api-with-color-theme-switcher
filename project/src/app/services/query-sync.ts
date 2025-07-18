import {
  Injectable,
  Injector,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuerySyncService {
  private readonly router: Router;
  private readonly route: ActivatedRoute;
  private injector = inject(Injector);

  queryParams: Signal<Params>;

  constructor(route: ActivatedRoute, router: Router) {
    this.router = router;
    this.route = route;

    this.queryParams = toSignal(this.route.queryParams.pipe(distinctUntilChanged()), { initialValue: {} });
  }

  read<T = string>(key: string, fallback: T): Signal<T> {
    return computed(() => {
      const value = this.queryParams()[key];
      return (value !== undefined ? value : fallback) as T;
    });
  }

  update(params: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }

  bindSignal<T>(param: string, sig: WritableSignal<T>, debounce = 300) {
    const initial = this.queryParams()[param];

    if (initial !== undefined) {
      sig.set(initial as T);
    }

    let timeout: any;

    runInInjectionContext(this.injector, () => {
      effect(() => {
        const value = sig();

        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.update({ [param]: value });
        }, debounce);
      });
    });
  }

  bindForm(form: any, keys: string[], debounceMs = 300) {
    const query = this.queryParams();

    for (const key of keys) {
      if (query[key] !== undefined && form.controls[key]) {
        form.controls[key].setValue(query[key], { emitEvent: false });
      }
    }

    form.valueChanges.pipe(debounceTime(debounceMs)).subscribe((values: Params) => {
      const update: Params = {};
      for (const key of keys) {
        update[key] = values[key];
      }
      this.update(update);
    });
  }
}
