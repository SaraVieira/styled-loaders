import { css } from 'styled-components';
import { rotateplane } from '../utils/animations';
import { size, color, duration } from '../utils/defaults';

const SpinnerStyles = css`
  margin: 100px auto;
  animation: ${rotateplane} 1.2s infinite ease-in-out;
  background: ${p => color(p)};
  width: ${p => size(p)};
  height: ${p => size(p)};
  animation-duration: ${p => duration(p, '1.2s')};
`;

export default SpinnerStyles;
