import PropTypes from 'prop-types';
import Select from 'react-select';
import { DropdownWrapper } from './FilterDropdown.styled';


const options = [
  { value: 'show All', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

export const FilterDropdown = ({ onChange }) => {
  return (
    <DropdownWrapper>
      <label htmlFor="select"></label>
      <Select
        onChange={selectedOption => onChange(selectedOption.value)}
        options={options}
        styles={{
          control: baseStyles => ({
            ...baseStyles,
            background: '#ebd8ff',
            width: '200px',
          }),
        }}
      />
    </DropdownWrapper>
  );
};

FilterDropdown.propTypes = {
  onSelect: PropTypes.func,
};