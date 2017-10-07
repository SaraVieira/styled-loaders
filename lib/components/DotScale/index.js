'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tmargin: 100px auto 0;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\ttext-align: center;\n\t'], ['\n\t\tmargin: 100px auto 0;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\ttext-align: center;\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tborder-radius: 100%;\n\t\tdisplay: inline-block;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 1.4s infinite ease-in-out both;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tborder-radius: 100%;\n\t\tdisplay: inline-block;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 1.4s infinite ease-in-out both;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral([' animation-delay: -0.32s; '], [' animation-delay: -0.32s; ']),
    _templateObject4 = _taggedTemplateLiteral([' animation-delay: -0.16s; '], [' animation-delay: -0.16s; ']);

var _preact = require('preact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils/defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DotScale = function DotScale(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size,
			    dotSize = _ref.dotSize;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

			var DefaultDot = _styledComponents2.default.div(_templateObject2, function (props) {
						return props.dotSize ? props.dotSize : '18px';
			}, function (props) {
						return props.dotSize ? props.dotSize : '18px';
			}, (0, _defaults.getColor)(color), _animations.dots, function (props) {
						return props.duration ? props.duration : '1.4s';
			});

			var Dot1 = DefaultDot.extend(_templateObject3);

			var Dot2 = DefaultDot.extend(_templateObject4);

			return (0, _preact.h)(
						Spinner,
						{ size: size },
						(0, _preact.h)(Dot1, { color: color, duration: duration, dotSize: dotSize }),
						(0, _preact.h)(Dot2, { color: color, duration: duration, dotSize: dotSize })
			);
};

exports.default = DotScale;


DotScale.propTypes = {

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
			size: _propTypes2.default.string,

			/**
   * Size of the dots
   * default is 18px
   */
			dotSize: _propTypes2.default.string
};