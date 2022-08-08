import { View, Text, Image } from "react-native";
import React from "react";

const image =
  "https://cdn.vox-cdn.com/thumbor/yWqT_fR6bY2N5EPQiqV8HnwXGMU=/0x0:2048x1536/920x613/filters:focal(861x605:1187x931):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/51983989/15123005_1525764507440046_5718744961977928087_o.0.jpeg";

const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai - Comfort Food - $$ - 💳 - 4 ⭐ (2913+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
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
