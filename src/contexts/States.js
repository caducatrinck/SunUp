import { atom } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const localStorageEffect =
	(key) =>
	({ setSelf, onSet }) => {
			const savedValue = AsyncStorage.getItem(key);
		if (savedValue != null) {
			setSelf(savedValue);
		}

		onSet((newValue, _, isReset) => {
			isReset
				?  AsyncStorage.removeItem(key)
				: AsyncStorage.setItem(key, newValue);
		});
	};

const fakeTokenAtom = atom({
	key: 'fakeToken',
	default: '',
	// effects: [localStorageEffect('fakeToken')],
});

export { fakeTokenAtom };
