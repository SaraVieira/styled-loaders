'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cube9Styles = exports.Cube8Styles = exports.Cube7Styles = exports.Cube6Styles = exports.Cube5Styles = exports.Cube4Styles = exports.Cube3Styles = exports.Cube2Styles = exports.Cube1Styles = exports.SpinnerStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  margin: 100px auto;\n  width: ', ';\n  height: ', ';\n'], ['\n  position: relative;\n  margin: 100px auto;\n  width: ', ';\n  height: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 33%;\n  height: 33%;\n  background-color: ', ';\n  float: left;\n  animation: ', ' 1.3s infinite ease-in-out;\n'], ['\n  width: 33%;\n  height: 33%;\n  background-color: ', ';\n  float: left;\n  animation: ', ' 1.3s infinite ease-in-out;\n']),
    _templateObject3 = _taggedTemplateLiteral(['', '; animation-delay: 0.2s;'], ['', '; animation-delay: 0.2s;']),
    _templateObject4 = _taggedTemplateLiteral(['', '; animation-delay: 0.3s;'], ['', '; animation-delay: 0.3s;']),
    _templateObject5 = _taggedTemplateLiteral(['', '; animation-delay: 0.4s;'], ['', '; animation-delay: 0.4s;']),
    _templateObject6 = _taggedTemplateLiteral(['', '; animation-delay: 0.1s;'], ['', '; animation-delay: 0.1s;']),
    _templateObject7 = _taggedTemplateLiteral(['', '; animation-delay: 0s;'], ['', '; animation-delay: 0s;']);

var _styledComponents = require('styled-components');

var _animations = require('../utils/animations');

var _defaults = require('../utils/defaults');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpinnerStyles = exports.SpinnerStyles = (0, _styledComponents.css)(_templateObject, function (p) {
  return (0, _defaults.size)(p);
}, function (p) {
  return (0, _defaults.size)(p);
});

var CubeStyles = (0, _styledComponents.css)(_templateObject2, function (p) {
  return (0, _defaults.color)(p);
}, _animations.grid);

var Cube1Styles = exports.Cube1Styles = (0, _styledComponents.css)(_templateObject3, CubeStyles);
var Cube2Styles = exports.Cube2Styles = (0, _styledComponents.css)(_templateObject4, CubeStyles);
var Cube3Styles = exports.Cube3Styles = (0, _styledComponents.css)(_templateObject5, CubeStyles);
var Cube4Styles = exports.Cube4Styles = (0, _styledComponents.css)(_templateObject6, CubeStyles);
var Cube5Styles = exports.Cube5Styles = (0, _styledComponents.css)(_templateObject3, CubeStyles);
var Cube6Styles = exports.Cube6Styles = (0, _styledComponents.css)(_templateObject4, CubeStyles);
var Cube7Styles = exports.Cube7Styles = (0, _styledComponents.css)(_templateObject7, CubeStyles);
var Cube8Styles = exports.Cube8Styles = (0, _styledComponents.css)(_templateObject6, CubeStyles);
var Cube9Styles = exports.Cube9Styles = (0, _styledComponents.css)(_templateObject3, CubeStyles);