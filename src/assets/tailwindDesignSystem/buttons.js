// module.exports = function ({ addComponents }) {
//   addComponents({
//     ".tsp-button": {
//       "@apply inline-flex items-center justify-center font-medium rounded-xl focus:outline-none":
//         {},
//     },
//     ".primary": {
//       "@apply bg-primary-500 text-primary-25": {},
//       "&:hover": {
//         "@apply bg-primary-600": {},
//       },
//       "&:active": {
//         "@apply bg-primary-700": {},
//       },
//       "&:disabled": {
//         "@apply bg-primary-200 text-gray-400 cursor-not-allowed": {},
//       },
//     },
//     ".secondary": {
//       "@apply bg-white text-primary-500 border-solid border-2 border-primary-500":
//         {},
//       "&:hover": {
//         "@apply bg-primary-50": {},
//       },
//       "&:active": {
//         "@apply bg-primary-100": {},
//       },
//       "&:disabled": {
//         "@apply bg-gray-25 text-gray-500 cursor-not-allowed": {},
//       },
//     },
//     ".large": {
//       "@apply px-6 py-3 text-lg w-40 h-14 rounded-xl": {},
//     },
//     ".medium": {
//       "@apply px-4 py-2 text-base": {},
//     },
//     ".small": {
//       "@apply px-3 py-1 text-sm": {},
//     },
//   })

// }

