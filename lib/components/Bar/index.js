'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        position: relative;\n        margin: 100px auto;\n        width: 200px;\n        height: 20px;\n        background-color: ', ';\n\n        &::after {\n            content: \'\';\n            width: 50px;\n            height: 20px;\n            position: absolute;\n            top: calc(50% - 10px);\n            left: calc(50% - 100px);\n            background-color: ', ';\n            animation: ', ' ', ' linear infinite alternate;\n        }\n    '], ['\n        position: relative;\n        margin: 100px auto;\n        width: 200px;\n        height: 20px;\n        background-color: ', ';\n\n        &::after {\n            content: \'\';\n            width: 50px;\n            height: 20px;\n            position: absolute;\n            top: calc(50% - 10px);\n            left: calc(50% - 100px);\n            background-color: ', ';\n            animation: ', ' ', ' linear infinite alternate;\n        }\n    ']);

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
    var _ref$bgBar = _ref.bgBar,
        bgBar = _ref$bgBar === undefined ? '#efefef' : _ref$bgBar,
        color = _ref.color,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? '0.5s' : _ref$duration;

    var PingPong = _styledComponents2.default.div(_templateObject, bgBar, (0, _defaults.getColor)(color), _animations.bar, duration);
    return (0, _preact.h)(PingPong, { bgBar: bgBar, color: color, duration: duration });
};
exports.default = Bar;