'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\ttext-align: center;\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\ttext-align: center;\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: 60%;\n\t\theight: 60%;\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tborder-radius: 100%;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\twidth: 60%;\n\t\theight: 60%;\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tborder-radius: 100%;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\ttop: auto;\n\t\tbottom: 0;\n\t\tanimation-delay: -1s;\n\t'], ['\n\t\ttop: auto;\n\t\tbottom: 0;\n\t\tanimation-delay: -1s;\n\t']);

var _preact = require('preact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils/defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RotateScale = function RotateScale(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size), _animations.rotate, function (props) {
						return props.duration ? props.duration : '2s';
			});

			var DefaultCube = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.bounce, function (props) {
						return props.duration ? props.duration : '2s';
			});

			var Cube = DefaultCube.extend(_templateObject3);

			return (0, _preact.h)(
						Spinner,
						{ size: size, duration: duration },
						(0, _preact.h)(DefaultCube, { color: color, duration: duration }),
						(0, _preact.h)(Cube, { color: color, duration: duration })
			);
};

exports.default = RotateScale;


RotateScale.propTypes = {

			/**
   * Background of the spinner
   * default is #333
   */
			color: _propTypes2.default.string,

			/**
   * Animation duration
   * default is 1.2s
   */
			duration: _propTypes2.default.string,

			/**
   * Size of the spinner
   * default is 40px
   */
			size: _propTypes2.default.string
};