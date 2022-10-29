
const registerTransforms = require('../lib/transforms')
const registerFormats = require('../lib/formats')
const platforms = require('./platforms/_index.js')
const ENV = require('../env.json')

module.exports = (brand, platform) => {

    registerFormats()
    registerTransforms()

    return {
        source: [
            `${ENV.TOKENS_DIR}/${brand}/**/*.json`,
        ],
        prefix: `${ENV.PREFIX}`,
        platforms: platforms(brand, platform)
    }

}