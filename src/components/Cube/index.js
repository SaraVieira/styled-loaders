import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { cube } from '../../utils/animations'
import { getSize, getColor } from '../../utils//defaults'

const Cube = ({ color, duration, size, cubeSize }) => {
    const Spinner = styled.div`
		margin: 100px auto;
		position: relative;
		width: ${getSize(size)};
		height: ${getSize(size)};
	`

    const DefaultCube = styled.div`
		width: ${props => (props.cubeSize ? props.cubeSize : '15px')};
		height: ${props => (props.cubeSize ? props.cubeSize : '15px')};
		position: absolute;
		top: 0;
		left: 0;
		background-color: ${getColor(color)};
		animation: ${cube} 2s infinite ease-in-out;
		animation-duration: ${props => (props.duration ? props.duration : '1.8s')};
	`

    const StyledCube = DefaultCube.extend` animation-delay: -0.9s; `

    return (
        <Spinner size={size}>
            <DefaultCube color={color} cubeSize={cubeSize} duration={duration} />
            <StyledCube color={color} cubeSize={cubeSize} duration={duration} />
        </Spinner>
    )
}

export default Cube

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
    cubeSize: PropTypes.string
}
