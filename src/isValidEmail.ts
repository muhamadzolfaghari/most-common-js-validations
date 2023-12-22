/**
 * A Regex to have absolute pattern to check a email address.
 *
 * Email Validation as per RFC2822 standards.
 * by Tripleaxis
 */
const EMAIL_REGEX: RegExp =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

/**
 * A utility to validate the email address
 */
const isValidEmail = (value: string) => EMAIL_REGEX.test(value);

export default isValidEmail;
