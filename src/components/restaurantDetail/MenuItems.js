import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	FlatList,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
	{
		title: "Lasagna",
		description: "With butter lettuce, tomato and sauce bechamel",
		price: "$13.50",
		image: "https://cdn.colombia.com/gastronomia/2011/08/25/lasagna-3685.webp",
	},
	{
		title: "Tandoori Chicken",
		description: "Amazing Indian dish with tenderloin chicken off the sizzles",
		price: "$19.20",
		image:
			"https://www.eatwell101.com/wp-content/uploads/2015/06/Tandoori-Chicken.jpg",
	},
	{
		title: "Chilaquiles",
		description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
		price: "$14.50",
		image:
			"https://recetinas.com/wp-content/uploads/2017/10/chilaquiles-rojos.jpg",
	},
	{
		title: "Chicken Caesar Salad",
		description: "One can never go wrong with a chicken caesar salad. Healthy",
		price: "$21.50",
		image:
			"https://www.pepperscale.com/wp-content/uploads/2015/12/Spicy-Chicken-Caesar-Salad_lg.jpeg",
	},
	{
		title: "Lasagna",
		description: "With butter lettuce, tomato and sauce bechamel",
		price: "$13.50",
		image: "https://cdn.colombia.com/gastronomia/2011/08/25/lasagna-3685.webp",
	},
	{
		title: "Lasagna",
		description: "With butter lettuce, tomato and sauce bechamel",
		price: "$13.50",
		image: "https://cdn.colombia.com/gastronomia/2011/08/25/lasagna-3685.webp",
	},
];

export default function MenuItems({ restaurantName }) {
	const dispatch = useDispatch();
	const selectItem = (item, checkboxValue) => {
		if (checkboxValue) {
			dispatch({
				type: "ADD_TO_CART",
				payload: {
					...item,
					restaurantName: restaurantName,
				},
			});
		} else {
			dispatch({
				type: "REMOVE_FROM_CART",
				payload: {
					...item,
					restaurantName: restaurantName,
				},
			});
		}
	};

	const cartItems = useSelector(
		(state) => state.cartReducer.selectedItems.items
	);

	const isFoodInCart = (food, cartItems) =>
		Boolean(cartItems.find((item) => item.title === food.title));
	return (
		<View>
			<ScrollView
				style={{ height: "60%" }}
				showsVerticalScrollIndicator={false}
			>
				{foods.map((food, index) => (
					<View key={index}>
						<View style={styles.menuItemStyle}>
							<BouncyCheckbox
								innerIconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
								iconStyle={{ borderRadius: 0 }}
								fillColor="green"
								onPress={(checkboxValue) => selectItem(food, checkboxValue)}
								isChecked={isFoodInCart(food, cartItems)}
							/>
							<FoodInfo food={food} />
							<FoodImage image={food.image} />
						</View>
						<Divider
							width={0.5}
							orientation="vertical"
							style={{ marginVertical: 20 }}
						/>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

const FoodInfo = ({ food }) => (
	<View style={{ width: 200, justifyContent: "space-evenly" }}>
		<Text style={styles.titleStyle}>{food.title}</Text>
		<Text>{food.description}</Text>
		<Text>{food.price}</Text>
	</View>
);

const FoodImage = ({ image }) => (
	<Image
		source={{ uri: image }}
		style={{ width: 100, height: 100, borderRadius: 8 }}
	/>
);

const styles = StyleSheet.create({
	menuItemStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},
	titleStyle: {
		fontSize: 19,
		fontWeight: "600",
	},
});
