module.exports = function ({ addComponents }) {
  addComponents({
    ".p-table:not(.editable-table):not(.print-table)": {

      ".p-datatable": {
        ".p-datatable-header" :{
          "@apply !border-t-0":{}
        },
        ".p-datatable-wrapper": {

          ".p-datatable-thead": {

            "@apply !border-0":{},

            tr: {
              "@apply h-12 max-h-12": {},

              th: {
                "@apply bg-gray-25 py-0 pr-4 py-[14px] !text-gray-800 text-sm font-bold text-right h-12 max-h-12": {},
                "&:not(.no-index):first-child": {
                  "@apply border-l border-l-gray-100 w-[56px]": {},
                  "div": {
                    "@apply flex items-center justify-center size-full": {},
                  },
                  "span": {
                    "@apply flex items-center justify-center size-full": {},
                  }
                },
                "&:not(.row-index-table-headr):not(.action-table-header):not(:first-child):not(:last-child)": {

                 ">div": {
                    "@apply border-l-2 border-l-gray-300 overflow-hidden whitespace-nowrap overflow-ellipsis": {},
                  },
                  
                  
                },
                "&.no-index":{
                  ">div": {
                    "@apply border-l-2 border-l-gray-300": {},
                  },
                },

                "&.row-index-table-headr": {
                  "@apply border-l border-l-gray-100": {},
                },
                "&.action-table-header": {
                  "@apply border-r border-r-gray-100 !left-0": {},
                }

              },
            },
          },

          ".p-datatable-tbody": {
            tr: {
              "@apply !border-t !border-b !border-t-primary-50 !border-b-primary-50": {},
              "&:nth-child(even)": {
                "@apply bg-neutral-background": {},
              },

              "&:nth-child(odd)": {
                "@apply bg-neutral-white": {},
              },

              "&:hover": {
                "@apply !bg-gray-25": {},
              },

              "&:active": {
                "@apply !bg-primary-25": {},
              },
              "&:last-child":{
                "@apply !border-b-0":{}
              },

              '&.selected-row': {
                "@apply !bg-primary-25 !border-t !border-b !border-t-primary-300 !border-b-primary-300": {},

                "&:focus": {
                  "@apply outline-none":{}
                },

                "td:firtst-child": {
                  "@apply !bg-primary-50":{}
                }
                
              },
              
              td: {
                "@apply h-10 p-0 border-0 h-10": {},

                "&.actions-table-row": {
                  "@apply !left-0": {},
                },

                "&:not(.no-index):first-child": {
                  "@apply border-l border-l-gray-25 w-[56px]": {},
                  ">div": {
                    "@apply flex items-center justify-center": {},
                  },
                  "span": {
                    "@apply flex items-center justify-center": {},
                  }
                },
                // "&:last-child": {
                //   "@apply border-l border-l-gray-100": {},
                // },

                ">div": {
                  "@apply flex persian-number items-center justify-start px-4 py-[10px] text-gray-800 text-sm text-right overflow-hidden whitespace-nowrap overflow-ellipsis h-10": {},
                  
                  ">span":{
                    "@apply w-full overflow-hidden whitespace-nowrap overflow-ellipsis persian-number":{}
                   }
                },
                

              }
            }
          }
        },
      },
    },
  });
};


 
