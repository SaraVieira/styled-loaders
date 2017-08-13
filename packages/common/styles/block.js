import styled from 'styled-components';
import { rotateplane } from '../utils/animations';
import { getColor, getSize } from '../utils/defaults';

const Spinner = props =>
    styled.div`
        margin: 100px auto;
        animation: ${rotateplane} 1.2s infinite ease-in-out;
        background: ${getColor(props.color)};
        width: ${getSize(props.size)};
        height: ${getSize(props.size)};
        animation-duration: ${props => (props.duration ? props.duration : '1.2s')};
    `;

export default Spinner;
