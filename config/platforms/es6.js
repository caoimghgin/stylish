const ENV = require('../../env.json');

module.exports = (build, brand, platform) => {
    return {
        es6: {
            transforms: [
                'attribute/cti',
                'attribute/cti/normalizer',
                'name/cti/normalizer',
                'name/cti/pascal',
                'size/rem',
                'color/hex8'
            ],
            prefix: `${ENV.PREFIX}`,
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                outputReferences: true,
            },
            files: [
                {
                    destination: "variables.js",
                    format: "javascript/es6",
                    // format: "myCustomFormat",

                }
            ]
        },
    }

}

