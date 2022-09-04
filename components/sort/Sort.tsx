import { Menu, MenuDivider, Button } from '@blueprintjs/core';
import { Popover2, MenuItem2 } from '@blueprintjs/popover2';
import { UniversitiesOrderBy } from 'graphql/generated';

interface Props {
  showCountry?: boolean;
  value: UniversitiesOrderBy;
  onChange: (value: UniversitiesOrderBy) => void;
}

const textMap: Partial<Record<UniversitiesOrderBy, string>> = {
  [UniversitiesOrderBy.NameAsc]: 'Name A-Z',
  [UniversitiesOrderBy.NameDesc]: 'Name Z-A',
  [UniversitiesOrderBy.CountryIso2Asc]: 'Country A-Z',
  [UniversitiesOrderBy.CountryIso2Desc]: 'Country Z-A',
};

export default function Sort({ showCountry = true, value, onChange }: Props) {
  return (
    <Popover2
      minimal
      placement="bottom-end"
      content={
        <Menu>
          <MenuItem2
            icon="sort-alphabetical"
            text={textMap[UniversitiesOrderBy.NameAsc]}
            active={value === UniversitiesOrderBy.NameAsc}
            onClick={() => onChange(UniversitiesOrderBy.NameAsc)}
          />
          <MenuItem2
            icon="sort-alphabetical-desc"
            text={textMap[UniversitiesOrderBy.NameDesc]}
            active={value === UniversitiesOrderBy.NameDesc}
            onClick={() => onChange(UniversitiesOrderBy.NameDesc)}
          />
          {showCountry && (
            <>
              <MenuDivider />
              <MenuItem2
                icon="sort-alphabetical"
                text={textMap[UniversitiesOrderBy.CountryIso2Asc]}
                active={value === UniversitiesOrderBy.CountryIso2Asc}
                onClick={() => onChange(UniversitiesOrderBy.CountryIso2Asc)}
              />
              <MenuItem2
                icon="sort-alphabetical-desc"
                text={textMap[UniversitiesOrderBy.CountryIso2Desc]}
                active={value === UniversitiesOrderBy.CountryIso2Desc}
                onClick={() => onChange(UniversitiesOrderBy.CountryIso2Desc)}
              />
            </>
          )}
        </Menu>
      }
    >
      <Button text={`Sort by: ${textMap[value]}`} rightIcon="sort" />
    </Popover2>
  );
}
