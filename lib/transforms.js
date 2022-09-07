const StyleDictionary = require('style-dictionary')
const { normalizeColorPath, normalizeDuplicatesPath, normalizeExcludedDirectories, isColorValid, isPaletteColor } = require('./utilities')

module.exports = () => {

    StyleDictionary.registerTransform({
        name: 'attribute/cti/normalizer',
        type: 'attribute',
        transformer: function (prop) {

            if ((isColorValid(prop)) && (prop.attributes.category !== 'color')) {
                prop.attributes.state = prop.attributes.subitem
                prop.attributes.subitem = prop.attributes.item
                prop.attributes.item = prop.attributes.type
                prop.attributes.type = prop.attributes.category
                prop.attributes.category = 'color'
            }

            // Append to the prop object the itme is a color
            // and is a known palette name
  
            return Object.assign(prop, {isPalette: isPaletteColor(prop)});

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