'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t'], ['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: 33%;\n\t\theight: 33%;\n\t\tbackground-color: ', ';\n\t\tfloat: left;\n\t\tanimation: ', ' 1.3s infinite ease-in-out;\n\t'], ['\n\t\twidth: 33%;\n\t\theight: 33%;\n\t\tbackground-color: ', ';\n\t\tfloat: left;\n\t\tanimation: ', ' 1.3s infinite ease-in-out;\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0.2s;\n\t'], ['\n\t\tanimation-delay: 0.2s;\n\t']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0.3s;\n\t'], ['\n\t\tanimation-delay: 0.3s;\n\t']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0.4s;\n\t'], ['\n\t\tanimation-delay: 0.4s;\n\t']),
    _templateObject6 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0.1s;\n\t'], ['\n\t\tanimation-delay: 0.1s;\n\t']),
    _templateObject7 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0s;\n\t'], ['\n\t\tanimation-delay: 0s;\n\t']);

var _preact = require('preact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils//defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CubeGrid = function CubeGrid(_ref) {
			var color = _ref.color,
			    size = _ref.size;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

			var Cube = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.grid);

			var Cube1 = Cube.extend(_templateObject3);
			var Cube2 = Cube.extend(_templateObject4);
			var Cube3 = Cube.extend(_templateObject5);
			var Cube4 = Cube.extend(_templateObject6);
			var Cube5 = Cube.extend(_templateObject3);
			var Cube6 = Cube.extend(_templateObject4);
			var Cube7 = Cube.extend(_templateObject7);
			var Cube8 = Cube.extend(_templateObject6);
			var Cube9 = Cube.extend(_templateObject3);

			return (0, _preact.h)(
						Spinner,
						{ size: size },
						(0, _preact.h)(Cube1, { color: color }),
						(0, _preact.h)(Cube2, { color: color }),
						(0, _preact.h)(Cube3, { color: color }),
						(0, _preact.h)(Cube4, { color: color }),
						(0, _preact.h)(Cube5, { color: color }),
						(0, _preact.h)(Cube6, { color: color }),
						(0, _preact.h)(Cube7, { color: color }),
						(0, _preact.h)(Cube8, { color: color }),
						(0, _preact.h)(Cube9, { color: color })
			);
};

exports.default = CubeGrid;