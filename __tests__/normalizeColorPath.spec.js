const { normalizeColorPath } = require('../lib/utilities')

console.info("normalizeColorPath: StyleDictionary creates token names from the path property. Remove extra info to make life easier for developers")

describe("Normalize Black Color", () => {
  test("Colors that are black should return [ 'color', 'black' ]", () => {
    const input = {
      value: '#000000',
      type: 'color',
      filePath: 'tokens/rj/color/tokens.json',
      isSource: true,
      original: { value: '#000000', type: 'color' },
      name: 'black',
      attributes: {
        category: 'palette',
        type: 'neutral',
        item: 'b&w',
        subitem: 'black'
      },
      path: [ 'palette', 'neutral', 'b&w', 'black' ]
    }
    const output = [ 'color', 'black' ]
    expect(normalizeColorPath(input)).toEqual(output);
  });
});

describe("Normalize White Color", () => {
  test("Colors that are white should return [ 'color', 'white' ]", () => {
    const input = {
      value: '#ffffff',
      type: 'color',
      filePath: 'tokens/rj/color/tokens.json',
      isSource: true,
      original: { value: '#ffffff', type: 'color' },
      name: 'white',
      attributes: {
        category: 'palette',
        type: 'neutral',
        item: 'b&w',
        subitem: 'white'
      },
      path: [ 'palette', 'neutral', 'b&w', 'white' ]
    }
    const output = [ 'color', 'white' ]
    expect(normalizeColorPath(input)).toEqual(output);
  });
});

describe("Normalize Alpha Color", () => {
  test("Colors that are alpha should return [ 'color', 'white60a']", () => {
    const input = {
      value: '#ffffff99',
      type: 'color',
      description: 'white (60% opacity)',
      filePath: 'tokens/rj/color/tokens.json',
      isSource: true,
      original: {
        value: '#ffffff99',
        type: 'color',
        description: 'white (60% opacity)'
      },
      name: 'white060',
      attributes: {
        category: 'palette',
        type: 'alpha',
        item: 'white',
        subitem: 'white060'
      },
      path: [ 'palette', 'alpha', 'white', 'white060' ]
    }
    const output = [ '32 SHOULD NOT INCREMENT to 33', 'color', 'white60a' ]
    expect(normalizeColorPath(input)).toEqual(output);
  });
});


