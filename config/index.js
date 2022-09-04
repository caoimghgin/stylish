
const registerTransforms = require('../lib/transforms')
const platforms = require('./platforms/_index.js')
const ENV = require('../env.json')

const js = require('./platforms/js')
const scss = require('./platforms/scss')
const css = require('./platforms/css')
const android = require('./platforms/android')
const compose = require('./platforms/compose')
const ios = require('./platforms/ios')
const swift = require('./platforms/swift')
const swift_enum = require('./platforms/swift_enum')
const flutter = require('./platforms/flutter')

module.exports = (brand, platform) => {

    registerTransforms()

    // const platforms = Object.assign(
    //     js(brand, platform),
    //     scss(brand, platform),
    //     css(brand, platform),
    //     android(brand, platform),
    //     compose(brand, platform),
    //     ios(brand, platform),
    //     swift(brand, platform),
    //     swift_enum(brand, platform),
    //     flutter(brand, platform),
    // );

    return {
        source: [
            `${ENV.TOKENS_DIR}/${brand}/**/*.json`,
        ],
        prefix: "DJ",
        platforms: platforms(brand, platform)
    }

}