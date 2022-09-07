
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

    isColorValid: (prop) => {
        const color = tinycolor(prop.value);
        return color.isValid()
    },

    isPaletteColor: (prop) => {
        const paletteColors = [
            "primary015",
            "primary025",
            "primary050",
            "primary075",
            "primary085",
            "primary100",
            "primary200",
            "primary300",
            "primary400",
            "primary500",
            "primary600",
            "primary700",
            "primary800",
            "primary900",
            "secondary015",
            "secondary025",
            "secondary050",
            "secondary075",
            "secondary085",
            "secondary100",
            "secondary200",
            "secondary300",
            "secondary400",
            "secondary500",
            "secondary600",
            "secondary700",
            "secondary800",
            "secondary900",
            "tertiary015",
            "tertiary025",
            "tertiary050",
            "tertiary075",
            "tertiary085",
            "tertiary100",
            "tertiary200",
            "tertiary300",
            "tertiary400",
            "tertiary500",
            "tertiary600",
            "tertiary700",
            "tertiary800",
            "tertiary900",
            "positive015",
            "positive025",
            "positive050",
            "positive075",
            "positive085",
            "positive100",
            "positive200",
            "positive300",
            "positive400",
            "positive500",
            "positive600",
            "positive700",
            "positive800",
            "positive900",
            "negative015",
            "negative025",
            "negative050",
            "negative075",
            "negative085",
            "negative100",
            "negative200",
            "negative300",
            "negative400",
            "negative500",
            "negative600",
            "negative700",
            "negative800",
            "negative900",
            "highlight015",
            "highlight025",
            "highlight050",
            "highlight075",
            "highlight085",
            "highlight100",
            "highlight200",
            "highlight300",
            "highlight400",
            "highlight500",
            "highlight600",
            "highlight700",
            "highlight800",
            "highlight900",
            "attention015",
            "attention025",
            "attention050",
            "attention075",
            "attention085",
            "attention100",
            "attention200",
            "attention300",
            "attention400",
            "attention500",
            "attention600",
            "attention700",
            "attention800",
            "attention900",
            "info015",
            "info025",
            "info050",
            "info075",
            "info085",
            "info100",
            "info200",
            "info300",
            "info400",
            "info500",
            "info600",
            "info700",
            "info800",
            "info900",
            "system015",
            "system025",
            "system050",
            "system075",
            "system085",
            "system100",
            "system200",
            "system300",
            "system400",
            "system500",
            "system600",
            "system700",
            "system800",
            "system900",
            "neutral015",
            "neutral025",
            "neutral050",
            "neutral075",
            "neutral085",
            "neutral100",
            "neutral200",
            "neutral300",
            "neutral400",
            "neutral500",
            "neutral600",
            "neutral700",
            "neutral800",
            "neutral900",
            "black",
            "white",
            "black05a",
            "black10a",
            "black20a",
            "black30a",
            "black40a",
            "black50a",
            "black60a",
            "black70a",
            "black80a",
            "black90a",
            "black95a",
            "white05a",
            "white10a",
            "white20a",
            "white30a",
            "white40a",
            "white50a",
            "white60a",
            "white70a",
            "white80a",
            "white90a",
            "white95a"]

        if ((isColorValid(prop)) && (paletteColors.includes(prop.name))) {
            return true
        }

        return false

    },

    // FLatten path of colors such as black, white and alphas.
    normalizeColorPath: (prop) => {
        var color = tinycolor(prop.value);
        if (color.isValid()) {
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
                    prop.path = [[a, "", zeroPad(b, 2), "a"].join('')]
                }
            }

            prop.path.unshift("color")

        }

        return prop.path

    },

    // Path, 'color/palette/primary/primary400' would output as
    // 'color-palette-primary-primary400'. Instead normalize the 
    // path to output 'color-palette-primary400'
    normalizeDuplicatesPath: (path) => {
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
    normalizeExcludedDirectories: (path) => {
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
