import { h } from 'preact';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { grid } from '../../utils/animations';
import { getSize, getColor } from '../../utils//defaults';

const CubeGrid = ({ color, size }) => {
	const Spinner = styled.div`
		position: relative;
		margin: 100px auto;
		width: ${getSize(size)};
		height: ${getSize(size)};
	`;

	const Cube = styled.div`
		width: 33%;
		height: 33%;
		background-color: ${getColor(color)};
		float: left;
		animation: ${grid} 1.3s infinite ease-in-out;
	`;

	const Cube1 = Cube.extend`
		animation-delay: 0.2s;
	`;
	const Cube2 = Cube.extend`
		animation-delay: 0.3s;
	`;
	const Cube3 = Cube.extend`
		animation-delay: 0.4s
	`;
	const Cube4 = Cube.extend`
		animation-delay: 0.1s
	`;
	const Cube5 = Cube.extend`
		animation-delay: 0.2s
	`;
	const Cube6 = Cube.extend`
		animation-delay: 0.3s
	`;
	const Cube7 = Cube.extend`
		animation-delay: 0s
	`;
	const Cube8 = Cube.extend`
		animation-delay: 0.1s
	`;
	const Cube9 = Cube.extend`
		animation-delay: 0.2s
	`;

	return (
		<Spinner size={size}>
			<Cube1 color={color} />
			<Cube2 color={color} />
			<Cube3 color={color} />
			<Cube4 color={color} />
			<Cube5 color={color} />
			<Cube6 color={color} />
			<Cube7 color={color} />
			<Cube8 color={color} />
			<Cube9 color={color} />
		</Spinner>
	);
};

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
	size: PropTypes.string
};
