/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      xs: '0px',
      sm: '570px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: ({
      backgroundColor: theme => ({
        'amarillo': '#fccb13',
        'azul':'#182b5b',
        'plomo':'#f3f3f3'
        }),
      textColor: {
          'azul': '#182b5b',
          'amarillo': '#fccb13',
        },
    })
  },
  variants: {},
  plugins: []
}
