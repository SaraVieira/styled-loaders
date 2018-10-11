import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { bar } from '../../utils/animations'
import { getColor } from '../../utils//defaults'

const Bar = ({ bgBar = '#efefef', color, duration = '0.5s' }) => {
    const PingPong = styled.div`
        position: relative;
        margin: 100px auto;
        width: 200px;
        height: 20px;
        background-color: ${bgBar};

        &::after {
            content: '';
            width: 50px;
            height: 20px;
            position: absolute;
            top: calc(50% - 10px);
            left: calc(50% - 100px);
            background-color: ${getColor(color)};
            animation: ${bar} ${duration} linear infinite alternate;
        }
    `
    return <PingPong bgBar={bgBar} color={color} duration={duration} />
}
export default Bar

Bar.propTypes = {
    /**
     * Background or the bar
     * default is #CCC
     */
    bgBar: PropTypes.string,

    /**
     * Background of the tab bar
     * default is #333
     */
    color: PropTypes.string,

    /**
     * transition duration
     * default is 0.5s
     */
    duration: PropTypes.string
}
