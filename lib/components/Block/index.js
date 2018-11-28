'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        margin: 100px auto;\n        animation: ', ' 1.2s infinite ease-in-out;\n        background: ', ';\n        width: ', ';\n        height: ', ';\n        animation-duration: ', ';\n    '], ['\n        margin: 100px auto;\n        animation: ', ' 1.2s infinite ease-in-out;\n        background: ', ';\n        width: ', ';\n        height: ', ';\n        animation-duration: ', ';\n    ']);

var _preact = require('preact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils/defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Block = function Block(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    /* eslint-disable */
    var Spinner = _styledComponents2.default.div(_templateObject, _animations.rotateplane, (0, _defaults.getColor)(props.color), (0, _defaults.getSize)(props.size), (0, _defaults.getSize)(props.size), function (props) {
        return props.duration ? props.duration : '1.2s';
    });
    /* eslint-enable */

    return (0, _preact.h)(Spinner, props);
};

exports.default = Block;