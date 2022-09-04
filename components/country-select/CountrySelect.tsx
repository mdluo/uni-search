import { Button } from '@blueprintjs/core';
import { Select2 } from '@blueprintjs/select';
import { MenuItem2 } from '@blueprintjs/popover2';

import { getFlagEmoji } from 'libs/emoji';

import data from './data.json';

export interface Country {
  iso2: string;
  name: string;
}

const Select = Select2.ofType<Country>();

interface Props {
  value?: Country;
  onChange: (country?: Country) => void;
}

const items = [{ iso2: '', name: 'Global', emoji: '🌏' }, ...data];

export default function CountrySelect({ value, onChange }: Props) {
  return (
    <Select
      popoverProps={{ placement: 'bottom-end' }}
      menuProps={{
        style: { minWidth: 300, maxHeight: 400, overflowY: 'auto' },
      }}
      items={items}
      itemPredicate={(query, { iso2, name }) => {
        const lowerQuery = query.toLowerCase();
        return (
          iso2.toLowerCase() === lowerQuery ||
          name.toLowerCase().includes(lowerQuery)
        );
      }}
      itemRenderer={(
        { iso2, name },
        { modifiers, handleClick, handleFocus },
      ) => (
        <MenuItem2
          key={iso2}
          text={[getFlagEmoji(iso2), name].join(' ')}
          active={modifiers.active}
          onClick={handleClick}
          onFocus={handleFocus}
        />
      )}
      noResults={
        <MenuItem2
          disabled={true}
          text="No results."
          roleStructure="listoption"
        />
      }
      resetOnClose
      resetOnQuery
      resetOnSelect
      onItemSelect={(country) => {
        if (!country.iso2) {
          onChange(undefined);
        } else {
          onChange(country);
        }
      }}
    >
      <Button
        style={{ fontSize: 14 }}
        minimal
        icon={value ? null : 'geosearch'}
        rightIcon="caret-down"
      >
        {value ? [getFlagEmoji(value.iso2), value.name].join(' ') : 'Country'}
      </Button>
    </Select>
  );
}
