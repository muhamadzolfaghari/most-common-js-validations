/**
 * This regex determined the longitude of a point which existed in Iran boundary.
 * @type {RegExp}
 */
const LONGITUDE_REGEX = /^(4[4-9]|5[0-9]|6[0-4])\.\d+$/;

/**
 * A utility to validate the longitude in Iran boundary.
 * @param value {string}
 */
export default function isValidLatitude(value) {
  return LONGITUDE_REGEX.test(value);
}
