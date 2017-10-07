'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t'], ['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\n\t\t&:before {\n\t\t\tcontent: \'\';\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 auto;\n\t\t\twidth: 15%;\n\t\t\theight: 15%;\n\t\t\tbackground-color: ', ';\n\t\t\tborder-radius: 100%;\n\t\t\tanimation: ', ' 1.2s infinite ease-in-out both;\n\t\t}\n\t'], ['\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\n\t\t&:before {\n\t\t\tcontent: \'\';\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 auto;\n\t\t\twidth: 15%;\n\t\t\theight: 15%;\n\t\t\tbackground-color: ', ';\n\t\t\tborder-radius: 100%;\n\t\t\tanimation: ', ' 1.2s infinite ease-in-out both;\n\t\t}\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['transform: rotate(30deg); &:before{ animation-delay: -1.1s; }'], ['transform: rotate(30deg); &:before{ animation-delay: -1.1s; }']),
    _templateObject4 = _taggedTemplateLiteral(['transform: rotate(60deg); &:before{ animation-delay: -1s; }'], ['transform: rotate(60deg); &:before{ animation-delay: -1s; }']),
    _templateObject5 = _taggedTemplateLiteral(['transform: rotate(90deg); &:before{ animation-delay: -0.9s; }'], ['transform: rotate(90deg); &:before{ animation-delay: -0.9s; }']),
    _templateObject6 = _taggedTemplateLiteral(['transform: rotate(120deg); &:before{ animation-delay: -0.8s; }'], ['transform: rotate(120deg); &:before{ animation-delay: -0.8s; }']),
    _templateObject7 = _taggedTemplateLiteral(['transform: rotate(150deg); &:before{ animation-delay: -0.7s; }'], ['transform: rotate(150deg); &:before{ animation-delay: -0.7s; }']),
    _templateObject8 = _taggedTemplateLiteral(['transform: rotate(180deg); &:before{ animation-delay: -0.6s; }'], ['transform: rotate(180deg); &:before{ animation-delay: -0.6s; }']),
    _templateObject9 = _taggedTemplateLiteral(['transform: rotate(210deg); &:before{ animation-delay: -0.5s; }'], ['transform: rotate(210deg); &:before{ animation-delay: -0.5s; }']),
    _templateObject10 = _taggedTemplateLiteral(['transform: rotate(240deg); &:before{ animation-delay: -0.4s; }'], ['transform: rotate(240deg); &:before{ animation-delay: -0.4s; }']),
    _templateObject11 = _taggedTemplateLiteral(['transform: rotate(270deg); &:before{ animation-delay: -0.3s; }'], ['transform: rotate(270deg); &:before{ animation-delay: -0.3s; }']),
    _templateObject12 = _taggedTemplateLiteral(['transform: rotate(300deg); &:before{ animation-delay: -0.2s; }'], ['transform: rotate(300deg); &:before{ animation-delay: -0.2s; }']),
    _templateObject13 = _taggedTemplateLiteral(['transform: rotate(330deg); &:before{ animation-delay: -0.1s; }'], ['transform: rotate(330deg); &:before{ animation-delay: -0.1s; }']);

var _preact = require('preact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils//defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Circular = function Circular(_ref) {
    var color = _ref.color,
        size = _ref.size;

    var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

    var Circle = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.circular);

    var Circle2 = Circle.extend(_templateObject3);
    var Circle3 = Circle.extend(_templateObject4);
    var Circle4 = Circle.extend(_templateObject5);
    var Circle5 = Circle.extend(_templateObject6);
    var Circle6 = Circle.extend(_templateObject7);
    var Circle7 = Circle.extend(_templateObject8);
    var Circle8 = Circle.extend(_templateObject9);
    var Circle9 = Circle.extend(_templateObject10);
    var Circle10 = Circle.extend(_templateObject11);
    var Circle11 = Circle.extend(_templateObject12);
    var Circle12 = Circle.extend(_templateObject13);

    return (0, _preact.h)(
        Spinner,
        { size: size },
        (0, _preact.h)(Circle, { color: color }),
        (0, _preact.h)(Circle2, { color: color }),
        (0, _preact.h)(Circle3, { color: color }),
        (0, _preact.h)(Circle4, { color: color }),
        (0, _preact.h)(Circle5, { color: color }),
        (0, _preact.h)(Circle6, { color: color }),
        (0, _preact.h)(Circle7, { color: color }),
        (0, _preact.h)(Circle8, { color: color }),
        (0, _preact.h)(Circle9, { color: color }),
        (0, _preact.h)(Circle10, { color: color }),
        (0, _preact.h)(Circle11, { color: color }),
        (0, _preact.h)(Circle12, { color: color })
    );
};

exports.default = Circular;


Circular.propTypes = {

    /**
    * Background of the spinner
    * default is #333
    */
    color: _propTypes2.default.string,

    /**
    * Size of the spinner
    * default is 40px
    */
    size: _propTypes2.default.string
};