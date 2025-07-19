import { CountryByCode } from '@interfaces/country-by-code';
import { Country } from '@interfaces/country';

export function normalizeCountry(apiCountry: any): Country {
  return {
    name: {
      common: apiCountry.name?.common ?? '',
      official: apiCountry.name?.official ?? '',
      nativeName: apiCountry.name?.nativeName ?? {},
    },
    flags: apiCountry.flags ?? {},
    cca2: apiCountry.cca2,
    cca3: apiCountry.cca3,
    cioc: apiCountry.cioc,
    capital: apiCountry.capital ?? [],
    region: apiCountry.region,
    population: apiCountry.population,
  };
}

export function normalizeCountryData(data: any): CountryByCode {
  return {
    name: {
      common: data.name?.common || '',
      official: data.name?.official || '',
      nativeName: {
        spa: {
          official: data.name?.nativeName?.eng?.official || '',
          common: data.name?.nativeName?.eng?.common || '',
        },
      },
    },
    tld: data.tld || [],
    cca2: data.cca2 || '',
    ccn3: data.ccn3 || '',
    cioc: data.cioc || '',
    independent: !!data.independent,
    status: data.status || '',
    unMember: !!data.unMember,
    currencies: data.currencies ?? {},
    idd: {
      root: data.idd?.root || '',
      suffixes: data.idd?.suffixes || [],
    },
    capital: data.capital || [],
    altSpellings: data.altSpellings || [],
    region: data.region || '',
    subregion: data.subregion || '',
    languages: data.languages || {},
    latlng: data.latlng || [],
    landlocked: !!data.landlocked,
    borders: data.borders || [],
    bordersWithCode: [],
    area: data.area || 0,
    demonyms: {
      eng: {
        f: data.demonyms?.eng?.f || '',
        m: data.demonyms?.eng?.m || '',
      },
      fra: {
        f: data.demonyms?.fra?.f || '',
        m: data.demonyms?.fra?.m || '',
      },
    },
    cca3: data.cca3 || '',
    translations: {
      ara: { official: data.translations?.eng?.official || '', common: data.translations?.eng?.common || '' },
      bre: { official: '', common: '' },
      ces: { official: '', common: '' },
      cym: { official: '', common: '' },
      deu: { official: '', common: '' },
      est: { official: '', common: '' },
      fin: { official: '', common: '' },
      fra: { official: '', common: '' },
      hrv: { official: '', common: '' },
      hun: { official: '', common: '' },
      ind: { official: '', common: '' },
      ita: { official: '', common: '' },
      jpn: { official: '', common: '' },
      kor: { official: '', common: '' },
      nld: { official: '', common: '' },
      per: { official: '', common: '' },
      pol: { official: '', common: '' },
      por: { official: '', common: '' },
      rus: { official: '', common: '' },
      slk: { official: '', common: '' },
      spa: { official: '', common: '' },
      srp: { official: '', common: '' },
      swe: { official: '', common: '' },
      tur: { official: '', common: '' },
      urd: { official: '', common: '' },
      zho: { official: '', common: '' },
    },
    flag: data.flag || '',
    maps: {
      googleMaps: data.maps?.googleMaps || '',
      openStreetMaps: data.maps?.openStreetMaps || '',
    },
    population: data.population || 0,
    gini: {
      '2019': data.gini?.['2019'] || 0,
    },
    fifa: data.fifa || '',
    car: {
      signs: data.car?.signs || [],
      side: data.car?.side || '',
    },
    timezones: data.timezones || [],
    continents: data.continents || [],
    flags: {
      png: data.flags?.png || '',
      svg: data.flags?.svg || '',
      alt: data.flags?.alt || '',
    },
    coatOfArms: {
      png: data.coatOfArms?.png || '',
      svg: data.coatOfArms?.svg || '',
    },
    startOfWeek: data.startOfWeek || '',
    capitalInfo: {
      latlng: data.capitalInfo?.latlng || [],
    },
    postalCode: {
      format: data.postalCode?.format || '',
      regex: data.postalCode?.regex || '',
    },
  };
}
