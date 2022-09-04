module.exports = (build, brand, platform) => {
    return {
        css: {
            transforms: [
                'attribute/cti',
                'name/cti/dj',
                'name/cti/kebab',
                'time/seconds',
                'size/rem',
                'color/css',
            ],
            prefix: "DJ",
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                outputReferences: true,
            },
            files: [{
                destination: "variables.css",
                format: "css/variables",

            }]
        },
    }
}