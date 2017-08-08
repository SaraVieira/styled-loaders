const render = require('preact-render-to-string');
const DotScale = require('../');
import 'jest-styled-components';

describe('DotScale component', () => {
	it('should render', () => {
		const tree = render(<DotScale />);
		expect(tree).toMatchSnapshot();
	});

	it('should render', () => {
		const tree = render(<DotScale color="#BADA55" />);
		expect(tree).toMatchSnapshot();
	});

	it('should render', () => {
		const tree = render(<DotScale duration="0.2s" />);
		expect(tree).toMatchSnapshot();
	});

	it('should render', () => {
		const tree = render(<DotScale dotSize="50px" size="200px" />);
		expect(tree).toMatchSnapshot();
	});
});
