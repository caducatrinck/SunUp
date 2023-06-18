import { ActivityIndicator } from 'react-native-paper';
import { styled } from 'styled-components';

export default function CustomLoading() {
	return (
		<LoadingContainer>
			<ActivityIndicator size="large" color="white" />
		</LoadingContainer>
	);
}
const LoadingContainer = styled.View`
	width: auto;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;
