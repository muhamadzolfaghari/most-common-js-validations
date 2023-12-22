/**
 * This regex determined the latitude of a point which existed in Iran boundary.
 */
const LATITUDE_REGEX = /^(2[6-9]|3[0-9]|40)\.\d+$/;

/**
 * A utility to validate the latitude in Iran boundary.
 */
const isValidLatitude = (value: string) => LATITUDE_REGEX.test(value);

export default isValidLatitude;
