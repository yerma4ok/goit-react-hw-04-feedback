import React from 'react';

import { SectionBox, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <SectionBox>
        <Title>{title}</Title>
        {children}
      </SectionBox>
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
