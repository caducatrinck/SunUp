import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'styled-components';
import { CustomTheme } from '../helpers/CustomTheme';
import React from 'react';

export default function CustomButton(props) {
	const [pressButton, setPressButton] = React.useState(false);
	const {
		text,
		onClick,
		fontSize = '20px',
		height = '40px',
		width = 'auto',
		disabled = false,
	} = props;

	return (
		<DefaultButton
			disabled={disabled}
			onPressIn={() => setPressButton(true)}
			onPressOut={() => setPressButton(false)}
			onPress={() => onClick()}
			height={height}
			width={width}
			active={pressButton}
		>
			<CustomText fontSize={fontSize}>{text}</CustomText>
		</DefaultButton>
	);
}
const CustomText = styled.Text`
	font-size: ${(props) => props.fontSize};
	font-family: ${CustomTheme.upperFont};
	text-align: center;
	color: ${CustomTheme.colors.primary};
`;
const DefaultButton = styled.TouchableOpacity`
	background-color: ${CustomTheme.colors.secondary};
	border-radius: 5px;
	display: flex;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	justify-content: center;
	align-items: center;
	border: 0;
	margin: 0;
`;
