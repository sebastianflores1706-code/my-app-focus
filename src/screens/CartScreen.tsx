import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito</Text>

      <View style={styles.card}>
        <Text style={styles.productName}>Proteína Whey</Text>
        <Text style={styles.productPrice}>$899 MXN</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.productName}>Creatina Micronizada</Text>
        <Text style={styles.productPrice}>$499 MXN</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1A1A1A",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#00E5FF",
  },
  productName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  productPrice: {
    color: "#00E5FF",
    fontSize: 18,
    marginTop: 5,
  },
  checkoutButton: {
    backgroundColor: "#00CFFF",
    padding: 17,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },
  checkoutText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
  },
});
