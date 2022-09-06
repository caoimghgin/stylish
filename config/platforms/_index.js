const ENV = require('../../env.json')

const js = require('./js')
const scss = require('./scss')
const css = require('./css')
const android = require('./android')
const compose = require('./compose')
const ios = require('./ios')
const swift = require('./swift')
const swift_enum = require('./swift_enum')
const flutter = require('./flutter')

module.exports = (brand, platform) => {

    console.log("----------------->", ENV.BUILD_DIR, brand, platform)

    return Object.assign(
        js(ENV.BUILD_DIR, brand, platform),
        scss(ENV.BUILD_DIR, brand, platform),
        css(ENV.BUILD_DIR, brand, platform),
        android(ENV.BUILD_DIR, brand, platform),
        compose(ENV.BUILD_DIR, brand, platform),
        ios(ENV.BUILD_DIR, brand, platform),
        swift(ENV.BUILD_DIR, brand, platform),
        swift_enum(ENV.BUILD_DIR, brand, platform),
        flutter(ENV.BUILD_DIR, brand, platform),
    );
}