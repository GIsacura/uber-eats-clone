import { View, Text, Image } from "react-native";
import React from "react";

// const yelpRestaurantInfo = {
// 	name: "Farmhouse Kitchen Thai Cuisine",
// 	image:
// 		"https://cdn.vox-cdn.com/thumbor/yWqT_fR6bY2N5EPQiqV8HnwXGMU=/0x0:2048x1536/920x613/filters:focal(861x605:1187x931):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/51983989/15123005_1525764507440046_5718744961977928087_o.0.jpeg",
// 	price: "$$",
// 	reviews: "1500",
// 	rating: 4.5,
// 	categories: [{ title: "Thai" }, { title: "Comfort Food" }],
// };

// const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;
// const formattedCategories = categories.map((cat) => cat.title).join(" - ");
// const description = `${formattedCategories} ${
// 	price ? " - " + price : ""
// } - 💳 - ${rating} ⭐ (${reviews}+)`;

// const image =
// 	"https://cdn.vox-cdn.com/thumbor/yWqT_fR6bY2N5EPQiqV8HnwXGMU=/0x0:2048x1536/920x613/filters:focal(861x605:1187x931):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/51983989/15123005_1525764507440046_5718744961977928087_o.0.jpeg";

// const title = "Farmhouse Kitchen Thai Cuisine";
// const description = "Thai - Comfort Food - $$ - 💳 - 4 ⭐ (2913+)";

export default function About({ route }) {
	const { name, image, price, reviews, rating, categories } = route.params;
	const formattedCategories = categories.map((cat) => cat.title).join(" - ");
	const description = `${formattedCategories} ${
		price ? " - " + price : ""
	} - 💳 - ${rating} ⭐ (${reviews}+)`;

	return (
		<View>
			<RestaurantImage image={image} />
			<RestaurantName name={name} />
			<RestaurantDescription description={description} />
		</View>
	);
}

const RestaurantImage = ({ image }) => (
	<Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = ({ name }) => (
	<Text
		style={{
			fontSize: 29,
			fontWeight: "600",
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{name}
	</Text>
);

const RestaurantDescription = ({ description }) => (
	<Text
		style={{
			marginTop: 10,
			marginHorizontal: 15,
			fontWeight: "400",
			fontSize: 15.5,
		}}
	>
		{description}
	</Text>
);
