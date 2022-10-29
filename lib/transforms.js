const StyleDictionary = require('style-dictionary')
const { normalizeColorPath, normalizeDuplicatesPath, normalizeExcludedDirectories, isColorValid, isPaletteColor } = require('./utilities')

module.exports = () => {

    StyleDictionary.registerTransform({
        type: `value`,
        transitive: true,
        name: `myTransitiveTransform`,
        matcher: (token) => token.attributes.category === 'color',
        transformer: (token) => {
            console.log(token)
            return token.value
            // return token.value
          // token.value will be resolved and transformed at this point
        //   console.log(token)
        //   return token
        }
      })


    StyleDictionary.registerTransform({
        name: 'attribute/cti/normalizer',
        type: 'attribute',
        transformer: function (token) {
            // if (prop.value === undefined) {
            //     console.log("UNDEFINED, MAYBE I CAN FIX?", prop.path)
            //     prop.original.value = 'color.base.green.value'
            //     prop.value = "#00FF00"
            // }
            // if (prop.name === 'secondary') {
            //     console.log(prop)
            //     console.log(prop.original.value)
            //     console.log(prop.value)
            // }
            if ((isColorValid(token)) && (token.attributes.category !== 'color')) {
                token.attributes.state = token.attributes.subitem
                token.attributes.subitem = token.attributes.item
                token.attributes.item = token.attributes.type
                token.attributes.type = token.attributes.category
                token.attributes.category = 'color'
            }

            // Append to the prop object the itme is a color
            // and is a known palette name
  
            return Object.assign(token, {isPalette: isPaletteColor(token)});

        }
    });

    StyleDictionary.registerTransform({
        name: 'name/cti/normalizer',
        type: 'name',
        matcher: (prop) => { return prop },
        transformer: (prop) => {
            prop.path = normalizeColorPath(prop)
            prop.path = normalizeDuplicatesPath(prop.path)
            prop.path = normalizeExcludedDirectories(prop.path)
            return prop
        }
    });
}