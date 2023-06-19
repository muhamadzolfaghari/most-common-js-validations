/**
 * An Iranian phone number, which is started firstly from zero or none-zero secondly,
 * is 9, and the length of the rest should be nine characters.
 * @type {RegExp}
 */
const PHONE_NUMBER_REGEX = /^(|0)9(\d){9}$/;

/**
 * A utility to validate the iranian phone number
 * @param value {string}
 */
export default function isValidPhoneNumber(value) {
  return PHONE_NUMBER_REGEX.test(value);
}
