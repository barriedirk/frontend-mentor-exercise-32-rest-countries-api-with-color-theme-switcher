aria-allowed-role
(12 occurrences)
warning

ARIA role should be appropriate for the element

<article _ngcontent-ng-c25624968="" appfadeinonview="" role="group" class="country-card background-- ...


Solution
Design
Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
declaration-block-no-shorthand-property-overrides
(1 occurrence)
error

Organize shorthand properties to prevent unintended overrides of longhand properties.

animation: bblFadInOut 1.8s infinite ease-in-out;

project/src/app/components/result-grid/result-grid.scss:48
Learn more
no-unknown-animations
(1 occurrence)
error

Only reference animations that have been defined to prevent silent failures in animation sequences.

animation: slide-out-to-right 0.5s forwards;

project/src/sass/styles.scss:28
Learn more
frontend-mentor/prefers-reduced-motion
(9 occurrences)
warning

Provide alternatives for users who prefer reduced motion to prevent motion sickness and other accessibility issues.

transition:
    opacity 0.6s ease,
    transform 0.6s ease;

project/src/app/components/country-card/country-card.scss:6
Learn more
declaration-property-unit-disallowed-list
(59 occurrences)
warning

Consider using relative units (em, rem) instead of absolute units (px, pt) to support resizing and improve accessibility.

max-width: 265px;

project/src/app/components/country-card/country-card.scss:23
Learn more
declaration-no-important
(5 occurrences)
warning

Avoid !important as it breaks the natural cascade and makes future style changes more difficult to implement.

animation-duration: 0.01ms !important;

project/src/sass/base/_reset.scss:69
Learn more
block-no-empty
(1 occurrence)
warning

Avoid empty blocks to keep CSS clean and prevent unnecessary code bloat.

&-custom-select {
  }

project/src/sass/utils/_form.scss:22
Learn more
frontend-mentor/use-logical-properties
(14 occurrences)
info

Use logical properties (e.g., inline-start instead of left) to support different reading directions and improve internationalization.

margin-bottom: 20px;

project/src/app/components/country-card/country-card.scss:37
Learn more
frontend-mentor/encourage-css-functions
(37 occurrences)
info

Consider using CSS functions like calc(), min(), and clamp() to create more responsive and flexible layouts that adapt to different viewport sizes.

padding: 28px;

project/src/app/components/country-card/country-card.scss:26
Learn more
frontend-mentor/no-extra-semicolons
(31 occurrences)
info

Unexpected extra semicolon

.country-card {
  opacity: 0;
  transform: translateY(10px);