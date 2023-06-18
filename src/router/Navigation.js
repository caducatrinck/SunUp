import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import { useRecoilValue } from 'recoil';
import { fakeTokenAtom } from '../contexts/States';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function Navigation() {
	const isLogged = useRecoilValue(fakeTokenAtom);
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{!isLogged ? (
					<Stack.Screen name="Login" component={Login} />
				) : (
					<>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Dashboard" component={Dashboard} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
