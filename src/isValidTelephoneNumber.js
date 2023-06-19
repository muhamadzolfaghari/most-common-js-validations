/**
 * An iranian telephone number, which is started from zero or none-zero
 * and the length of the rest should be nine characters.
 * @type {RegExp}
 */
export const TELEPHONE_NUMBER_REGEX = /^(\d){10}$/;

/**
 * A utility to validate the iranian telephone number
 * @param value {string}
 */
export default function isValidTelephoneNumber(value) {
  return TELEPHONE_NUMBER_REGEX.test(value);
}
