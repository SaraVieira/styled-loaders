'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 100px auto;\n  animation: ', ' 1.2s infinite ease-in-out;\n  background: ', ';\n  width: ', ';\n  height: ', ';\n  animation-duration: ', ';\n'], ['\n  margin: 100px auto;\n  animation: ', ' 1.2s infinite ease-in-out;\n  background: ', ';\n  width: ', ';\n  height: ', ';\n  animation-duration: ', ';\n']);

var _styledComponents = require('styled-components');

var _animations = require('../utils/animations');

var _defaults = require('../utils/defaults');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpinnerStyles = (0, _styledComponents.css)(_templateObject, _animations.rotateplane, function (p) {
  return (0, _defaults.color)(p);
}, function (p) {
  return (0, _defaults.size)(p);
}, function (p) {
  return (0, _defaults.size)(p);
}, function (p) {
  return (0, _defaults.duration)(p, '1.2s');
});

exports.default = SpinnerStyles;