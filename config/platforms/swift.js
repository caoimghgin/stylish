module.exports = (build, brand, platform) => {
    return {
        swift: {
            transforms: [
                'attribute/cti',
                'attribute/cti/normalizer',
                'name/cti/normalizer',
                'name/cti/camel',
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
                destination: "StyleDictionary+Class.swift",
                format: "ios-swift/class.swift",
                className: "StyleDictionaryClass",
                filter: {}
            }, {
                destination: "StyleDictionary+Enum.swift",
                format: "ios-swift/enum.swift",
                className: "StyleDictionaryEnum",
                filter: {}
            }, {
                destination: "StyleDictionary+Struct.swift",
                format: "ios-swift/any.swift",
                className: "StyleDictionaryStruct",
                filter: {},
                options: {
                    outputReferences: true,
                    imports: "SwiftUI",
                    objectType: "struct",
                    accessControl: "internal"
                }
            }]
        },
    }
}