'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.CubeStyles = exports.DefaultCubeStyles = exports.SpinnerStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t'], ['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2.0s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2.0s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', ';\n  animation-delay: -0.9s;\n'], ['\n  ', ';\n  animation-delay: -0.9s;\n']);

var _styledComponents = require('styled-components');

var _animations = require('../utils/animations');

var _defaults = require('../utils/defaults');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpinnerStyles = exports.SpinnerStyles = (0, _styledComponents.css)(_templateObject, function (p) {
		return (0, _defaults.size)(p);
}, function (p) {
		return (0, _defaults.size)(p);
});

var DefaultCubeStyles = exports.DefaultCubeStyles = (0, _styledComponents.css)(_templateObject2, function (p) {
		return (0, _defaults.cubeSize)(p, '15px');
}, function (p) {
		return (0, _defaults.cubeSize)(p, '15px');
}, function (p) {
		return (0, _defaults.color)(p);
}, _animations.cube, function (p) {
		return (0, _defaults.duration)(p, '1.8s');
});

var CubeStyles = exports.CubeStyles = (0, _styledComponents.css)(_templateObject3, DefaultCubeStyles);