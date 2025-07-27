module.exports = function ({ addComponents }) {
  addComponents({
    ".tsp-input": {
      "mat-form-field": {
        "@apply static w-full h-8 border-none": {},
        ".mat-form-field-wrapper": {
          "@apply static p-0 border-none": {},
          ".mat-form-field-flex": {
            "@apply h-full border-none relative -top-0.5": {},
            ".mat-form-field-infix": {
              "@apply bg-neutral-white h-9 border border-gray-500 transition-all p-0 m-0 rounded-xl !static":
                {},
              "&:hover": {
                "@apply border-primary-500": {},

                ".calendar-toggle-button": {
                  "button": {
                      "svg": {
                        "@apply text-primary-500": {},
                      }
                  },
                  ".mat-button-ripple": {
                    "@apply size-[23px] -top-[5px] -right-0.5 bottom-[unset]": {},
                  },
                  ".mat-button-focus-overlay": {
                    "@apply bg-red-500": {}
                  }
                }
              },
              "input": {
                "@apply p-0 box-border pl-7": {},

                "&.has-value": {
                  "&+label": {
                    "@apply -top-5 right-0 text-[10px]": {},
                  }
                },

                "&:focus": {
                  "&+label": {
                    "@apply -top-5 right-0 text-[10px]": {},
                  },
                },
              },
              
              "label": {
                "@apply top-2 text-secondary-500 transition-all text-sm font-normal right-2 duration-200 cursor-text max-w-[90%] truncate persian-number":{}
              }
            },
          },
        },
        ".calendar-toggle-button": {
          "@apply absolute top-[13px] left-1": {},
          "button": {
            "@apply size-5 bg-transparent flex justify-center items-center z-10": {},
            ".mat-button-wrapper": {
              "@apply size-4 flex justify-center items-center": {},
              "svg": {
                "@apply text-gray-500 !size-4": {},
              },
              "&:not(.custom)": {
                "svg": {
                  "@apply hidden": {},
                }
              },
            },

            ".mat-button-ripple.mat-ripple,.mat-button-focus-overlay": {
              "@apply -top-1 bottom-[3px]":{}
            }
          }
        },
        ".mat-form-field-underline,.mat-form-field-label": {
          "@apply !hidden": {},
        },
        "&.mat-focused": {
          ".calendar-toggle-button": {
            button: {
              "@apply bg-transparent": {},
              ".mat-button-wrapper": {
                "svg": {
                  "@apply text-primary-500": {},
                }
              }
            }
          }
        },
        "&.ng-invalid": {
          "&.ng-touched": {
            ".mat-form-field-infix": {
              "@apply border-error-500": {},
              "&:hover": {
                "@apply border-red-500": {},
                ".calendar-toggle-button": {
                  button: {
                    "@apply bg-transparent": {},
                    ".mat-button-wrapper": {
                      "svg": {
                        "@apply text-red-500": {},
                      }
                    }
                  }
                },
              },

            },
            ".calendar-toggle-button": {
              button: {
                "@apply bg-transparent": {},
                ".mat-button-wrapper": {
                  "svg": {
                    "@apply text-red-500": {},
                  }
                }
              }
            }
          }
        },
        "&.mat-form-field-disabled": {
          ".mat-form-field-infix": {
            "&:hover": {
              "@apply !border-gray-500": {},
              "label": {
                "@apply text-gray-500": {},
              },
              ".calendar-toggle-button": {
                "button": {
                    "svg": {
                      "@apply !text-gray-500": {},
                    }
                  
                },
              }
            },
            'input': {
              "@apply !h-[33px] mt-px": {},
            }
          }
        }
      },
      "&:has(.info-icon)": {
        "mat-form-field": {
          ".mat-form-field-wrapper": {
            ".mat-form-field-flex": {
              ".mat-form-field-infix": {

                "label": {
                  "@apply right-9":{}
                }
              },
            },
          },

        },
      }
    },
    ".mat-calendar": {
      "*" : {
          "@apply ltr" :{}
      }
  },
  
    "mat-datepicker-content": {
      "@apply relative !rounded-xl top-2": {},
    },
    ".mat-datepicker-content-container": {
      "@apply bg-red-500": {},
      ".mat-calendar": {
        "@apply !w-[500px]":{},
        ".mat-calendar-header": {
          "@apply !bg-red-500":{}
        }
      }
    }
  });
};
