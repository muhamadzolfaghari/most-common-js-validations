/**
 * A utility to validate the iranian company national id
 * @param value {string}
 * @returns {boolean}
 */
export default function isValidCompanyNationalId(value) {
  if (value.length < 11 || parseInt(value, 10) === 0) {
    return false;
  }

  if (parseInt(value.slice(3, 3 + 6), 10) === 0) {
    return false;
  }

  let s = 0;
  const z = [29, 27, 23, 19, 17];
  const c = parseInt(value.slice(10, 10 + 1), 10);
  const d = parseInt(value.slice(9, 9 + 1), 10) + 2;

  for (let i = 0; i < 10; i++) {
    s += (d + parseInt(value.slice(i, i + 1), 10)) * z[i % 5];
  }

  s = s % 11;

  if (s === 10) {
    s = 0;
  }

  return c === s;
}
