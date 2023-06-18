import { styled } from 'styled-components';
import { CustomTheme } from '../helpers/CustomTheme';
import Header from './Header';

export default function CustomPage(props) {
	const { children, title } = props;

	return (
		<BackgrondView>
			<Header title={title} />
			<HomeContainer>{children}</HomeContainer>
		</BackgrondView>
	);
}

const HomeContainer = styled.View`
	padding: 25px;
	width: 100%;
	display: flex;
	gap: 10px;
	justify-content: flex-start;
	align-items: center;
`;
const BackgrondView = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: ${CustomTheme.colors.background};
	background-color: ${CustomTheme.colors.backgroundLinear};
`;
