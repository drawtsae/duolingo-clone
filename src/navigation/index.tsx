import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';

import Main from './MainStack';
import Auth from './AuthStack';
import Loading from '../screens/utils/Loading';
//Test
import Login from '../screens/auth/Login';
import ScreenHome from '../../Home/Screen/ScreenHome';
export default () => {
	const auth = useContext(AuthContext);
	const user = auth.user;
	console.log(auth.session?.user.id)
	return (
		<NavigationContainer>
			{user == null && <Loading />}
			{user == false && <Auth />}
			{user == true && <Main />}
		</NavigationContainer>
	);
};
