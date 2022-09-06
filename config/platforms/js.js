const ENV = require('../../env.json');

module.exports = (build, brand, platform) => {
    return {
        js: {
            transforms: [
                'attribute/cti',
                'name/cti/normalizer',
                'name/cti/pascal',
                'size/rem',
                'color/hex'
            ],
            prefix: `${ENV.PREFIX}`,
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                outputReferences: true,
            },
            files: [
                {
                    destination: "es6/variables.js",
                    format: "javascript/es6",
                },
                {
                    destination: "es5/variables.js",
                    format: "javascript/module-flat",
                }
            ]
        },
    }

}

