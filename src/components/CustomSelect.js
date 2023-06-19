/* eslint-disable no-undef */
import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import { CustomTheme } from '../helpers/CustomTheme';

export default function CustomSelect(props) {
	const { setFilter } = props;
	const granularidade = ['Por Hora', 'Diário', 'Mensal', 'Anual'];
	const filterFields = ['hourly', 'daily', 'monthly', 'yearly'];

	function formatFilterField(index) {
		const realIndex = granularidade.indexOf(index);
		setFilter(filterFields[realIndex]);
	}

	return (
		<SelectDropdown
			statusBarTranslucent
			data={granularidade}
			onSelect={(index) => {
				formatFilterField(index);
			}}
			defaultValue={'Por Hora'}
			buttonTextAfterSelection={(selectedItem, index) => {
				return selectedItem;
			}}
			rowTextForSelection={(item, index) => {
				return item;
			}}
			buttonStyle={styles.dropdown2BtnStyle}
			buttonTextStyle={{
				...styles.dropdown2BtnTxtStyle,
			}}
			renderDropdownIcon={(isOpened) => {
				return (
					<FontAwesome
						name={isOpened ? 'chevron-down' : 'chevron-right'}
						color={CustomTheme.colors.primary}
						size={18}
					/>
				);
			}}
			dropdownIconPosition={'right'}
			dropdownStyle={styles.dropdown2DropdownStyle}
			rowStyle={styles.dropdown2RowStyle}
			rowTextStyle={styles.dropdown2RowTxtStyle}
		/>
	);
}

const styles = StyleSheet.create({
	dropdown2BtnStyle: {
		width: '100%',
		height: 40,
		backgroundColor: CustomTheme.colors.secondary,
		borderRadius: 5,
	},
	dropdown2BtnTxtStyle: {
		color: CustomTheme.colors.primary,
		textAlign: 'center',
		fontFamily: CustomTheme.upperFont,
	},
	dropdown2DropdownStyle: {
		backgroundColor: CustomTheme.colors.secondary,
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
	},
	dropdown2RowTxtStyle: {
		fontFamily: CustomTheme.upperFont,
		color: CustomTheme.colors.primary,
		textAlign: 'center',
		fontFamily: CustomTheme.upperFont,
	},
});
