const ENV = require('../../env.json')

const es5 = require('./es5')
const es6 = require('./es6')
const scss = require('./scss')
const css = require('./css')
const android = require('./android')
const compose = require('./compose')
const objC = require('./objC')
const swift = require('./swift')
const swift_enum = require('./swift_enum')
const flutter = require('./flutter')

module.exports = (brand, platform) => {

    return Object.assign(
        es6(ENV.BUILD_DIR, brand, platform),
        es5(ENV.BUILD_DIR, brand, platform),
        scss(ENV.BUILD_DIR, brand, platform),
        css(ENV.BUILD_DIR, brand, platform),
        android(ENV.BUILD_DIR, brand, platform),
        compose(ENV.BUILD_DIR, brand, platform),
        objC(ENV.BUILD_DIR, brand, platform),
        swift(ENV.BUILD_DIR, brand, platform),
        swift_enum(ENV.BUILD_DIR, brand, platform),
        flutter(ENV.BUILD_DIR, brand, platform),
    );
}