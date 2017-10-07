import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { scale } from '../../utils/animations'
import { getColor, getSize } from '../../utils/defaults'

const Scale = ({ ...props }) => {
    /* eslint-disable */
    const Spinner = styled.div`
        margin: 100px auto;
        animation: ${scale} 1.2s infinite ease-in-out;
        background: ${getColor(props.color)};
        width: ${getSize(props.size)};
        height: ${getSize(props.size)};
        border-radius: 100%;
        animation-duration: ${props =>
            props.duration ? props.duration : '1.0s'};
    `
    /* eslint-enable */

    return <Spinner {...props} />
}

export default Scale

Scale.propTypes = {
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
