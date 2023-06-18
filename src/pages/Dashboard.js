import React from 'react';
import CustomSelect from '../components/CustomSelect';
import { styled } from 'styled-components';
import { CustomTheme } from '../helpers/CustomTheme';
import MakeRequest from '../helpers/MakeRequest';
import { LineChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import CustomLoading from '../components/CustomLoading';
import CustomPage from '../components/CustomPage';
import CustomCard from '../components/CustomCard';
import { Icon } from 'react-native-elements';

export default function Dashboard() {
	const [filter, setFilter] = React.useState('hourly');
	const [page, setPage] = React.useState(1);
	const [cardSchema, setCardSchema] = React.useState([]);
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	React.useEffect(() => {
		async function getInfos() {
			setLoading(true);
			setPage(1);
			const response = await MakeRequest({ dataType: filter });
			console.log(response);
			setData(response.body.data);
			setCardSchema([
				{
					data: response.body.data.totals.kwh,
					title: 'GEROU',
					secondTitle: 'KW POR HORA',
				},
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
	}, [filter]);
	function formatLabel() {
		if (filter === 'hourly') {
			return data.x_labels?.map((label) => label.replace(':00:00', 'h'));
		}
		if (filter === 'daily') {
			return data.x_labels
				?.map((label, index) => {
					if (page === 1 && index < 15) {
						const num = label.split('-')[2];
						if (+num >= 10) {
							return num;
						}
						return num;
					}
					if (page === 2 && index >= 15) {
						return label.split('-')[2];
					}
				})
				.filter(Boolean);
		}
		if (filter === 'monthly') {
			return data.x_labels
				?.map((label, index) => {
					if (page === 1 && index < 6) {
						return `${label.split('-')[1]}/${label
							.split('-')[0]
							.replace('20', '')}`;
					}
					if (page === 2 && index >= 6) {
						return `${label.split('-')[1]}/${label
							.split('-')[0]
							.replace('20', '')}`;
					}
				})
				.filter(Boolean);
		}
		if (filter === 'yearly') {
			return data.x_labels?.map((label) => {
				const num = label.split('-')[0];
				return num;
			});
		}
	}

	function formatData() {
		return ['monthly', 'daily'].includes(filter)
			? data.generation
					.map((field, index) => {
						const limit = filter === 'monthly' ? 6 : 15;
						if (page === 1) {
							return index < limit && field;
						}
						if (page === 2) {
							return index >= limit && field;
						}
					})
					.filter(Boolean)
			: data.generation;
	}
	return (
		<CustomPage title="Dashboard">
			<Select setFilter={setFilter} />
			{loading ? (
				<CustomLoading />
			) : (
				<>
					{(filter === 'daily' || filter === 'monthly') && (
						<PageContainer>
							<Icon
								type="font-awesome"
								color={CustomTheme.colors.white}
								name="chevron-left"
								onPress={() => setPage(1)}
							/>
							<CustomText>{`GRÁFICO ${page}/2`}</CustomText>

							<Icon
								type="font-awesome"
								color={CustomTheme.colors.white}
								name="chevron-right"
								onPress={() => setPage(2)}
							/>
						</PageContainer>
					)}
					<LineChart
						data={{
							labels: formatLabel() || [],
							datasets: [
								{
									data: formatData(),
								},
							],
						}}
						width={Dimensions.get('window').width - 50} // from react-native
						height={250}
						yAxisSuffix="kw"
						yAxisInterval={1}
						chartConfig={{
							backgroundColor: CustomTheme.colors.secondary,
							backgroundGradientFrom: CustomTheme.colors.secondary,
							backgroundGradientTo: CustomTheme.colors.secondary,
							decimalPlaces: ['monthly', 'yearly'].includes(filter) ? 0 : 1,
							color: () => CustomTheme.colors.primary,
							labelColor: () => CustomTheme.colors.primary,
							style: {
								borderRadius: 5,
							},
							propsForLabels: {
								fontSize: 10,
							},
							propsForDots: {
								r: '6',
								strokeWidth: '2',
								stroke: '#ffa726',
								color: CustomTheme.colors.white,
							},
						}}
						bezier
						style={{
							borderRadius: 5,
						}}
					/>
					<CustomText>{`Sua usina alcancou ${data.totals.percentage}% da meta`}</CustomText>
					<Progress.Bar
						progress={data.totals.percentage / 100}
						height={20}
						width={Dimensions.get('window').width - 70}
						color={CustomTheme.colors.secondary}
					/>
					<CustomCard size="100px" cardSchema={cardSchema} />
				</>
			)}
		</CustomPage>
	);
}
const Select = styled(CustomSelect)`
	width: 100%;
`;

const PageContainer = styled.View`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	height: 25px;
`;
const CustomText = styled.Text`
	font-size: 20px;
	line-height: 20px;
	font-family: ${CustomTheme.upperFont};
	text-align: center;
	color: ${CustomTheme.colors.white};
	padding: 0 5px 0 5px;
`;
