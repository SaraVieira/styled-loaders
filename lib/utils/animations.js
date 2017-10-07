'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grid = exports.circular = exports.dots = exports.bounce = exports.rotate = exports.scale = exports.cube = exports.stretch = exports.pulsate = exports.rotateplane = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n\n\t50% {\n\t\ttransform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n\n\t100% {\n\t\ttransform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n\t}\n'], ['\n  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n\n\t50% {\n\t\ttransform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n\n\t100% {\n\t\ttransform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0%,\n  100% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n'], ['\n  0%,\n  100% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n  }\n\n  20% {\n    transform: scaleY(1);\n\t}\n'], ['\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n  }\n\n  20% {\n    transform: scaleY(1);\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n\n  50% {\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n  }\n\n  50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n\n  75% {\n    transform: translateX(0) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n\n  100% {\n    transform: rotate(-360deg);\n  }\n'], ['\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n\n  50% {\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n  }\n\n  50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n\n  75% {\n    transform: translateX(0) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n\n  100% {\n    transform: rotate(-360deg);\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n'], ['\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n   100% { transform: rotate(360deg); }\n'], ['\n   100% { transform: rotate(360deg); }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n\n  40% {\n    transform: scale(1);\n  }\n'], ['\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n\n  40% {\n    transform: scale(1);\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  0%,\n  70%,\n  100% {\n    transform: scale3D(1, 1, 1);\n  }\n\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n'], ['\n  0%,\n  70%,\n  100% {\n    transform: scale3D(1, 1, 1);\n  }\n\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotateplane = exports.rotateplane = (0, _styledComponents.keyframes)(_templateObject);

var pulsate = exports.pulsate = (0, _styledComponents.keyframes)(_templateObject2);

var stretch = exports.stretch = (0, _styledComponents.keyframes)(_templateObject3);

var cube = exports.cube = (0, _styledComponents.keyframes)(_templateObject4);

var scale = exports.scale = (0, _styledComponents.keyframes)(_templateObject5);

var rotate = exports.rotate = (0, _styledComponents.keyframes)(_templateObject6);

var bounce = exports.bounce = (0, _styledComponents.keyframes)(_templateObject2);

var dots = exports.dots = (0, _styledComponents.keyframes)(_templateObject7);

var circular = exports.circular = (0, _styledComponents.keyframes)(_templateObject7);

var grid = exports.grid = (0, _styledComponents.keyframes)(_templateObject8);