const StyleDictionary = require('style-dictionary')
const { normalizePath, normalizeColors, normalizeBlackList } = require('./utilities')

module.exports = () => {

    StyleDictionary.registerTransform({
        name: 'name/cti/dj',
        type: 'name',
        matcher: (prop) => { return prop },
        transformer: (prop) => {
            return prop.path.push("XXX")
        }
    });

    StyleDictionary.registerTransform({
        name: 'name/cti/normalizer',
        type: 'name',
        matcher: (prop) => { return prop },
        transformer: (prop) => {
            prop.path = normalizeColors(prop)
            prop.path = normalizePath(prop.path)
              prop.path = normalizeBlackList(prop.path)
            //   prop.path = DefineAsPalette(prop.path)
            return prop
        }
    });
}


