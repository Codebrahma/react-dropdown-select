import React from 'react';
import styled from '@emotion/styled';

import Select from '../../../src';

const DropdownAutoPosition = ({ options, title }) => (
  <React.Fragment>
    <Title>
      <h2>{title}</h2>
      <a href="https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/DropdownAutoPosition.js">
        Source
      </a>
    </Title>
    <p>Scroll the page so the dropdown will have no space to open on the bottom, also changes position when dropdown is open (and <code>closeOnScroll</code> prop is not set or false)</p>
    <Select
      options={options}
      values={[]}
      dropdownPosition="auto"
      onChange={(value) =>
        console.log(`%c > onChange ${title} `, 'background: #555; color: tomato', value)
      }
    />
  </React.Fragment>
);

DropdownAutoPosition.propTypes = {};

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default DropdownAutoPosition;
