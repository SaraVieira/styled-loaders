import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { dots } from '../../utils/animations'
import { getSize, getColor } from '../../utils/defaults'

const DotScale = ({ color, duration, size, dotSize }) => {
    const Spinner = styled.div`
		margin: 100px auto 0;
		position: relative;
		width: ${getSize(size)};
		height: ${getSize(size)};
		text-align: center;
	`

    const DefaultDot = styled.div`
		width: ${props => (props.dotSize ? props.dotSize : '18px')};
		height: ${props => (props.dotSize ? props.dotSize : '18px')};
		border-radius: 100%;
		display: inline-block;
		background-color: ${getColor(color)};
		animation: ${dots} 1.4s infinite ease-in-out both;
		animation-duration: ${props => (props.duration ? props.duration : '1.4s')};
	`

    const Dot1 = DefaultDot.extend`animation-delay: -0.32s;`

    const Dot2 = DefaultDot.extend`animation-delay: -0.16s;`

    return (
        <Spinner size={size}>
            <Dot1 color={color} duration={duration} dotSize={dotSize} />
            <Dot2 color={color} duration={duration} dotSize={dotSize} />
        </Spinner>
    )
}

export default DotScale

DotScale.propTypes = {

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
	 * Size of the dots
	 * default is 18px
	 */
    dotSize: PropTypes.string
}
