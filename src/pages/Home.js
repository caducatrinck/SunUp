import React from 'react';
import CustomSelect from '../components/CustomSelect';
import { styled } from 'styled-components';
import { CustomTheme } from '../helpers/CustomTheme';
import MakeRequest from '../helpers/MakeRequest';

import { useRecoilValue } from 'recoil';
import { fakeTokenAtom } from '../contexts/States';
import Header from '../components/Header';
import CustomCard from '../components/CustomCard';
import CustomLoading from '../components/CustomLoading';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CustomPage from '../components/CustomPage';

export default function Home() {
	const navigation = useNavigation();
	const [cardSchema, setCardSchema] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const fakeToken = useRecoilValue(fakeTokenAtom);

	React.useEffect(() => {
		async function getInfos() {
			setLoading(true);
			const response = await MakeRequest({ dataType: 'hourly' });
			setCardSchema([
				{ data: response.body.data.totals.kwh, title: 'KW/H' },
				{ data: `${response.body.data.totals.percentage}%`, title: 'META' },
				{
					data: response.body.data.totals.trees,
					title: 'SALVOU',
					secondTitle: 'ARVORES',
				},
				{
					data: response.body.data.totals.co2,
					title: 'EVITOU',
					secondTitle: 'CO²',
				},
			]);
			setLoading(false);
		}

		getInfos();
	}, []);

	return (
		<CustomPage title="Home">
			<CustomText>{fakeToken}, Bem vindo!</CustomText>
			{loading ? (
				<CustomLoading />
			) : cardSchema[0].data <= 0 ? (
				<>
					<CustomText>
						Infelizmente sua usina não gerou energia hoje!
					</CustomText>
				</>
			) : (
				<>
					<CustomText>Parabéns, sua usina gerou energia hoje!</CustomText>
					<CustomCard cardSchema={cardSchema} />
				</>
			)}
			<CustomButton
				width="80%"
				text="Buscar dados detalhados"
				onClick={() => navigation.navigate('Dashboard')}
			/>
		</CustomPage>
	);
}

const CustomText = styled.Text`
	font-size: 20px;
	font-family: ${CustomTheme.defaultFont};
	width: 100%;
	color: ${CustomTheme.colors.white};
	padding: 0 5px 0px 5px;
`;
