import { ActivityIndicator } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';
import { styled } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/router/Navigation';

export default function App() {
	const [fontLoaded, setFontLoaded] = React.useState(false);

	React.useEffect(() => {
		async function loadFont() {
			await Font.loadAsync({
				'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
			});
			setFontLoaded(true);
		}

		loadFont();
	}, []);

	return fontLoaded ? (
		<Container>
			<Navigation />
			<StatusBar style="light" />
		</Container>
	) : (
		<LoadingContainer>
			<ActivityIndicator size="large" color="white" />
		</LoadingContainer>
	);
}

const LoadingContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: rgb(2, 0, 36);
	background-color: linear-gradient(
		135deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(14, 14, 84, 1) 46%
	);
`;
const Container = styled.View`
	flex: 1;
	justify-content: center;
`;
