import { styled } from 'styled-components';
import { CustomTheme } from '../helpers/CustomTheme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useResetRecoilState } from 'recoil';
import { fakeTokenAtom } from '../contexts/States';
import { Text } from 'react-native';

export default function Header(props) {
	const { title } = props;
	const resetToken = useResetRecoilState(fakeTokenAtom);
	const navigation = useNavigation();

	return (
		<>
			<HeaderContainer>
				<LogoutContainer>
					<LogoutText onPress={() => resetToken()}>LOGOUT</LogoutText>
					<LogoutIcon
						type="outlined"
						name="sign-out"
						size={15}
						onPress={() => resetToken()}
					/>
				</LogoutContainer>
				<HeaderTitleContainer>
					<HeaderText>{title}</HeaderText>
				</HeaderTitleContainer>
			</HeaderContainer>
			<BackContainer>
				{navigation.canGoBack() && title !== 'Home' && (
					<BackIcon
						name="arrow-left"
						size={24}
						onPress={() => navigation.goBack()}
					>
						<BackText>{`  Voltar`}</BackText>
					</BackIcon>
				)}
			</BackContainer>
		</>
	);
}

const HeaderContainer = styled.View`
	width: 100%;
	height: 80px;
	border-radius: 0 0 50px 50px;
	display: flex;
	padding-top: 5px;
	flex-direction: column;
	background-color: ${CustomTheme.colors.secondary};
`;
const BackIcon = styled(Icon)`
	color: ${CustomTheme.colors.white};
	padding: 5px;
	height: 40px;
`;
const LogoutIcon = styled(Icon)`
	height: 13px;
	display: flex;
	align-items: flex-end;
	width: 20px;
	color: ${CustomTheme.colors.white};
`;

const LogoutContainer = styled.View`
	width: 100%;
	padding-right: 10px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
`;

const HeaderTitleContainer = styled.View`
	width: 100%;
	height: 25px;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: flex-start;
`;

const BackContainer = styled.View`
	padding: 20px 0 0 15px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
`;

const LogoutText = styled.Text`
	font-size: 20px;
	padding-right: 5px;
	font-family: ${CustomTheme.upperFont};
	color: ${CustomTheme.colors.white};
`;

const BackText = styled.Text`
	font-size: 30px;
	font-family: ${CustomTheme.upperFont};
	color: ${CustomTheme.colors.white};
`;
const HeaderText = styled.Text`
	font-size: 25px;
	font-family: ${`${CustomTheme.upperFont}`};
	color: ${CustomTheme.colors.primary};
`;
