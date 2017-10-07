import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rotateplane } from '../../utils/animations'
import { getColor, getSize } from '../../utils/defaults'

const Block = ({ ...props }) => {
    /* eslint-disable */
    const Spinner = styled.div`
        margin: 100px auto;
        animation: ${rotateplane} 1.2s infinite ease-in-out;
        background: ${getColor(props.color)};
        width: ${getSize(props.size)};
        height: ${getSize(props.size)};
        animation-duration: ${props =>
            props.duration ? props.duration : '1.2s'};
    `
    /* eslint-enable */

    return <Spinner {...props} />
}

export default Block

Block.propTypes = {
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
}
