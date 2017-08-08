import { h } from 'preact';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { circular } from '../../utils/animations';
import { getSize, getColor } from '../../utils//defaults';

const Circular = ({ color, size }) => {
	const Spinner = styled.div`
		position: relative;
		margin: 100px auto;
		width: ${getSize(size)};
		height: ${getSize(size)};
	`;

	const Circle = styled.div`
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;

		&:before {
			content: '';
			display: block;
			margin: 0 auto;
			width: 15%;
			height: 15%;
			background-color: ${getColor(color)};
			border-radius: 100%;
			animation: ${circular} 1.2s infinite ease-in-out both;
		}
	`;

	const Circle2 = Circle.extend`transform: rotate(30deg); &:before{ animation-delay: -1.1s; }`;
	const Circle3 = Circle.extend`transform: rotate(60deg); &:before{ animation-delay: -1s; }`;
	const Circle4 = Circle.extend`transform: rotate(90deg); &:before{ animation-delay: -0.9s; }`;
	const Circle5 = Circle.extend`transform: rotate(120deg); &:before{ animation-delay: -0.8s; }`;
	const Circle6 = Circle.extend`transform: rotate(150deg); &:before{ animation-delay: -0.7s; }`;
	const Circle7 = Circle.extend`transform: rotate(180deg); &:before{ animation-delay: -0.6s; }`;
	const Circle8 = Circle.extend`transform: rotate(210deg); &:before{ animation-delay: -0.5s; }`;
	const Circle9 = Circle.extend`transform: rotate(240deg); &:before{ animation-delay: -0.4s; }`;
	const Circle10 = Circle.extend`transform: rotate(270deg); &:before{ animation-delay: -0.3s; }`;
	const Circle11 = Circle.extend`transform: rotate(300deg); &:before{ animation-delay: -0.2s; }`;
	const Circle12 = Circle.extend`transform: rotate(330deg); &:before{ animation-delay: -0.1s; }`;

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
