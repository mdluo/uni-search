import { InputGroup, Button, Icon } from '@blueprintjs/core';

import CountrySelect from 'components/country-select';
import type { Country } from 'components/country-select/CountrySelect';

interface Props {
  loading: boolean;
  country?: Country;
  setCountry: (country?: Country) => void;
  value: string;
  onChange: (value: string) => void;
}

export default function Search({
  loading,
  country,
  setCountry,
  value,
  onChange,
}: Props) {
  return (
    <InputGroup
      style={{ borderRadius: 4 }}
      name="query"
      role="search"
      placeholder={
        country
          ? `Search universities in ${country.name}`
          : 'Search all universities'
      }
      large
      leftElement={<Icon icon="search" />}
      rightElement={
        <div className="flex items-center">
          {value && (
            <Button
              minimal
              intent="primary"
              icon="cross"
              loading={loading}
              onClick={() => {
                onChange('');
              }}
            />
          )}
          <CountrySelect value={country} onChange={setCountry} />
        </div>
      }
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
