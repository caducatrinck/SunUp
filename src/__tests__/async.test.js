import AsyncStorage from '@react-native-async-storage/async-storage';

beforeEach(() => {
	AsyncStorage.clear();
});

it('can read asyncstorage', async () => {
	await AsyncStorage.setItem('fakeToken', 'testUser');
	let usernameValue = await AsyncStorage.getItem('fakeToken');
	expect(usernameValue).toBe('testUser');
});
