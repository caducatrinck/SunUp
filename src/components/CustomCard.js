import { styled } from 'styled-components';
import { CustomTheme } from '../helpers/CustomTheme';

export default function CustomCard(props) {
	const { cardSchema, size = '120px' } = props;

	return (
		<CardContainer>
			{cardSchema.map((card) => (
				<Card size={size} key={card.title}>
					<CardTitleText>{card.title}</CardTitleText>
					<CardText>
						{card.data > 1000 ? card.data.toFixed() : card.data}
					</CardText>
					{card.secondTitle && (
						<CardTitleText>{card.secondTitle}</CardTitleText>
					)}
				</Card>
			))}
		</CardContainer>
	);
}

const CardContainer = styled.View`
	width: 100%;
	padding: 10px;
	display: flex;
	gap: 10px;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: row;
`;
const CardText = styled.Text`
	font-size: 40px;
	font-family: ${CustomTheme.upperFont};
	color: ${CustomTheme.colors.primary};
`;
const CardTitleText = styled.Text`
	font-size: 20px;
	font-family: ${CustomTheme.upperFont};
	color: ${CustomTheme.colors.primary};
`;

const Card = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${(props) => props.size};
	width: ${(props) => props.size};
	border-radius: 5px;
	background-color: ${CustomTheme.colors.secondary};
`;
