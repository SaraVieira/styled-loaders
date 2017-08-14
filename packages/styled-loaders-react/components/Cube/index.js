import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  SpinnerStyles,
  DefaultCubeStyles,
  CubeStyles,
} from 'styled-loaders-common/styles/cube';

const Spinner = styled.div`${SpinnerStyles};`;
const DefaultCube = styled.div`${DefaultCubeStyles};`;
const Cube1 = styled.div`${CubeStyles};`;

const Cube = ({ color, duration, size, cubeSize }) =>
  (<Spinner size={size}>
    <DefaultCube color={color} cubeSize={cubeSize} duration={duration} />
    <Cube1 color={color} cubeSize={cubeSize} duration={duration} />
  </Spinner>);

export default Cube;

Cube.propTypes = {
  /**
	 * Background of the spinner
	 * default is #333
	 */
  color: PropTypes.string,

  /**
	 * Animation duration
	 * default is 1.2s
	 */
  duration: PropTypes.string,

  /**
	 * Size of the spinner
	 * default is 40px
	 */
  size: PropTypes.string,

  /**
	 * Size of the each cube
	 * default is 15
	 */
  cubeSize: PropTypes.string,
};
