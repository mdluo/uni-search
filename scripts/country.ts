import fs from 'fs';
import path from 'path';
import input from '../data/countries.json';

const output = input.map((country) => ({
  iso2: country.iso2,
  name: country.name
}));

fs.writeFileSync(
  path.resolve(__dirname, '../components/country-select/data.json'),
  JSON.stringify(output, null, 2),
);
