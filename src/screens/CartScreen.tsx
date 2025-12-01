// src/screens/CartScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCart } from "../context/CartContext";

const CartScreen = ({ }) => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mi Carrito</Text>


      {cart.length === 0 && (
        <Text style={styles.empty}>Tu carrito está vacío 🛒</Text>
      )}

      {cart.map((item, index) => (
        <View key={index} style={styles.card}>
          
          <Image source={{ uri: item.image }} style={styles.image} />

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price} MXN</Text>
          </View>

          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => removeFromCart(item.id)}
          >
            <Ionicons name="trash-outline" size={24} color="#FF6B6B" />
          </TouchableOpacity>
        </View>
      ))}

      {/* TOTAL */}
      {cart.length > 0 && (
        <View style={styles.totalBox}>
          <Text style={styles.totalText}>Total: ${total} MXN</Text>

          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payText}>Pagar</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={{ height: 50 }} />
    </ScrollView>
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
    color: "#00E5FF",
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 20,
  },

  empty: {
    color: "#888",
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 14,
    padding: 15,
    marginBottom: 15,
    borderColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  price: {
    color: "#00E5FF",
    marginTop: 5,
  },

  deleteBtn: {
    paddingHorizontal: 8,
  },

  totalBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 20,
    borderRadius: 14,
    marginTop: 20,
  },

  totalText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 15,
  },

  payButton: {
    backgroundColor: "#00E5FF",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  payText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "800",
  },

  homeButton: {
  position: "absolute",
  top: 45,
  right: 20,
  backgroundColor: "#00E5FF",
  padding: 12,
  borderRadius: 14,
  shadowColor: "#00E5FF",
  shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  zIndex: 20,
},


});
