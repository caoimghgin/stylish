module.exports = (build, brand, platform) => {
    return {
        flutter: {
            transforms: [
                'attribute/cti',
                'name/cti/dj',
                'name/cti/camel',
                'color/hex8flutter',
                'size/flutter/remToDouble',
                'content/flutter/literal',
                'asset/flutter/literal',
                'font/flutter/literal'
            ],
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                outputReferences: true,
            },
            files: [{
                destination: "variables.swift",
                format: "ios-swift/enum.swift",
                className: "StyleDictionaryColor",
                filter: {
                    attributes: {
                        category: "color"
                    }
                }
            }],
        }
    }
}