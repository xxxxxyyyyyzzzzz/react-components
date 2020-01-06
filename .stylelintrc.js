module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-sass-guidelines',
    'stylelint-config-rational-order',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    // 'unicode-bom': 'never',
    'order/properties-alphabetical-order': null,
    // 'media-feature-name-no-unknown': null,
    // 'value-no-vendor-prefix': null,
    // 'property-no-vendor-prefix': null,
    // 'no-descending-specificity': null,
    // 'media-feature-name-no-vendor-prefix': null,
    // 'declaration-block-no-duplicate-properties': [
    //   true,
    //   {
    //     ignore: ['consecutive-duplicates-with-different-values'],
    //   },
    // ],
    // 'at-rule-no-unknown': null,
    // 'scss/at-rule-no-unknown': true,
    // https://stylelint.io/user-guide/rules/max-nesting-depth/
    'max-nesting-depth': [
      2,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
        ignore: ['pseudo-classes'],
      },
    ],
    // ref: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/faq.md#how-do-i-configure-the--pattern-rules-for-common-css-naming-conventions-like-kebab-case
    // 'selector-class-pattern': [
    //   '^[a-z][a-zA-Z0-9]+$',
    //   {
    //     message: 'Selector should be written in camelCase (selector-class-pattern)',
    //   },
    // ],
    // 'selector-max-compound-selectors': null,
  },
}
