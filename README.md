# useReverseGeocoding [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=alvaropaco_use-reverse-geocoding&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=alvaropaco_use-reverse-geocoding) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=alvaropaco_use-reverse-geocoding&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=alvaropaco_use-reverse-geocoding) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=alvaropaco_use-reverse-geocoding&metric=bugs)](https://sonarcloud.io/summary/new_code?id=alvaropaco_use-reverse-geocoding)

A React hook for performing reverse geocoding using OpenStreetMap's Nominatim API. Easily convert latitude and longitude coordinates into human-readable addresses in your React applications.

## Installation

```bash
npm install use-reverse-geocoding
```
or if you use yarn:
```bash
yarn add use-reverse-geocoding
```

Usage
Here's a quick example to get you started:

```jsx
import React from 'react';
import useReverseGeocoding from 'use-reverse-geocoding';

const App = () => {
  const { loading, error, address } = useReverseGeocoding(51.505, -0.09);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Address: {address}</p>
    </div>
  );
};

export default App;
```

## API
#### useReverseGeocoding(lat, lng)

Parameters:

- lat (number): Latitude of the location.
- lng (number): Longitude of the location.

#### Returns an object containing:

- loading (boolean): Indicates if the request is currently loading.
- error (string | null): Contains an error message if an error occurred during the request.
- address (string): The human-readable address of the given latitude and longitude.

### Features
- Simple and easy-to-use API
- Lightweight with no external dependencies
- Utilizes OpenStreetMap's Nominatim API for accurate and up-to-date information

### Requirements
* React 16.8.0 or later
* Contributing

Contributions are always welcome! Please read the contributing guide before making a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.