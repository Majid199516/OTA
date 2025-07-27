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
    },

    '.shadow-XS': {
      boxShadow: '0px 3px 4px 0px rgba(106, 115, 155, 0.07)',
    },

    '.shadow-S': {
      boxShadow: ' 0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
    },

    '.shadow-MD': {
      boxShadow: '0px 5px 16px 0px rgba(0, 0, 0, 0.12)',
    },

    '.shadow-L': {
      boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.10)',
    },

    '.shadow-XL': {
      boxShadow: '0px 10px 16px 0px rgba(0, 0, 0, 0.16)',
    },
    
    '.chips': {
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2px 12px',
      fontSize: '13px',
      width: '76px',
      height: '24px',
      minWidth: 'fit-content',
      gap: '4px',

      '&.primary': {
        background: 'var(--tsp-primary-50)',
        color: 'var(--tsp-primary-500)',
      },

      '&.success': {
        background: 'var(--tsp-success-25)',
        color: 'var(--tsp-success-600)',
      },

      '&.danger': {
        background: 'var(--tsp-error-25)',
        color: 'var(--tsp-error-600)',
      },

      '&.warning': {
        background: 'var(--tsp-warning-50)',
        color: 'var(--tsp-warning-500)',
      },

      '&.info': {
        background: 'var(--tsp-info-50)',
        color: 'var(--tsp-info-500)',
      },
      
    },

    // '.sidebar-item': {
      
    // }
  })
}