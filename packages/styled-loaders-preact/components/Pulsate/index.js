import { h } from 'preact';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pulsate } from '../../utils/animations';
import { getSize, getColor } from '../../utils//defaults';

const Pulsate = ({ color, duration, size }) => {
	const Spinner = styled.div`
		position: relative;
		margin: 100px auto;
		width: ${getSize(size)};
		height: ${getSize(size)};
	`;

	const DefaultBounce = styled.div`
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: ${getColor(color)};
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		animation: ${pulsate} 2.0s infinite ease-in-out;
		animation-duration: ${props => (props.duration ? props.duration : '2.0s')};
	`;

	const Bounce2 = DefaultBounce.extend`animation-delay: -1.0s;`;

	return (
		<Spinner size={size}>
			<DefaultBounce color={color} duration={duration} />
			<Bounce2 color={color} duration={duration} />
		</Spinner>
	);
};

export default Pulsate;

Pulsate.propTypes = {

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
	size: PropTypes.string
};
