'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle12Styles = exports.Circle11Styles = exports.Circle10Styles = exports.Circle9Styles = exports.Circle8Styles = exports.Circle7Styles = exports.Circle6Styles = exports.Circle5Styles = exports.Circle4Styles = exports.Circle3Styles = exports.Circle2Styles = exports.CircleStyles = exports.SpinnerStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  margin: 100px auto;\n  width: ', ';\n  height: ', ';\n'], ['\n  position: relative;\n  margin: 100px auto;\n  width: ', ';\n  height: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  &:before {\n    content: \'\';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: ', ';\n    border-radius: 100%;\n    animation: ', ' 1.2s infinite ease-in-out both;\n  }\n'], ['\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  &:before {\n    content: \'\';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: ', ';\n    border-radius: 100%;\n    animation: ', ' 1.2s infinite ease-in-out both;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(30deg);\n  &:before {\n    animation-delay: -1.1s;\n  }\n'], ['\n  ', '\n  transform: rotate(30deg);\n  &:before {\n    animation-delay: -1.1s;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(60deg);\n  &:before {\n    animation-delay: -1s;\n  }\n'], ['\n  ', '\n  transform: rotate(60deg);\n  &:before {\n    animation-delay: -1s;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(90deg);\n  &:before {\n    animation-delay: -0.9s;\n  }\n'], ['\n  ', '\n  transform: rotate(90deg);\n  &:before {\n    animation-delay: -0.9s;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(120deg);\n  &:before {\n    animation-delay: -0.8s;\n  }\n'], ['\n  ', '\n  transform: rotate(120deg);\n  &:before {\n    animation-delay: -0.8s;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(150deg);\n  &:before {\n    animation-delay: -0.7s;\n  }\n'], ['\n  ', '\n  transform: rotate(150deg);\n  &:before {\n    animation-delay: -0.7s;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(180deg);\n  &:before {\n    animation-delay: -0.6s;\n  }\n'], ['\n  ', '\n  transform: rotate(180deg);\n  &:before {\n    animation-delay: -0.6s;\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(210deg);\n  &:before {\n    animation-delay: -0.5s;\n  }\n'], ['\n  ', '\n  transform: rotate(210deg);\n  &:before {\n    animation-delay: -0.5s;\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(240deg);\n  &:before {\n    animation-delay: -0.4s;\n  }\n'], ['\n  ', '\n  transform: rotate(240deg);\n  &:before {\n    animation-delay: -0.4s;\n  }\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(270deg);\n  &:before {\n    animation-delay: -0.3s;\n  }\n'], ['\n  ', '\n  transform: rotate(270deg);\n  &:before {\n    animation-delay: -0.3s;\n  }\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(300deg);\n  &:before {\n    animation-delay: -0.2s;\n  }\n'], ['\n  ', '\n  transform: rotate(300deg);\n  &:before {\n    animation-delay: -0.2s;\n  }\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  ', '\n  transform: rotate(330deg);\n  &:before {\n    animation-delay: -0.1s;\n  }\n'], ['\n  ', '\n  transform: rotate(330deg);\n  &:before {\n    animation-delay: -0.1s;\n  }\n']);

var _styledComponents = require('styled-components');

var _animations = require('../utils/animations');

var _defaults = require('../utils/defaults');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpinnerStyles = exports.SpinnerStyles = (0, _styledComponents.css)(_templateObject, function (p) {
  return (0, _defaults.size)(p);
}, function (p) {
  return (0, _defaults.size)(p);
});

var CircleStyles = exports.CircleStyles = (0, _styledComponents.css)(_templateObject2, function (p) {
  return (0, _defaults.color)(p);
}, _animations.circular);

var Circle2Styles = exports.Circle2Styles = (0, _styledComponents.css)(_templateObject3, CircleStyles);
var Circle3Styles = exports.Circle3Styles = (0, _styledComponents.css)(_templateObject4, CircleStyles);
var Circle4Styles = exports.Circle4Styles = (0, _styledComponents.css)(_templateObject5, CircleStyles);
var Circle5Styles = exports.Circle5Styles = (0, _styledComponents.css)(_templateObject6, CircleStyles);
var Circle6Styles = exports.Circle6Styles = (0, _styledComponents.css)(_templateObject7, CircleStyles);
var Circle7Styles = exports.Circle7Styles = (0, _styledComponents.css)(_templateObject8, CircleStyles);
var Circle8Styles = exports.Circle8Styles = (0, _styledComponents.css)(_templateObject9, CircleStyles);
var Circle9Styles = exports.Circle9Styles = (0, _styledComponents.css)(_templateObject10, CircleStyles);
var Circle10Styles = exports.Circle10Styles = (0, _styledComponents.css)(_templateObject11, CircleStyles);
var Circle11Styles = exports.Circle11Styles = (0, _styledComponents.css)(_templateObject12, CircleStyles);
var Circle12Styles = exports.Circle12Styles = (0, _styledComponents.css)(_templateObject13, CircleStyles);