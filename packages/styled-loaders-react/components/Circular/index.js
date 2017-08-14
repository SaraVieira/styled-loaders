import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  SpinnerStyles,
  CircleStyles,
  Circle2Styles,
  Circle3Styles,
  Circle4Styles,
  Circle5Styles,
  Circle6Styles,
  Circle7Styles,
  Circle8Styles,
  Circle9Styles,
  Circle10Styles,
  Circle11Styles,
  Circle12Styles
} from 'styled-loaders-common/styles/circular';

const Spinner = styled.div`${SpinnerStyles};`;
const Circle = styled.div`${CircleStyles};`;
const Circle2 = styled.div`${Circle2Styles};`;
const Circle3 = styled.div`${Circle3Styles};`;
const Circle4 = styled.div`${Circle4Styles};`;
const Circle5 = styled.div`${Circle5Styles};`;
const Circle6 = styled.div`${Circle6Styles};`;
const Circle7 = styled.div`${Circle7Styles};`;
const Circle8 = styled.div`${Circle8Styles};`;
const Circle9 = styled.div`${Circle9Styles};`;
const Circle10 = styled.div`${Circle10Styles};`;
const Circle11 = styled.div`${Circle11Styles};`;
const Circle12 = styled.div`${Circle12Styles};`;

const Circular = ({ color, size }) => {
  return (
    <Spinner size={size}>
      <Circle color={color} />
      <Circle2 color={color} />
      <Circle3 color={color} />
      <Circle4 color={color} />
      <Circle5 color={color} />
      <Circle6 color={color} />
      <Circle7 color={color} />
      <Circle8 color={color} />
      <Circle9 color={color} />
      <Circle10 color={color} />
      <Circle11 color={color} />
      <Circle12 color={color} />
    </Spinner>
  );
};

export default Circular;

Circular.propTypes = {
  /**
	 * Background of the spinner
	 * default is #333
	 */
  color: PropTypes.string,

  /**
	 * Size of the spinner
	 * default is 40px
	 */
  size: PropTypes.string
};
