import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import RestaurantDetail from "./src/screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

const RootNavigation = () => {
	const Stack = createStackNavigator();

	const ScreenOptions = {
		headerShown: false,
	};

	return (
		<ReduxProvider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={ScreenOptions}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
				</Stack.Navigator>
			</NavigationContainer>
		</ReduxProvider>
	);
};

export default RootNavigation;
