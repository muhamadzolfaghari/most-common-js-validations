/**
 * A utility to validate an Iranian person national id
 * @param value {string}
 * @returns {boolean}
 */
export default function isValidPersonNationalId(value) {
  if (
    10 !== value.length ||
    Array(10)
      .fill(1)
      .find((_, i) => String(i).repeat(10) === value)
  ) {
    return false;
  }

  const check = +value[9];
  const sum =
    Array(9)
      .fill(null)
      .map((_, i) => +value[i] * (10 - i))
      .reduce((x, y) => x + y) % 11;

  return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
}
