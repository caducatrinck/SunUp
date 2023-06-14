import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'styled-components';
import { CustomTheme } from '../helpers/CustomTheme';
import React from 'react';

export default function CustomButton(props) {
	const [pressButton, setPressButton] = React.useState(false);
	const { text, onClick } = props;

	const fontSize = '30px';
	const lineHeight = '55px';
	const height = '50px';
	const width = '150px';

	return (
		<DefaultButton
			onPressIn={() => setPressButton(true)}
			onPressOut={() => setPressButton(false)}
			onPress={() => onClick()}
			height={height}
			width={width}
			active={pressButton}
		>
			<CustomText lineHeight={lineHeight} fontSize={fontSize}>
				{text}
			</CustomText>
		</DefaultButton>
	);
}
const CustomText = styled.Text`
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineHeight};
	font-family: 'Poppins-Regular';
	text-align: center;
	color: ${CustomTheme.colors.black};
	padding: 0 5px 0 5px;
`;
const DefaultButton = styled.TouchableOpacity`
	background-color: ${CustomTheme.colors.white};
	border-radius: 5px;
	display: flex;
	height: ${(props) => props.height};
	justify-content: center;
	align-items: center;
	border: 0;
	margin: 0;
`;
