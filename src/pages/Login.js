import LogoComponent from '../components/Logo';
import { styled } from 'styled-components';
import CustomButton from '../components/CustomButton';
import { CustomTheme } from '../helpers/CustomTheme';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { fakeTokenAtom } from '../contexts/States';
import { TextInput, View } from 'react-native';
import CustomText from '../components/CustomText';

export default function Login() {
	const [name, setName] = React.useState('');
	const nameGlobalState = useSetRecoilState(fakeTokenAtom);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		const regexOnlyLetters = /^[a-zA-Z\s]+$/;
		if (!regexOnlyLetters.test(name) && name !== '') {
			setError('O nome deve conter apenas letras!');
			return;
		}
		if (name.length > 20) {
			setError('Você atingiu o máximo de caracteres!');
			return;
		}
		setError('');
	}, [name]);

	function setNameAndGoHome() {
		nameGlobalState(name);
	}

	return (
		<BackgrondView>
			<LogoContainer>
				<LogoComponent />
			</LogoContainer>

			<FormContainer>
				<InputContainer>
					<CustomInput
						onChangeText={(e) => setName(e)}
						value={name}
						placeholder="DIGITE SEU NOME"
						keyboardType="default"
					/>
				</InputContainer>
				<CustomButton
					disable={error !== ''}
					onClick={() => setNameAndGoHome()}
					fontSize="20px"
					heigth="30%"
					text="ENTRAR"
				/>
				{error !== '' && (
					<ErroTextContainer>
						<CustomText
							text={error}
							font="upperFont"
							color={CustomTheme.white}
						/>
					</ErroTextContainer>
				)}
			</FormContainer>
		</BackgrondView>
	);
}

const ErroTextContainer = styled(View)`
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LogoContainer = styled(View)`
	padding-top: 50px;
	height: 50%;
	display: flex;
	justify-content: center;
`;
const FormContainer = styled(View)`
	height: 50%;
	display: flex;
	padding-top: 40px;
	justify-content: flex-start;
	gap: 10px;
	width: 65%;
	flex-direction: column;
`;
const InputContainer = styled(View)`
	background-color: ${CustomTheme.colors.white};
	border-radius: 5px;
`;
const CustomInput = styled(TextInput)`
	height: 40px;
	padding: 0px 10px 0px 10px;
	font-size: 15px;
	font-style: normal;
	font-family: ${CustomTheme.upperFont};
`;

const BackgrondView = styled(View)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: ${CustomTheme.colors.background};
	background-color: ${CustomTheme.colors.backgroundLinear};
`;
