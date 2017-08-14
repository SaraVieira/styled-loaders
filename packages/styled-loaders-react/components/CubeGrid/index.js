import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  SpinnerStyles,
  Cube1Styles,
  Cube2Styles,
  Cube3Styles,
  Cube4Styles,
  Cube5Styles,
  Cube6Styles,
  Cube7Styles,
  Cube8Styles,
  Cube9Styles,
} from 'styled-loaders-common/styles/cubeGrid';

const Spinner = styled.div`${SpinnerStyles};`;
const Cube1 = styled.div`${Cube1Styles};`;
const Cube2 = styled.div`${Cube2Styles};`;
const Cube3 = styled.div`${Cube3Styles};`;
const Cube4 = styled.div`${Cube4Styles};`;
const Cube5 = styled.div`${Cube5Styles};`;
const Cube6 = styled.div`${Cube6Styles};`;
const Cube7 = styled.div`${Cube7Styles};`;
const Cube8 = styled.div`${Cube8Styles};`;
const Cube9 = styled.div`${Cube9Styles};`;

const CubeGrid = ({ color, size }) =>
  (<Spinner size={size}>
    <Cube1 color={color} />
    <Cube2 color={color} />
    <Cube3 color={color} />
    <Cube4 color={color} />
    <Cube5 color={color} />
    <Cube6 color={color} />
    <Cube7 color={color} />
    <Cube8 color={color} />
    <Cube9 color={color} />
  </Spinner>);

export default CubeGrid;

CubeGrid.propTypes = {
  /**
	 * Background of the spinner
	 * default is #333
	 */
  color: PropTypes.string,

  /**
	 * Size of the spinner
	 * default is 40px
	 */
  size: PropTypes.string,
};
