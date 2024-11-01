/**
 * Generates an array of numbers within a specified range.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} stop - The ending number of the range.
 * @param {number} [step=1] - The increment value between numbers in the range.
 * @returns {number[]} - An array of numbers within the specified range.
 */
function arrayRange(start, stop, step = 1) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  )
}

/**
 * Creates an array of specified length and populates it with numbers from 0 to length-1.
 *
 * @param {number} length - The length of the array to be created.
 * @returns {number[]} The array of specified length.
 */
function arrayOfLength(length) {
  return Array.from({ length }, (_, index) => index)
}

/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} The random integer.
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Generates an array of random floating-point numbers within a specified range.
 *
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @param {number} length - The length of the array to generate.
 * @param {number} [fixed=2] - The number of decimal places to round the generated numbers to.
 * @returns {Array<string>} - The generated array of random floating-point numbers.
 */
function generateRandomFloatArray(min, max, length, fixed = 2) {
  const arr = Array.from({ length }, () =>
    (Math.random() * (max - min + 1) + min).toFixed(fixed)
  )
  return arr.sort((a, b) => a - b)
}

/**
 * Generates an array of random integers within a specified range.
 *
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @param {number} length - The length of the array to generate.
 * @returns {number[]} The generated array of random integers.
 */
function generateRandomIntArray(min, max, length) {
  const arr = Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  )
  return arr.sort((a, b) => a - b)
}

export {
  arrayRange,
  arrayOfLength,
  randomInt,
  generateRandomFloatArray,
  generateRandomIntArray,
}
