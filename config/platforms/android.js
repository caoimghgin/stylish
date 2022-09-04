module.exports = (build, brand, platform) => {
    return {
        android: {
            transforms: [
                'attribute/cti',
                'name/cti/dj',
                'name/cti/snake',
                'color/hex8android',
                'size/remToSp',
                'size/remToDp'
            ],
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                outputReferences: true,
            },
            files: [{
                destination: "font_dimens.xml",
                format: "android/fontDimens",

            }, {
                destination: "colors.xml",
                format: "android/colors",
            }]
        },
    }
}