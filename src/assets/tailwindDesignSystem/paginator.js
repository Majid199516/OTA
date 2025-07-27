module.exports = function ({ addComponents }) {
  addComponents({
    ".paginator,p-paginator": {
      "@apply pl-6 pr-0 py-0": {},

      ".p-paginator,": {
        "@apply p-0 bg-transparent h-8 ltr": {},
        
        // "*": {
        //   "@apply ltr": {},
        // },

        ".p-paginator-current": {
          "@apply text-[13px] pr-[38px] pl-0 py-0 text-gray-700 m-0 persian-number h-8":
            {},
        },

        button: {
          "@apply m-0 p-0 size-8 min-w-5": {},

          ".p-paginator-icon": {
            "@apply text-gray-700 size-5": {},
          },

          "&:hover": {
            "@apply !bg-gray-25": {},
          },

          "&:active": {
            ".p-paginator-icon": {
              "@apply text-primary-500": {},
            },
          },

          "&:focus": {
            "@apply shadow-none": {},
          },

          "&.p-disabled": {
            ".p-paginator-icon": {
              "@apply text-gray-400": {},
            },
          },

          "&.p-paginator-first": {
            ".p-paginator-icon": {
              "&::before": {
                content: '""',
                inset: "0", // Adjust positioning as needed
                mask: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"%3E%3Cpath d="M14.1673 14.1673L11.1052 10.7372C10.7436 10.3321 10.7436 9.66921 11.1052 9.26412L14.1673 5.83398" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/%3E%3Cpath d="M6.66602 14.1673L6.66602 5.83398" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')`,
                maskSize: "contain",
                WebkitMask: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"%3E%3Cpath d="M14.1673 14.1673L11.1052 10.7372C10.7436 10.3321 10.7436 9.66921 11.1052 9.26412L14.1673 5.83398" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/%3E%3Cpath d="M6.66602 14.1673L6.66602 5.83398" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')`,
                backgroundColor: "currentColor", // Applies the color dynamically
                display: "block",
                width: "20px",
                height: "20px",
              },
            },
          },

          "&.p-paginator-prev": {
            ".p-paginator-icon": {
              "&::before": {
                content: '""',
                inset: "0", // Adjust positioning as needed
                mask: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"%3E%3Cpath d="M11.6673 14.1673L8.60521 10.7372C8.24358 10.3321 8.24358 9.66921 8.60521 9.26412L11.6673 5.83398" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')`,
                WebkitMask: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"%3E%3Cpath d="M11.6673 14.1673L8.60521 10.7372C8.24358 10.3321 8.24358 9.66921 8.60521 9.26412L11.6673 5.83398" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')`,

                backgroundColor: "currentColor", // Applies the color dynamically
                display: "block",
                width: "20px",
                height: "20px",
              },
            },
          },

          "&.p-paginator-next": {
            ".p-paginator-icon": {
              "&::before": {
                content: '""',
                inset: "0", // Adjust positioning as needed
                mask: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"%3E%3Cpath d="M8.33398 14.1673L11.3961 10.7372C11.7577 10.3321 11.7577 9.66921 11.3961 9.26412L8.33398 5.83398" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')`,
                WebkitMask: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"%3E%3Cpath d="M8.33398 14.1673L11.3961 10.7372C11.7577 10.3321 11.7577 9.66921 11.3961 9.26412L8.33398 5.83398" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')`,

                backgroundColor: "currentColor", // Applies the color dynamically
                display: "block",
                width: "20px",
                height: "20px",
              },
            },
          },

          "&.p-paginator-last": {
            ".p-paginator-icon": {
              "&::before": {
                content: '""',
                inset: "0", // Adjust positioning as needed
                mask: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"%3E%3Cpath d="M13.334 14.1673L13.334 5.83398" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/%3E%3Cpath d="M5.83398 14.1673L8.8961 10.7372C9.25773 10.3321 9.25773 9.66921 8.8961 9.26412L5.83398 5.83398" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')`,
                WebkitMask: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"%3E%3Cpath d="M13.334 14.1673L13.334 5.83398" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/%3E%3Cpath d="M5.83398 14.1673L8.8961 10.7372C9.25773 10.3321 9.25773 9.66921 8.8961 9.26412L5.83398 5.83398" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')`,

                backgroundColor: "currentColor", // Applies the color dynamically
                display: "block",
                width: "20px",
                height: "20px",
              },
            },
          },
        },

        ".p-paginator-pages": {
          '@apply flex items-center gap-1 ltr': {},

          ".p-paginator-page": {
            "@apply persian-number text-[13px] m-0 size-8 min-w-8 text-gray-700": {},

            "&:hover": {
              "@apply !bg-gray-25": {},
            },

            "&.p-highlight": {
              "@apply bg-primary-50 text-gray-700": {},
            }

          }
        }
      },
      '&:has(.p-paginator-bottom)' :{
        "@apply border-t border-t-gray-100":{},
        ".p-paginator-bottom":{
          "@apply flex justify-start h-[60px]":{}
        }
      }
    },
  });
};
