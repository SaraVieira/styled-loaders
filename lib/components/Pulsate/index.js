'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t'], ['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 50%;\n\t\tbackground-color: ', ';\n\t\topacity: 0.6;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 50%;\n\t\tbackground-color: ', ';\n\t\topacity: 0.6;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral([' animation-delay: -1s; '], [' animation-delay: -1s; ']);

var _preact = require('preact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils//defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Pulsate = function Pulsate(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

			var DefaultBounce = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.pulsate, function (props) {
						return props.duration ? props.duration : '2.0s';
			});

			var Bounce2 = DefaultBounce.extend(_templateObject3);

			return (0, _preact.h)(
						Spinner,
						{ size: size },
						(0, _preact.h)(DefaultBounce, { color: color, duration: duration }),
						(0, _preact.h)(Bounce2, { color: color, duration: duration })
			);
};

exports.default = Pulsate;