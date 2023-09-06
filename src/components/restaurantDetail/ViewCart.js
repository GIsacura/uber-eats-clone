import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

const ViewCart = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const { items, restaurantName } = useSelector(
		(state) => state.cartReducer.selectedItems
	);
	const total = items
		.map((item) => Number(item.price.replace("$", "")))
		.reduce((prev, curr) => prev + curr, 0);

	const totalUSD = total.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});

	const styles = StyleSheet.create({
		modalContainer: {
			flex: 1,
			justifyContent: "flex-end",
			backgroundColor: "rgba(0,0,0,0.7)",
		},
		modalCheckoutContainer: {
			backgroundColor: "white",
			padding: 16,
			height: 500,
			borderWidth: 1,
		},
		restaurantName: {
			textAlign: "center",
			fontWeight: "600",
			fontSize: 18,
			marginBottom: 10,
		},
		subtotalContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			marginTop: 15,
		},
	});

	const CheckoutModalContext = () => {
		return (
			<>
				<View style={styles.modalContainer}>
					<View style={styles.modalCheckoutContainer}>
						<Text style={styles.restaurantName}>{restaurantName}</Text>
						{items.map((item, index) => (
							<OrderItem key={index} item={item} />
						))}
					</View>
				</View>
			</>
		);
	};

	return (
		<>
			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent={true}
				onRequestClose={() => setModalVisible(false)}
			>
				<CheckoutModalContext />
			</Modal>
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
							onPress={() => setModalVisible(true)}
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
