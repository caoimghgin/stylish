
const ENV = require('../../env.json')
const tinycolor = require("tinycolor2");
const fs = require('fs');

module.exports = {

    // Get all directory names in a given path
    fsDirectories: (path) => {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + '/' + file).isDirectory();
        });
    },

    //
    // FLatten path of colors such as black, white and alphas.
    normalizeColors: (prop) => {
        var color = tinycolor(prop.value);
        if (color.isValid()) {
            // if valid color, always add to the category attribute.
            if (tinycolor.equals(color, tinycolor("white"))) {
                prop.path = ['white']
            } else if (tinycolor.equals(color, tinycolor("black"))) {
                prop.path = ['black']
            } else {
                if (color.getAlpha() < 1) {
                    let str = prop.path[prop.path.length - 1]
                    let xx = str.match(/[a-z]+|[^a-z]+/gi).join("-").split("-")
                    let a = xx[0]
                    let b = +xx[xx.length - 1]
                    let c = [a, "_", zeroPad(b, 2), "a"].join('')
                    prop.path[prop.path.length - 1] = c;
                    return prop.path
                }
            }

            prop.path.unshift("color")

        }

        return prop.path

    },

    // Path, 'color/palette/primary/primary400' would output as
    // 'color-palette-primary-primary400'. Instead normalize the 
    // path to output 'color-palette-primary400'
    normalizePath: (path) => {
        let result = []
        for (let index = path.length - 1; index >= 0; index--) {
            const item = path[index];
            if (result.length === 0) {
                result.push(item)
            } else {
                const lastItem = result[result.length - 1]
                if (!lastItem.startsWith(item)) {
                    result.push(item)
                }
            }
        }
        return result.reverse()
    },

    // There are directories in NewsKit Figma files (and probably others)
    // which only adds visual 'noise' for developers. An array of path items
    // are 'black-listed' for removal.
    normalizeBlackList: (path) => {
        return path.filter(item => !ENV.BLACK_LISTED_DIRS.includes(item))
    },

    // Add 'palette' to the path, in the TYPE index of array.
    defineAsPalette: (path) => {
        path.splice(1, 0, "palette");
        return path
    },

    mormalizeSemanticToPaletteToken: (path, name) => {
        path[path.indexOf("color")] = name;
        return path
    },

}

const zeroPad = (num, places) => String(num).padStart(places, '0')
