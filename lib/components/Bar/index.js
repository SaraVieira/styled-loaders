'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  \tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: 200px;\n\t\theight: 20px;\n\t\tbackground-color: ', ';\n\n\t\t&::after {\n\t\t\tcontent: \'\';\n\t\t\twidth: 50px;\n\t\t\theight: 20px;\n\t\t\tposition: absolute;\n\t\t\ttop: calc(50% - 10px);\n\t\t\tleft: calc(50% - 100px);\n\t\t\tbackground-color: ', ';\n\t\t\tanimation: ', ' 0.5s linear infinite alternate;\n\t\t}\n    '], ['\n  \tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: 200px;\n\t\theight: 20px;\n\t\tbackground-color: ', ';\n\n\t\t&::after {\n\t\t\tcontent: \'\';\n\t\t\twidth: 50px;\n\t\t\theight: 20px;\n\t\t\tposition: absolute;\n\t\t\ttop: calc(50% - 10px);\n\t\t\tleft: calc(50% - 100px);\n\t\t\tbackground-color: ', ';\n\t\t\tanimation: ', ' 0.5s linear infinite alternate;\n\t\t}\n    ']);

var _preact = require('preact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils//defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bar = function Bar(_ref) {
				var bgBar = _ref.bgBar,
				    color = _ref.color;

				var PingPong = _styledComponents2.default.div(_templateObject, (0, _defaults.getBgBar)(bgBar), (0, _defaults.getColor)(color), _animations.bar);
				return (0, _preact.h)(PingPong, { bgBar: bgBar, color: color });
};
exports.default = Bar;


Bar.propTypes = {
				/**
    * Backfround or the bar 
    * default is #CCC
    */
				bgBar: _propTypes2.default.string,

				/**
    * Background of the tab bar
    * default is #333
    */
				color: _propTypes2.default.string
};