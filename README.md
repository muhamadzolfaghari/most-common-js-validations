# The most common js validations

There are the most common JavaScript validation utilities available.
Utilities are available to use in `src` folder as JavaScript file, and each function return `boolean` type.
All patterns are only work for Iran country.

## Person National ID

A utility to validate an Iranian person national id.

```js
isValidPersonNationalId('STRING');
```

## Company National ID

A utility to validate an iranian company national id

```js
isValidCompanyNationalId('123456789');
```

## Phone Number

A utility to validate the iranian phone number, an Iranian phone number, which is started firstly from zero or none-zero
secondly, is 9, and the length of the rest should be nine characters.

```js
isValidPhoneNumber("09123456789");
```

## Telephone Number

A utility to validate the Iranian telephone number, an Iranian telephone number, which is started from zero or none-zero
and the length of the rest should be nine characters.

```js
isValidTelephoneNumber("021241221");
```

## Latitude

A utility to validate the latitude in the Iran boundary, a pattern which is determined the latitude of a point which existed
in Iran boundary.

```js
isValidLatitude(35.7575);
```

## Longitude

A utility to validate the longitude in the Iran boundary, a pattern which is determined the longitude of a point which
existed in the Iran boundary.
```js
isValidLongitude(51.41);
```
