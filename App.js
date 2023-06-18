import { ActivityIndicator } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';
import { styled } from 'styled-components';
import Navigation from './src/router/Navigation';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { CustomTheme } from './src/helpers/CustomTheme';
import { RecoilRoot } from 'recoil';
const STATUSBAR_HEIGHT = Constants.statusBarHeight;
const padding = Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0;

export default function App() {
	const [fontLoaded, setFontLoaded] = React.useState(false);

	React.useEffect(() => {
		async function loadFont() {
			await Font.loadAsync({
				'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
			});
			await Font.loadAsync({
				'Khand-Regular': require('./assets/fonts/Khand-Regular.ttf'),
			});
			await Font.loadAsync({
				'Khand-Bold': require('./assets/fonts/Khand-Bold.ttf'),
			});
			await Font.loadAsync({
				'Khand-SemiBold': require('./assets/fonts/Khand-SemiBold.ttf'),
			});
			setFontLoaded(true);
		}

		loadFont();
	}, []);

	return (
		<RecoilRoot>
			<ContainerView padding={padding}>
				<StatusBar translucent style="light" />
				{fontLoaded ? (
					<Navigation />
				) : (
					<LoadingContainer>
						<ActivityIndicator size="large" color="white" />
					</LoadingContainer>
				)}
			</ContainerView>
		</RecoilRoot>
	);
}
const ContainerView = styled.SafeAreaView`
	padding: ${(props) => `${props.padding}px 0px 0px 0px`};
	flex: 1;
	justify-content: center;
	background-color: ${CustomTheme.colors.background};
	background-color: ${CustomTheme.colors.backgroundLinear};
`;

const LoadingContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;
