module.exports = (build, brand, platform) => {
    return {
        ios: {
            transforms: [
                'attribute/cti',
                'name/cti/dj',
                'name/cti/pascal',
                'color/UIColor',
                'content/objC/literal',
                'asset/objC/literal',
                'size/remToPt',
                'font/objC/literal'
            ],
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                outputReferences: true,
            },
            files: [{
                destination: "StyleDictionaryColor.h",
                format: "ios/colors.h",
                className: "StyleDictionaryColor",
                type: "StyleDictionaryColorName",
                filter: {
                    attributes: {
                        category: "color"
                    }
                }
            }, {
                destination: "StyleDictionaryColor.m",
                format: "ios/colors.m",
                className: "StyleDictionaryColor",
                type: "StyleDictionaryColorName",
                filter: {
                    attributes: {
                        category: "color"
                    }
                }
            }, {
                destination: "StyleDictionarySize.h",
                format: "ios/static.h",
                options: {
                    outputReferences: true,
                },
                className: "StyleDictionarySize",
                type: "float",
                filter: {
                    attributes: {
                        category: "size"
                    }
                }
            }, {
                destination: "StyleDictionarySize.m",
                format: "ios/static.m",
                className: "StyleDictionarySize",
                type: "float",
                filter: {
                    attributes: {
                        category: "size"
                    }
                }
            }]
        },
    }
}