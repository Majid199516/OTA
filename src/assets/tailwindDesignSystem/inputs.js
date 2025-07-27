module.exports = function ({ addComponents }) {
  addComponents({
    "div.tsp-input": {
      "@apply max-w-full rounded-xl gap-0.5 relative placeholder:text-gray-800 text-sm flex flex-col justify-center":
        {},
      "&:not(:has(textarea.tsp-input)):not(:has(.mat-radio-group)):not(:has(mat-checkbox)):not(:has(mat-radio-button)):not(:has(tsp-date-input))": {
        "@apply h-[66px]": {}
      },
      "&:has(.search)": {
        "@apply !h-[58px]": {},
        "input": {
          "@apply rounded-3xl": {},
          "&+label": {
            "@apply top-5": {},
          },
          "&:focus": {
            "&+label": {
              "@apply -top-3": {},
            },
          },
          "&:not(:placeholder-shown)": {
          "&+label": {
            "@apply -top-3": {},
          }
        },
        },
        ".search-icon": {
          "@apply top-5": {},
          "mat-icon": {
            "@apply size-5": {},
          }
        },
        ".close-icon": {
          "@apply absolute top-[18px] left-3": {},

          "&:hover": {
            "@apply text-primary-500": {},
          },
        }

      },
      "&:not(:has(tsp-date-input))" :{

        "&:has(.error-icon),&:has(.info-icon)": {
          ".ng-invalid.ng-touched": {
            "@apply pr-8": {},
            "&:placeholder-shown:not(:focus)": {
              "&+label": {
                "@apply right-8": {},
              }
            },
          }
        }
      },

      "&:has(.info-icon)": {
        input :{
          "@apply pr-8" :{},
          "&:placeholder-shown:not(:focus)": {
            "&+label": {
              "@apply right-8": {},
            }
          },
        }
      },

      ".unit": {
        "@apply absolute left-2":{}
      },
      "input,textarea": {
        "@apply persian-number w-full h-full max-w-full border border-gray-200 rounded-xl outline-none transition-all duration-200 resize-none relative py-2 px-3": {},
        "&:focus": {
          "@apply border border-primary-500 outline-none": {},
          "&+label": {
            "@apply text-secondary-500  text-[10px] font-normal -top-[3px] right-1": {},
          },
        },
        "&:hover": {
          "@apply border-primary-500": {},
        },
        "&:disabled": {
          "@apply !border-gray-500 bg-gray-25": {},
          "&:hover": {
            "@apply border-gray-500 !cursor-not-allowed": {},
          },
          "&+label": {
            "@apply !text-gray-500": {},
          }
        },
        "&:not(:placeholder-shown)": {
          "@apply border-primary-500": {},
          "&+label": {
            "@apply text-secondary-500 text-[10px] font-normal -top-[3px] right-1 cursor-auto": {},
          }
        },
        "~.error-icon": {
          "@apply text-gray-500 size-[16px] absolute hidden transition-all duration-200 right-1 top-[26px]": {},
          "mat-icon": {
            "@apply size-[16px]": {},
          }
        },
        "~.error-text": {
          "@apply text-error-600 hidden text-[8px] font-normal absolute transition-all duration-200 top-[50px] right-1 persian-number": {},
          "mat-icon": {
            "@apply size-6": {},
          }
        },
        "~.close-icon": {
          "@apply block size-[14px] text-gray-500 cursor-pointer left-6 top-[13px]": {},
          "mat-icon": {
            "@apply size-[14px]": {},
          }
        },
        "~.info-icon": {
          "@apply block absolute size-6 text-gray-500 cursor-pointer right-1 top-[22px]": {},
          "mat-icon": {
            "@apply text-gray-500": {},
          },
        },
        "~.search-icon": {
          "@apply absolute size-6 text-gray-500 cursor-pointer right-5 top-[26px]": {},

        },




        "&.ng-invalid.ng-touched": {
          "@apply border-error-600": {},
          "~.error-icon": {
            "@apply block": {},
          },
          "~.error-text": {
            "@apply block": {},
          },
          "~.info-icon": {
            "@apply block": {},
          },
          "~.close-icon": {
            "@apply block": {},
          },
          "&+label": {
            "@apply text-gray-500": {},
          },
        },

        "&+label": {
          "@apply absolute text-secondary-500 transition-all text-sm font-normal right-2 top-[22px] duration-200 cursor-text max-w-[90%] truncate persian-number": {},
        }
      },

      "input": {
        "@apply h-9": {},
        "&.have-unit": {
          "~.units": {
            "@apply opacity-0": {},
          },
          "&:not(:placeholder-shown)": {
            "~.units": {
              "@apply opacity-100": {},
            },
          }
        }
      },

      "textarea": {
        "&:focus": {
          "&+label": {
            "@apply -top-6": {},
          },
        }
      },
      "&:has(textarea)": {
        "@apply py-[15px]": {},

        "textarea": {
          "@apply pb-1": {},

          "&:focus": {
            "&+label": {
              "@apply -top-[3px]": {},
            },
          },

          "&:not(:placeholder-shown)": {

            "&+label": {
              "@apply -top-[3px]": {},
            }
          }
        }
      },

      "&:has(.search-icon)": {
        "input": {
          "@apply pr-11": {},
        },
        "label": {
          "@apply right-11": {},
        }
      },


      "&.unit": {
        "input": {
          "@apply pl-9":{}
        }
      },

      // ".error-icon mat-icon": {
      //   "@apply text-error-600": {}
      // },


      "ng-select": {
        "@apply transition-all duration-200 w-full !overflow-visible cursor-pointer": {},
        ".ng-value-container": {
          "@apply rtl min-h-9 box-border pr-2 !cursor-pointer": {},
          "&:hover": {
            "@apply border-primary-500 !cursor-pointer": {},
          },
          ".ng-value": {
            // "@apply max-w-[95%]": {},
            ".ng-value-label": {
              "@apply persian-number" :{}
            }
          },
          ".ng-input": {
            "@apply !px-2 !top-0 !bg-transparent": {},
            "input": {
              "@apply !pl-0": {},
            }
          },
        },

        "&.search": {
          "&.ng-select-single": {

            ".ng-select-container": {
              "@apply relative z-0 !rounded-3xl": {},

              ".ng-value-container": {
                "@apply !pr-10": {},

                ".ng-placeholder": {
                  "@apply pr-7": {},
                },

                ".ng-input": {
                  "@apply !pr-9": {},
                }
              },
            }
          },
        },

        "&.ng-select-single": {
          ".ng-select-container": {
            "@apply !h-9 border border-gray-500 rounded-xl": {},
            "&:hover": {
              "@apply border-primary-500": {},
            },

            ".ng-clear-wrapper": {
              "@apply top-0.5": {}
            }
          }
        },

          "&.ng-select-focused,.ng-has-value": {
            ".ng-placeholder": {
              "@apply block text-secondary-500 text-[10px] font-normal -top-6 right-0": {},
            }
          },

        ".ng-placeholder": {
          "@apply !transition-all duration-200 text-sm !text-secondary-500 absolute top-2 right-2 cursor-text": {},
        },
        ".ng-arrow-wrapper": {
          "@apply flex items-center justify-center pl-2": {},
          ".ng-arrow": {
            "@apply hidden flex items-center justify-center": {},
          },
          "&::after": {
            content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M17 14L12.8838 10.3255C12.3977 9.8915 11.6023 9.8915 11.1162 10.3255L7 14' stroke='%23002554' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            "@apply flex items-center justify-center duration-200 transition-all w-4 h-4 relative -top-1 left-1 text-current rotate-180": {},
          }
        },
        "&:invalid,&.ng-invalid.ng-touched,&.is-invalid.ng-touched": {
          ".ng-value-container": {},
          ".ng-select-container": {
            "@apply !border-error-600": {},
            ".ng-placeholder": {
              "@apply !text-gray-500": {},
            }
          }
        },
        ".ng-select-container": {
          "@apply !transition !overflow-visible": {},
          ".ng-value-container": {
            "@apply !transition": {},
            "ng-placeholder": {
              "@apply !transition text-error-600 top-10": {},
            },
          }
        },
        "&.ng-select-opened": {
          "@apply transition-all": {},
          ".ng-arrow-wrapper": {
            "@apply text-primary-500": {},
            "&::after": {
              "@apply rotate-0 top-0": {},
            }
          },
          ".ng-select-container": {
            "@apply !rounded-xl": {}
          }
        },
        ".ng-dropdown-panel": {
          "@apply !rounded-xl top-10": {},
          ".ng-dropdown-panel-items": {
            "@apply !rounded-xl": {},
            "div:has(.ng-option)": {
              "@apply flex flex-col gap-1 p-1":{}
            },

            ".ng-option": {
              "@apply w-full !flex persian-number h-8 !min-h-8 gap-1 text-secondary-500 !rounded-xl h-8 !py-[6px] px-4 text-[13px] font-normal border-b border-b-neutral-50 bg-neutral-white transition-all duration-300": {},

              "&:hover": {
                "@apply !bg-gray-25":{}
              },

              "&:active": {
                "@apply !bg-primary-50":{},
              },

              "&.ng-option-marked": {
                "@apply !bg-neutral-white !text-secondary-500": {},

                "&:hover": {
                  "@apply !bg-gray-25":{}
                },

                "&.ng-option-selected":{
                  "@apply !bg-primary-50 !text-secondary-500 !text-[13px] !font-normal" :{},
                }
              },

              "&.ng-option-selected":{
                "@apply !bg-primary-50 !text-secondary-500 !text-[13px] !font-normal" :{},
              },

              ".ng-option-label": {
                "@apply persian-number" :{}
              },
              ">div": {
                "@apply max-w-full": {}
              }

            }
          },
        },
        "&.fit-options": {
          ".ng-dropdown-panel-items": {
            "@apply w-fit": {}
          }
        },
        "&.ng-select-focused:not(.ng-select-opened)": {
          ".ng-select-container": {
            "@apply border-primary-500 shadow-none": {},
          }
        },
        "&.ng-select-disabled": {
          ".ng-placeholder": {
            "@apply !text-gray-500": {},
          },
          ".ng-select-container": {
            "@apply bg-gray-25 border-gray-500": {},
            "&:hover": {
              "@apply border-gray-500 !cursor-not-allowed": {},
            }
          },
          ".ng-value-container": {
            "&:hover": {
              "@apply !cursor-not-allowed": {},
            }
          }
        }
      },

      "&:has(.info-icon)": {
        "input": {
          "@apply pr-8": {},
        },
        "label": {
          "@apply right-8": {},
        },

        "ng-select": {
          "&.ng-select-opened": {
            ".ng-select-container": {
              "@apply z-[990]" :{}
            }
          },

          "&:not(.ng-select-opened)": {
            ".ng-value-container": {
              ".ng-placeholder": {
                "@apply pr-6" :{}
              }
            }
          },
          ".ng-value-container": {
            "@apply pr-9": {},

          }
        },

        "&:has(.ng-select-opened)": {
          ".info-icon": {
            "@apply z-[1000]":{}
          }
        },

        ".info-icon": {
          "@apply top-6":{}
        }
      },

      "&:has(ng-select.search)": {
        ".search-icon": {
          "@apply absolute top-5 right-3 z-10 text-gray-500": {},
        },

        "*": {
          "@apply !cursor-pointer": {},
        }
      },

      "mat-checkbox": {
        "@apply flex items-center justify-center": {},

        ".mat-checkbox-layout": {
          "@apply w-full h-full flex justify-start items-center gap-2 cursor-pointer": {},

          ".mat-checkbox-inner-container": {
            "@apply !m-0 size-5 cursor-pointer": {},
            ".mat-checkbox-input": {
              "@apply !border-0 cursor-pointer": {},
            },
        },
          ".mat-focus-indicator": {
            ".mat-ripple-element": {
              "@apply !bg-primary-500": {},
            },
          }
        },
        ".mat-checkbox-frame": {
          "@apply rounded-lg !border-gray-400": {},
          "&:hover": {
            "@apply cursor-pointer": {},
          }
        },

        ".mat-checkbox-label": {
          "@apply persian-number font-semibold text-sm text-gray-800": {},
        },
        "&.mat-checkbox-checked": {
          ".mat-checkbox-layout": {
            ".mat-checkbox-inner-container": {
              ".mat-checkbox-background": {
                "@apply rounded-lg !bg-primary-500": {},
                "&:hover": {
                  "@apply cursor-pointer": {},
                }
              }
            }
          }
        },
        "&:hover": {
          ".mat-checkbox-frame": {
            "@apply !border-primary-400": {},
          },
        }
      },
      "mat-radio-group": {
        "@apply flex items-center w-full h-full justify-start": {},
        ".mat-ripple-element": {
          "@apply !bg-primary-500": {},
        },
        ".mat-radio-outer-circle": {
          "@apply !border-gray-400": {},
          "&:hover": {
            "@apply !border-primary-500 cursor-pointer": {},
          }
        },
        ".mat-radio-inner-circle": {
          "@apply !bg-primary-500": {},
          "&:hover": {
            "@apply cursor-pointer": {},
          }
        },
        ".mat-radio-checked": {
          ".mat-radio-outer-circle": {
            "@apply !border-primary-500": {},
          },
        },
        ".mat-radio-label": {
          "@apply flex w-full gap-2 text-gray-800 text-sm font-semibold": {},
          "&:hover": {
            ".mat-radio-outer-circle": {
              "@apply !border-primary-500": {},
            }
          }
        },
        "&.ng-untouched": {
          ".mat-ripple-element": {
            "@apply !bg-transparent": {},
          },
        },
        ".mat-radio-disabled": {
          ".mat-radio-inner-circle": {
            "@apply !bg-primary-200": {},
            "&:hover": {
              "@apply !cursor-not-allowed": {},
              ".mat-radio-outer-circle": {
                "@apply !border-primary-200": {},
              }
            }
          },
          ".mat-radio-outer-circle": {
            "@apply !border-primary-200": {},
            "&:hover": {
              "@apply !border-primary-200 !cursor-not-allowed": {},
            }
          },
          ".mat-radio-label": {
            "@apply !text-gray-200": {},
            "&:hover": {
              "@apply !cursor-not-allowed": {},
              ".mat-radio-outer-circle": {
                "@apply !border-primary-200": {},
              }
            }
          },
          "&:hover": {
            "@apply !cursor-not-allowed": {},
          }
        }
      },
      ".multi-select": {
        ".p-multiselect": {
          "@apply z-0 rounded-xl border  border-gray-500 w-full": {},
          ".p-multiselect-trigger": {
            ".p-multiselect-trigger-icon": {
              "@apply duration-200 transition-all text-secondary-500": {},
            }
          },
          "&:hover": {
            "@apply border-primary-500": {},
          },
          ".p-multiselect-label-container": {
            "@apply z-20":{},
            ".p-multiselect-label": {
              "@apply z-20 text-sm text-secondary-500":{}
            }
          },
          "&.p-multiselect-open": {
            "@apply h-[48px]": {},
            ".p-multiselect-trigger": {
              ".p-multiselect-trigger-icon": {
                "@apply rotate-180": {},
              }
            },
          },
          ".p-multiselect-panel": {
            "@apply rounded-xl p-3 relative top-3": {},
            ".p-multiselect-header": {
              "@apply gap-3 rounded-t-xl": {},
              ".p-multiselect-filter-container": {
                ".p-multiselect-filter": {
                  "@apply border-gray-500": {},
                  "&:focus,&:hover": {
                    "@apply shadow-none border-primary-500": {},
                  },
                }
              },
              ".p-multiselect-close": {
                "@apply text-gray-500 absolute left-8": {},
              }
            },
            ".p-multiselect-items": {
              "@apply flex gap-3 flex-col p-3": {},
              ".p-multiselect-item": {
                "@apply px-2 flex gap-3 rounded-xl text-secondary-500 text-sm": {},
                "&:hover": {
                  "@apply bg-gray-25": {},
                },
                "&:focus": {
                  "@apply shadow-none": {},
                },
                "&.p-highlight": {
                  "@apply bg-primary-100": {},
                }
              }
            }
          },
          "&.p-focus": {
            "@apply shadow-none":{}
          },
        },
        "&:has(.p-disabled)": {
          ".p-disabled": {
            "*": {
              "@apply !cursor-not-allowed pointer-events-auto":{},

            },
            "@apply !cursor-not-allowed border-gray-200 bg-gray-25": {},
            "&:hover": {
               "@apply !cursor-not-allowed":{}
            },
            ".p-multiselect-label-container": {
              ".p-multiselect-label": {
                "@apply !text-gray-500": {},
              }
            },
            ".p-multiselect-trigger": {
              ".p-multiselect-trigger-icon": {
                "@apply !text-gray-500": {},
              }
            }
          },
          "+label": {
            "@apply text-gray-500": {},
            "&:hover": {
              "@apply !cursor-not-allowed":{}
            }
          }
        },
        "&.ng-invalid": {
          ".p-multiselect": {
            "@apply border-error-600": {},
          }
        },
        "&.p-inputwrapper-focus": {
          ".p-multiselect": {
            // "@apply border-success-500": {},
          },
          "+label": {
            "@apply block -top-6": {},
          }
        },
        "&.p-inputwrapper-filled": {
          ".p-multiselect": {
            // "@apply border-error-600": {},
          },
          "+label": {
            "@apply block -top-6": {},
          }
        },
        "&:has(.p-inputwrapper-filled)": {
        },
        "+label": {
          "@apply transition-all duration-200 absolute z-10 top-3 right-2 text-sm text-secondary-500": {},
          "&:hover": {
            "@apply cursor-pointer": {},
            ".p-multiselect": {
              "@apply !border-primary-500": {},
            }
          },
        },
        "label": {
          "&:hover": {
            "@apply cursor-pointer": {},
          }
        }
      },
      "&:has(label:hover) .multi-select": {
        ".p-multiselect": {
          "@apply !border-primary-500": {},
          "&.p-disabled": {
            "@apply !border-gray-200": {},
          }
        }
      },
      ".p-checkbox": {
        "@apply size-5": {},
        ".p-checkbox-box": {
          "@apply size-5 border-gray-400": {},
          "&:hover": {
            "@apply border-primary-500": {},
          },
          "&.p-highlight": {
            "@apply border-none bg-primary-500": {},
            "&:hover": {
              "@apply bg-primary-700": {},
            }
          },
          "&.p-focus": {
            "@apply shadow-none": {},
          }
        },
        "&.p-checkbox-disable": {
          "&:hover": {
            "@apply bg-error-600 !cursor-not-allowed": {},
          }
        }
      },
      "&:has(.p-checkbox):not(&:has(.p-multiselect))": {
        "@apply flex gap-2 items-center justify-start": {},
        "label": {
          "@apply cursor-pointer text-gray-800 text-sm": {},
        }
      }
    },
    // "p-dropdown": {
    //   ".p-dropdown": {
    //       "@apply !size-full rounded-xl m-0": {},
    //     }
    //   },

    "p-dropdown": {
      ".p-dropdown": {
        "@apply z-0 rounded-xl border  border-gray-500 w-full": {},
        ".p-dropdown-trigger": {
          ".p-dropdown-trigger-icon": {
            "@apply duration-200 transition-all text-secondary-500": {},
          }
        },
        "&:hover": {
          "@apply border-primary-500": {},
        },
        ".p-dropdown-label-container": {
          "@apply z-20":{},
          ".p-dropdown-label": {
            "@apply z-20 text-sm text-secondary-500":{}
          }
        },
        "&.p-dropdown-open": {
          "@apply h-[48px]": {},
          ".p-dropdown-trigger": {
            ".p-dropdown-trigger-icon": {
              "@apply rotate-180": {},
            }
          },
        },
        "&:focus,&:hover": {
          "@apply !shadow-none": {},
        },
        ".p-dropdown-panel": {
          "@apply rounded-xl p-3 relative top-3": {},
          ".p-dropdown-header": {
            "@apply gap-3 rounded-t-xl": {},
            ".p-dropdown-filter-container": {
              ".p-dropdown-filter": {
                "@apply border-gray-500": {},
                "&:focus,&:hover": {
                  "@apply shadow-none border-primary-500": {},
                },
              }
            },
            ".p-dropdown-close": {
              "@apply text-gray-500 absolute left-8": {},
            }
          },
          ".p-dropdown-items": {
            "@apply flex gap-3 flex-col p-3": {},
            ".p-dropdown-item": {
              "@apply px-2 flex gap-3 !persian-number rounded-xl text-secondary-500 text-sm flex items-center justify-center": {},
              "&:hover": {
                "@apply bg-gray-25": {},
              },
              "&:focus": {
                "@apply shadow-none": {},
              },
              "&.p-highlight": {
                "@apply bg-primary-100": {},
              },
              "span": {
                "@apply persian-number": {},
              }
            }
          }
        },
        "&.p-focus": {
          "@apply shadow-none":{}
        },
        ".p-dropdown-label": {
          "@apply persian-number": {},
        },
        "&.p-paginator-rpp-options": {
          "@apply m-0 h-full rounded border-gray-200": {},
          ".p-dropdown-label": {
            "@apply text-[13px] p-1": {},
          },
          ".p-dropdown-panel": {
            "@apply rounded p-1": {
              ".p-dropdown-items": {
                "@apply !p-1": {},
              }
            }
          }
        }
      },
      "&:has(.p-disabled)": {
        ".p-disabled": {
          "*": {
            "@apply !cursor-not-allowed pointer-events-auto":{},

          },
          "@apply !cursor-not-allowed border-gray-200 bg-gray-25": {},
          "&:hover": {
             "@apply !cursor-not-allowed":{}
          },
          ".p-dropdown-label-container": {
            ".p-dropdown-label": {
              "@apply !text-gray-500 persian-number": {},
            }
          },
          ".p-dropdown-trigger": {
            ".p-dropdown-trigger-icon": {
              "@apply !text-gray-500": {},
            }
          }
        },
        "+label": {
          "@apply text-gray-500": {},
          "&:hover": {
            "@apply !cursor-not-allowed":{}
          }
        }
      },
      "&.ng-invalid": {
        ".p-dropdown": {
          "@apply border-error-600": {},
        }
      },
      "&.p-inputwrapper-focus": {
        ".p-dropdown": {
          // "@apply border-success-500": {},
        },
        "+label": {
          "@apply block -top-6": {},
        }
      },
      "&.p-inputwrapper-filled": {
        ".p-dropdown": {
          // "@apply border-error-600": {},
        },
        "+label": {
          "@apply block -top-6": {},
        }
      },
      "&:has(.p-inputwrapper-filled)": {
      },
      "+label": {
        "@apply transition-all duration-200 absolute z-10 top-3 right-2 text-sm text-secondary-500": {},
        "&:hover": {
          "@apply cursor-pointer": {},
          ".p-dropdown": {
            "@apply !border-primary-500": {},
          }
        },
      },
      "label": {
        "&:hover": {
          "@apply cursor-pointer": {},
        }
      }
    },

    ".input-in-progress": {
      "@apply border-blue-500": {},
    },
    ".input-filled": {
      "@apply border-primary-500": {},
    },
    ".input-error": {
      "@apply border-success-600": {},
    },
    ".input-disabled": {
      "@apply border-gray-100 bg-gray-25 cursor-not-allowed": {},
      },

  })
};
