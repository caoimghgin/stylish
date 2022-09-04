module.exports = (build, brand, platform) => {
    return {
        swift_enum: {
            transforms: [
                'attribute/cti',
                'name/cti/dj',
                'name/ti/camel',
                'color/UIColorSwift',
                'content/swift/literal',
                'asset/swift/literal',
                'size/swift/remToCGFloat',
                'font/swift/literal'
            ],
            buildPath: `${build}/${brand}/${platform}/`,
            options: {
                outputReferences: true,
            },
            files: [{
                destination: "StyleDictionaryColor.swift",
                format: "ios-swift/enum.swift",
                className: "StyleDictionaryColor",
                filter: {
                    attributes: {
                        category: "color"
                    }
                }
            }],
        },
    }
}