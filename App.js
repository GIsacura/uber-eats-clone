import "react-native-gesture-handler";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/screens/Home";
import RestaurantDetail from "./src/screens/RestaurantDetail";
import RootNavigation from "./navigation";

export default function App() {
	return (
		<SafeAreaProvider>
			<RootNavigation />
		</SafeAreaProvider>
	);
}
