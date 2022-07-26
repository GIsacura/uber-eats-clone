import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ViewCart = ({ navigation }) => {
	const items = useSelector((state) => state.cartReducer.selectedItems.items);
	const total = items
		.map((item) => Number(item.price.replace("$", "")))
		.reduce((prev, curr) => prev + curr, 0);

	const totalUSD = total.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});

	console.log(total);
	return (
		<>
			{total ? (
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						position: "absolute",
						bottom: 30,
						zIndex: 999,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							width: "100%",
						}}
					>
						<TouchableOpacity
							style={{
								marginTop: 20,
								flexDirection: "row",
								backgroundColor: "black",
								justifyContent: "flex-end",
								padding: 15,
								borderRadius: 30,
								width: 300,
								position: "relative",
							}}
						>
							<Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
								ViewCart
							</Text>
							<Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
		</>
	);
};

export default ViewCart;
