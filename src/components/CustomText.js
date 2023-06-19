import { styled } from 'styled-components';
import { CustomTheme } from '../helpers/CustomTheme';
import { Text } from 'react-native';
export default function CustomText(props) {
	const { text, color, font, fontSize = '15px' } = props;

	return (
		<StyledText color={color} font={font} fontSize={fontSize}>
			{text}
		</StyledText>
	);
}
const StyledText = styled(Text)`
	font-family: ${(props) =>
		props.font === 'upperFont'
			? CustomTheme.upperFont
			: CustomTheme.defaultFont};
	font-size: ${(props) => props.fontSize};
	color: ${(props) => (props.color ? props.color : CustomTheme.colors.white)};
`;
