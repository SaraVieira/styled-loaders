import { css } from 'styled-components';
import { cube } from '../utils/animations';
import { size, color, duration, cubeSize } from '../utils/defaults';

export const SpinnerStyles = css`
		margin: 100px auto;
		position: relative;
		width: ${p => size(p)};
		height: ${p => size(p)};
	`;

export const DefaultCubeStyles = css`
		width: ${p => cubeSize(p, '15px')};
		height: ${p => cubeSize(p, '15px')};
		position: absolute;
		top: 0;
		left: 0;
		background-color: ${p => color(p)};
		animation: ${cube} 2.0s infinite ease-in-out;
		animation-duration: ${p => duration(p, '1.8s')};
	`;

export const CubeStyles = css`
  ${DefaultCubeStyles};
  animation-delay: -0.9s;
`;
