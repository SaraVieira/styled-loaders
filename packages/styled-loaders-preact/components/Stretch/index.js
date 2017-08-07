import { h } from 'preact';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { stretch } from '../../utils/animations';
import { getSize, getColor } from '../../utils//defaults';

const Stretch = ({ color, duration, size, rectWidth }) => {
	const durationTime = duration => (duration ? parseInt(duration, 10) : 1.2);
	const Spinner = styled.div`
		margin: 100px auto;
		width: ${props => (props.size ? props.size : '50px')};
		text-align: center;
		font-size: 10px;
		height: ${getSize(size)};
	`;

	const DefaultRect = styled.div`
		background-color: ${getColor(color)};
		height: 100%;
		width: ${props => (props.rectWidth ? props.rectWidth : '6px')};
		display: inline-block;
		animation: ${stretch} 1.2s infinite ease-in-out;
		animation-duration: ${durationTime(duration)}s;
	`;

	const Rect2 = DefaultRect.extend`
		animation-delay: -${durationTime(duration) - 0.1}s;
	`;
	const Rect3 = DefaultRect.extend`
		animation-delay: -${durationTime(duration) - 0.2}s;
	`;
	const Rect4 = DefaultRect.extend`
		animation-delay: -${durationTime(duration) - 0.3}s;
	`;
	const Rect5 = DefaultRect.extend`
		animation-delay: -${durationTime(duration) - 0.4}s;
	`;

	return (
		<Spinner size={size}>
			<DefaultRect />
			<Rect2 />
			<Rect3 />
			<Rect4 />
			<Rect5 />
		</Spinner>
	);
};

export default Stretch;

Stretch.propTypes = {

	/**
	 * Background of the spinner
	 * default is #333
	 */
	color: PropTypes.string,

	/**
	 * Width of each rectangle
	 * default is 6px
	 */
	rectWidth: PropTypes.string,

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
