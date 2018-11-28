'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t'], ['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral([' animation-delay: -0.9s; '], [' animation-delay: -0.9s; ']);

var _preact = require('preact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils//defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Cube = function Cube(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size,
			    cubeSize = _ref.cubeSize;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

			var DefaultCube = _styledComponents2.default.div(_templateObject2, function (props) {
						return props.cubeSize ? props.cubeSize : '15px';
			}, function (props) {
						return props.cubeSize ? props.cubeSize : '15px';
			}, (0, _defaults.getColor)(color), _animations.cube, function (props) {
						return props.duration ? props.duration : '1.8s';
			});

			var StyledCube = DefaultCube.extend(_templateObject3);

			return (0, _preact.h)(
						Spinner,
						{ size: size },
						(0, _preact.h)(DefaultCube, { color: color, cubeSize: cubeSize, duration: duration }),
						(0, _preact.h)(StyledCube, { color: color, cubeSize: cubeSize, duration: duration })
			);
};

exports.default = Cube;