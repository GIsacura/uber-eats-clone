import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

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
];

export default function MenuItems() {
	return (
		<ScrollView showsVerticalScrollIndicator={true}>
			{foods.map((food, index) => (
				<View key={index}>
					<View style={styles.menuItemStyle}>
						<FoodInfo food={food} />
						<FoodImage image={food.image} />
					</View>
					<Divider
						width={0.5}
						orientation="vertical"
						style={{ marginHorizontal: 20 }}
					/>
				</View>
			))}
		</ScrollView>
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
