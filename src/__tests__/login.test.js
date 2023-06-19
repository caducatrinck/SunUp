import renderer from 'react-test-renderer';
import React from 'react';
import Login from '../pages/Login';
import { cleanup } from '@testing-library/react-native';

afterEach(cleanup);

test('Renderização correta?', () => {
	const tree = renderer.create(<Login />).toJSON();
	expect(tree).toMatchSnapshot();
});
