import React from 'react';
import { Text, View } from 'react-native';
import MakeRequest from '../helpers/MakeRequest';

export default function Dashboard() {
	React.useEffect(() => {
		async function getInfos() {
			const response = await MakeRequest({ dataType: 'hourly' });
		}
		getInfos();
	}, []);
	return (
		<View>
			<Text>{'teste'}</Text>
		</View>
	);
}
