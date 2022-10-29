const ENV = require('../../env.json');

module.exports = (build, brand, platform) => {
    return {
        css: {
            transforms: [
                'attribute/cti',
                'myTransitiveTransform',
                'attribute/cti/normalizer',
                'name/cti/normalizer',
                'name/cti/kebab',
                'time/seconds',
                'size/rem',
                'color/css',
            ],
            prefix: `${ENV.PREFIX}`,
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                showFileHeader: false,
                outputReferences: true,
            },
            files: [{
                destination: "variables.css",
                format: "css/variables",

            }]
        },
    }
}