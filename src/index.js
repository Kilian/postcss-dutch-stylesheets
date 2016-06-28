import postcss from 'postcss'
import properties from './properties'
import values from './values'

export default postcss.plugin('postcss-dutch-stylesheets', (opts) => {
  opts = opts || {}

  return (css) => {
    css.walkDecls((decl) => {
      /**
       * Convert Properties
       */
      Object.keys(properties).forEach((property) => {
        if (decl.prop === properties[property]) {
          decl.prop = property
        }
      })

      /**
       * Convert Values
       */
      Object.keys(values).forEach((value) => {
        decl.value = decl.value.replace(values[value], value)
      })

      /**
       * Convert "!belangrijk"
       */
      if (decl.value.indexOf('!belangrijk') >= 0) {
        decl.value = decl.value.replace(/\s*!belangrijk\s*/, '')
        decl.important = true
      }
    })
  }
})
