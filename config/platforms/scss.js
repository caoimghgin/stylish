module.exports = (build, brand, platform) => {
    return {
        scss: {
            transforms: [
                'attribute/cti',
                'name/cti/dj',
                'name/cti/kebab',
                'time/seconds',
                'content/icon',
                'size/rem',
                'color/css'
            ],
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                outputReferences: true,
            },
            files: [{
                destination: "_variables.scss",
                format: "scss/variables",

            }]
        },
    }
}