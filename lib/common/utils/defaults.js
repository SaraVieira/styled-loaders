'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getSize = function getSize(size, defaultSize) {
    return size || defaultSize;
};

var getColor = function getColor(color, defaultColor) {
    return color || defaultColor;
};

var getDuration = function getDuration(duration, defaultDuration) {
    return duration || defaultDuration;
};

var getCubeSize = function getCubeSize(cubeSize, defaultSize) {
    return cubeSize || defaultSize;
};

var size = exports.size = function size(props) {
    var defaultSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '40px';
    return getSize(props.size, defaultSize);
};

var color = exports.color = function color(props) {
    var defaultColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';
    return getColor(props.color, defaultColor);
};

var duration = exports.duration = function duration(props, defaultDuration) {
    return getDuration(props.duration, defaultDuration);
};

var cubeSize = exports.cubeSize = function cubeSize(props, defaultSize) {
    return getCubeSize(props.cubeSize, defaultSize);
};