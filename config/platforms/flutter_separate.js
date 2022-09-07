module.exports = (build, brand, platform) => {
    return {
        flutter: {
            transforms: [
                'attribute/cti',
                'attribute/cti/normalizer',
                'name/cti/normalizer',
                'name/ti/camel',
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

// return {
//     flutter: {
//         transforms: [
//             'attribute/cti',
//             'name/cti/dj',
//             'name/cti/camel',
//             'color/hex8flutter',
//             'size/flutter/remToDouble',
//             'content/flutter/literal',
//             'asset/flutter/literal',
//             'font/flutter/literal'
//         ],
//         buildPath: `${build}/${brand}/${platform}/`,
//         options: {
//             outputReferences: true,
//         },
//         files: [
//             {
//                 "destination": "style_dictionary.dart",
//                 "format": "flutter/class.dart",
//                 "className": "StyleDictionary"
//             }
//         ]
//     },
//     flutterseparate: {
//         transforms: [
//             'attribute/cti',
//             'name/cti/dj',
//             'name/ti/camel',
//             'color/hex8flutter',
//             'size/flutter/remToDouble',
//             'content/flutter/literal',
//             'asset/flutter/literal',
//             'font/flutter/literal'
//         ],
//         buildPath: `${build}/${brand}/${platform}/`,
//         options: {
//             outputReferences: true,
//         },
//         files: [
//             {
//                 destination: "style_dictionary_color.dart",
//                 format: "flutter/class.dart",
//                 className: "StyleDictionaryColor",
//                 type: "color",
//                 filter: {
//                     attributes: {
//                         category: "color"
//                     }
//                 }
//             },
//             {
//                 destination: "style_dictionary_sizes.dart",
//                 format: "flutter/class.dart",
//                 className: "StyleDictionarySize",
//                 type: "float",
//                 filter: {
//                     "attributes": {
//                         "category": "size"
//                     }
//                 }
//             }
//         ]
//     }
// }
