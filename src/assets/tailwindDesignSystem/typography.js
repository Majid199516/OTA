module.exports = function ({ addUtilities }) {
  addUtilities({
    '.ltr': {
      direction: 'ltr',
    },
    '.rtl': {
      direction: 'rtl',
    },
    '.persian-number': {
      fontFamily: 'IYekan',
    },
    '.shadow-none': {
      boxShadow: 'none',
    }
  })
}