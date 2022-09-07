module.exports = (build, brand, platform) => {
    return {
        compose: {
            transforms: [
                'attribute/cti',
                'attribute/cti/normalizer',
                'name/cti/normalizer',
                'name/cti/camel',
                'color/composeColor',
                'size/compose/em',
                'size/compose/remToSp',
                'size/compose/remToDp'
            ],
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                outputReferences: true,
            },
            files: [{
                destination: "StyleDictionaryColor.kt",
                format: "compose/object",
                className: "StyleDictionaryColor",
                packageName: "StyleDictionaryColor",
                filter: {
                    attributes: {
                        category: "color"
                    }
                }
            }, {
                destination: "StyleDictionarySize.kt",
                format: "compose/object",
                className: "StyleDictionarySize",
                packageName: "StyleDictionarySize",
                type: "float",
                filter: {
                    "attributes": {
                        "category": "size"
                    }
                }
            }]
        },
    }
}