const StyleDictionaryPackage = require('style-dictionary')
const config = require('./config/index.js')
const brands = ['rj']
const platforms = ['js', 'css', 'scss', 'android', 'compose', 'objC', 'swift', 'swift_enum']
// const platforms = ['js']

brands.map(brand => {
    platforms.map(platform => {
        const StyleDictionary = StyleDictionaryPackage.extend(config(brand, platform))
        StyleDictionary.buildPlatform(platform)
    });
});