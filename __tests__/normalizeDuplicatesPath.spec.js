const { normalizeDuplicatesPath } = require('../lib/utilities')

console.info("normalizeDuplicatesPath: StyleDictionary creates token names from the path property. Remove extra info to make life easier for developers")

describe("Normalize Path", () => {
  test("Removes duplicate names in path", () => {
    const input = ["this", "that", "and", "the", "other", "other", "other", "other123"]
    const output = ["this", "that", "and", "the", "other123"]
    expect(normalizeDuplicatesPath(input)).toEqual(output);
  });
});

describe("Normalize Path", () => {
  test("Removes duplicate names in path", () => {
    const input = ["this", "that", "and", "the", "other", "other", "other", "other"]
    const output = ["this", "that", "and", "the", "other"]
    expect(normalizeDuplicatesPath(input)).toEqual(output);
  });
});