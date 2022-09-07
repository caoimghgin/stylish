
const registerTransforms = require('../lib/transforms')
const platforms = require('./platforms/_index.js')
const ENV = require('../env.json')

module.exports = (brand, platform) => {

    registerTransforms()

    return {
        source: [
            `${ENV.TOKENS_DIR}/${brand}/**/*.json`,
        ],
        prefix: `${ENV.PREFIX}`,
        platforms: platforms(brand, platform)
    }

}