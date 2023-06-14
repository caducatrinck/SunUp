import LogoComponent from '../components/Logo';
import { styled } from 'styled-components';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
	const navigation = useNavigation();
	return (
		<BackgrondView>
			<LogoComponent />
			<CustomButton
				onClick={() => navigation.navigate('Dashboard')}
				text="Entrar"
			/>
		</BackgrondView>
	);
}

const BackgrondView = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-evenly;
	font-family: 'Poppins-Regular';
	align-items: center;
	background-color: rgb(2, 0, 36);
	background-color: linear-gradient(
		135deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(14, 14, 84, 1) 46%
	);
`;
