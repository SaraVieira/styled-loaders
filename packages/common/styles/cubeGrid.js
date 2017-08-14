import { css } from 'styled-components';
import { grid } from '../utils/animations';
import { size, color } from '../utils/defaults';

export const SpinnerStyles = css`
  position: relative;
  margin: 100px auto;
  width: ${p => size(p)};
  height: ${p => size(p)};
`;

const CubeStyles = css`
  width: 33%;
  height: 33%;
  background-color: ${p => color(p)};
  float: left;
  animation: ${grid} 1.3s infinite ease-in-out;
`;

export const Cube1Styles = css`${CubeStyles}; animation-delay: 0.2s;`;
export const Cube2Styles = css`${CubeStyles}; animation-delay: 0.3s;`;
export const Cube3Styles = css`${CubeStyles}; animation-delay: 0.4s;`;
export const Cube4Styles = css`${CubeStyles}; animation-delay: 0.1s;`;
export const Cube5Styles = css`${CubeStyles}; animation-delay: 0.2s;`;
export const Cube6Styles = css`${CubeStyles}; animation-delay: 0.3s;`;
export const Cube7Styles = css`${CubeStyles}; animation-delay: 0s;`;
export const Cube8Styles = css`${CubeStyles}; animation-delay: 0.1s;`;
export const Cube9Styles = css`${CubeStyles}; animation-delay: 0.2s;`;
