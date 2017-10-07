'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\ttext-align: center;\n\t\tfont-size: 10px;\n\t\theight: ', ';\n\t'], ['\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\ttext-align: center;\n\t\tfont-size: 10px;\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\tbackground-color: ', ';\n\t\theight: 100%;\n\t\twidth: ', ';\n\t\tdisplay: inline-block;\n\t\tanimation: ', ' 1.2s infinite ease-in-out;\n\t\tanimation-duration: ', 's;\n\t'], ['\n\t\tbackground-color: ', ';\n\t\theight: 100%;\n\t\twidth: ', ';\n\t\tdisplay: inline-block;\n\t\tanimation: ', ' 1.2s infinite ease-in-out;\n\t\tanimation-duration: ', 's;\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\tanimation-delay: -', 's;\n\t'], ['\n\t\tanimation-delay: -', 's;\n\t']);

var _preact = require('preact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils//defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Stretch = function Stretch(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size;

			var durationTime = function durationTime(durationT) {
						return durationT ? parseInt(durationT, 10) : 1.2;
			};
			var Spinner = _styledComponents2.default.div(_templateObject, function (props) {
						return props.size ? props.size : '50px';
			}, (0, _defaults.getSize)(size));

			var DefaultRect = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), function (props) {
						return props.rectWidth ? props.rectWidth : '6px';
			}, _animations.stretch, durationTime(duration));

			var Rect2 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.1);
			var Rect3 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.2);
			var Rect4 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.3);
			var Rect5 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.4);

			return (0, _preact.h)(
						Spinner,
						{ size: size },
						(0, _preact.h)(DefaultRect, null),
						(0, _preact.h)(Rect2, null),
						(0, _preact.h)(Rect3, null),
						(0, _preact.h)(Rect4, null),
						(0, _preact.h)(Rect5, null)
			);
};

exports.default = Stretch;


Stretch.propTypes = {

			/**
   * Background of the spinner
   * default is #333
   */
			color: _propTypes2.default.string,

			/**
   * Width of each rectangle
   * default is 6px
   */
			rectWidth: _propTypes2.default.string,

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