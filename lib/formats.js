const StyleDictionary = require('style-dictionary')

module.exports = () => {

    StyleDictionary.registerFormat({
        name: `myCustomFormat`,
        formatter: function({ dictionary }) {
          return dictionary.allTokens.map(token => {
            // console.log("BEEP....")

            let value = JSON.stringify(token.value);
            // the `dictionary` object now has `usesReference()` and
            // `getReferences()` methods. `usesReference()` will return true if
            // the value has a reference in it. `getReferences()` will return
            // an array of references to the whole tokens so that you can access
            // their names or any other attributes.
            if (dictionary.usesReference(token.original.value)) {
              const refs = dictionary.getReferences(token.original.value);
              refs.forEach(ref => {
                value = value.replace(ref.value, function() {
                  return `${ref.name}`;
                });
              });
            }
            return `export const ${token.name} = ${value};`
          }).join(`\n`)
        }
      })

}