// custom-buttons.js
module.exports = function ({ addComponents }) {
  addComponents({
    "button.tsp-button": {
      "@apply w-full text-sm flex gap-2 items-center justify-center transition-all outline-none font-medium rounded-xl focus:outline-none":
        {},

      "&.primary": {
        "@apply bg-primary-500 text-primary-25": {},
        "&:hover": {
          "@apply bg-primary-600": {},
        },
        "&:active": {
          "@apply bg-primary-700": {},
        },
        "&:disabled": {
          "@apply bg-gray-50 text-gray-500 cursor-not-allowed": {},
        },

        "&.text": {
          "@apply bg-white text-primary-500": {},
          "&:hover": {
            "@apply bg-primary-50": {},
          },
          "&:active": {
            "@apply bg-primary-100": {},
          },
          "&:disabled": {
            "@apply bg-gray-25 text-gray-500 cursor-not-allowed": {},
          },
        },
      },

      "&.success": {
        "@apply bg-success-600 text-neutral-white": {},
        "&:hover": {
          "@apply bg-success-500": {},
        },
        "&:active": {
          "@apply bg-success-700": {},
        },
        "&:disabled": {
          "@apply bg-success-50 text-gray-500 cursor-not-allowed": {},
        },
        "&.text": {
          "@apply bg-neutral-white text-success-600": {},
          "&:hover": {
            "@apply bg-success-25": {},
          },
          "&:active": {
            "@apply bg-success-50": {},
          },
          "&:disabled": {
            "@apply bg-gray-25 border-success-100 text-success-300 cursor-not-allowed":
              {},
          },
        },
      },

      "&.success-secondary": {
        "@apply bg-neutral-white text-success-600 border-2 border-success-600": {},
        "&:hover": {
          "@apply bg-success-25": {},
        },
        "&:active": {
          "@apply bg-success-50": {},
        },
        "&:disabled": {
          "@apply bg-gray-25 border-success-100 text-success-300 cursor-not-allowed":
            {},
        },
      },

      "&.danger": {
        "@apply bg-error-500 text-neutral-white": {},
        "&:hover": {
          "@apply bg-error-600": {},
        },
        "&:active": {
          "@apply bg-error-700": {},
        },
        "&:disabled": {
          "@apply bg-error-50 text-gray-500 cursor-not-allowed": {},
        },

        "&.text": {
          "@apply bg-neutral-white text-error-500": {},

          "&:hover": {
            "@apply bg-error-25 text-error-700": {},
          },

          "&:active": {
            "@apply bg-error-50 text-error-700": {},
          },

          "&:disabled": {
            "@apply bg-gray-25 text-error-300 cursor-not-allowed":
              {},
          },
        },
      },

      "&.return": {
        "@apply border border-gray-50 bg-neutral-white rounded-[20px] text-gray-800": {},
        "&:hover": {
          "@apply bg-gray-25": {},
        },
        "&:active": {
          "@apply bg-gray-50": {},
        },
        "&:disabled": {
          "@apply bg-gray-100 text-gray-500 cursor-not-allowed": {},
        }
      },

      "&.danger-secondary": {
        "@apply bg-neutral-white text-error-500 border-2 border-error-500": {},

        "&:hover": {
          "@apply bg-error-50 text-error-600 border-error-600": {},
        },

        "&:active": {
          "@apply bg-error-50 text-error-700 border-error-700": {},
        },

        "&:disabled": {
          "@apply bg-gray-25 border-error-100 text-error-300 cursor-not-allowed":
            {},
        },
      },

      "&.secondary": {
        "@apply bg-white text-primary-500 border-solid border-2 border-primary-500":
          {},
        "&:hover": {
          "@apply bg-primary-50": {},
        },
        "&:active": {
          "@apply bg-primary-100": {},
        },
        "&:disabled": {
          "@apply bg-gray-25 text-gray-500 cursor-not-allowed": {},
        },
      },

      "&.primary-secondary": {
        "@apply bg-white text-primary-500 border-solid border-2 border-primary-500":
          {},
        "&:hover": {
          "@apply bg-primary-50": {},
        },
        "&:active": {
          "@apply bg-primary-100": {},
        },
        "&:disabled": {
          "@apply bg-gray-25 text-gray-500 cursor-not-allowed border-primary-100": {},
        },
      },
    "&.cancel": {
        "@apply bg-neutral-50 text-gray-900": {},

        "&:hover": {
          "@apply border-2 border-gray-100": {},
        },

        "&:active": {
          "@apply bg-gray-50": {},
        },

        "&:disabled": {
          "@apply bg-neutral-50 text-gray-500 cursor-not-allowed border-gray-100": {},
        },

        "&.text": {
          "@apply bg-neutral-white text-gray-900": {},

          "&:hover": {
            "@apply bg-gray-25": {},
          },

          "&:active": {
            "@apply bg-gray-50": {},
          },

          "&:disabled": {
            "@apply bg-neutral-white cursor-not-allowed":
              {},
          },
        },

      },

      "&.cancel-secondary": {
        "@apply bg-neutral-white text-gray-900 border-2 border-gray-100": {},

        "&:hover": {
          "@apply bg-neutral-50": {},
        },

        "&:active": {
          "@apply bg-gray-25": {},
        },

        "&:disabled": {
          "@apply bg-neutral-white text-gray-500 cursor-not-allowed": {},
        }
      },

      "&.advanced-search": {
        "@apply rounded-[32px] gap-1 h-9 bg-neutral-white text-gray-800 border border-gray-100 py-1 px-2 flex items-center justify-center": {},

        "&:hover": {
          "@apply bg-gray-25": {},
        },

        "span": {
          "@apply h-full flex items-center justify-center size-4": {},
        },

        "span:last-child": {
          "mat-icon": {
            "@apply size-full": {},
          }
        }

      },

      "&.large": {
        "@apply px-3 py-4 h-12 gap-3": {},
      },

      "&.normal": {
        "@apply p-3 h-10": {},
      },

      "&.medium": {
        "@apply p-2 h-9 rounded-lg text-[13px]": {},
      },

      "&.small": {
        "@apply px-2 py-1 h-8 rounded-lg gap-1 text-xs": {},
      },
      "&.button-loading": {
        "@apply relative !text-transparent pointer-events-none": {},
        "&::after": {
          content: '""',
          "@apply absolute top-1/2 left-1/2 w-5 h-5 border-4 border-solid border-white rounded-full": {},
          borderTopColor: "transparent", 
          marginTop: "-10px",            
          marginLeft: "-10px",           
          animation: "loading 1s linear infinite",
        },
      },

    },

    "table": {
      "button.tsp-button": {
        "@apply w-16 h-6 px-3 py-0.5 rounded !bg-gray-25 border border-gray-200 font-[13px] gap-1":{},

        "&.primary": {
          "@apply text-primary-500": {},
          "&:hover": {
            "@apply !bg-primary-50": {},
          },
          "&:active": {
            "@apply !bg-primary-100 border border-primary-600": {},
          },
          "&:disabled": {
            "@apply !bg-gray-25 border-gray-200 text-gray-200 cursor-not-allowed": {},
          },
        },

        "&.success": {
          "@apply text-success-600": {},
          "&:hover": {
            "@apply !bg-success-25": {},
          },
          "&:active": {
            "@apply !bg-success-50 border border-success-700": {},
          },
          "&:disabled": {
            "@apply !bg-gray-25 border-gray-200 text-gray-200 cursor-not-allowed": {},
          },
        },

        "&.danger": {
          "@apply text-error-600": {},
          "&:hover": {
            "@apply !bg-error-25": {},
          },
          "&:active": {
            "@apply !bg-error-50 border border-error-700": {},
          },
          "&:disabled": {
            "@apply !bg-gray-25 border-gray-200 text-gray-200 cursor-not-allowed": {},
          },
        },

        "&.warning": {
          "@apply text-warning-500": {},
          "&:hover": {
            "@apply !bg-warning-25": {},
          },
          "&:active": {
            "@apply !bg-warning-50 border border-warning-600": {},
          },
          "&:disabled": {
            "@apply !bg-gray-25 border-gray-200 text-gray-200 cursor-not-allowed": {},
          },
        },

        "&.info": {
          "@apply text-info-500": {},
          "&:hover": {
            "@apply !bg-info-25": {},
          },
          "&:active": {
            "@apply !bg-info-50 border border-info-600": {},
          },
          "&:disabled": {
            "@apply !bg-gray-25 border-gray-200 text-gray-200 cursor-not-allowed": {},
          },
        },
      },
    },

    ".tsp-button": {
      ".mat-slide-toggle-thumb-container": {
        ".mat-slide-toggle-thumb": {
          "@apply size-4 bg-gray-25 relative !-left-0.5 !top-[5px]": {},
        },
      },
      ".mat-slide-toggle-bar": {
        "@apply !bg-gray-400 rounded-[108px] !h-5 !w-10": {},
      },
      ".mat-slide-toggle.mat-checked": {
        ".mat-slide-toggle-bar": {
          "@apply !bg-primary-500": {},
        },
        ".mat-slide-toggle-thumb": {
          "@apply -right-px": {},
        },
      },
      ".mat-slide-toggle .mat-ripple-element": {
        "@apply hidden": {},
      },
      ".mat-slide-toggle.mat-disabled": {
        ".mat-slide-toggle-bar": {
          "@apply !bg-gray-50 !bg-opacity-100": {},
        },
      },
    },
  });
};
