import { css } from 'styled-components';
import { rotateplane } from '../utils/animations';
import { getColor, getSize } from '../utils/defaults';

const SpinnerStyles = css`
  margin: 100px auto;
  animation: ${rotateplane} 1.2s infinite ease-in-out;
  background: ${p => getColor(p.color)};
  width: ${p => getSize(p.size)};
  height: ${p => getSize(p.size)};
  animation-duration: ${p => (p.duration ? p.duration : '1.2s')};
`;

export default SpinnerStyles;
