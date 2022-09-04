const StyleDictionary = require('style-dictionary')

module.exports = () => {

    StyleDictionary.registerTransform({
        name: 'name/cti/dj',
        type: 'name',
        matcher: (prop) => {return prop},
        transformer: (prop) => {
            return prop.path.push("XXX")
        }
    });

}