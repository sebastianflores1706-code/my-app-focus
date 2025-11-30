import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCart } from "../context/CartContext";
import { Alert } from "react-native";


const productos = [
  {
    id: "1",
    name: "Proteína Whey 2lb",
    price: 550,
    image: "https://i.imgur.com/fHyEMsl.jpeg",
  },
  {
    id: "2",
    name: "Creatina 300g",
    price: 380,
    image: "https://i.imgur.com/EEwQYbK.jpeg",
  },
  {
    id: "3",
    name: "Pre-Workout",
    price: 420,
    image: "https://i.imgur.com/41jxgqW.jpeg",
  },
];

const ProductsScreen = () => {
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price} MXN</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    addToCart(item);
                     Alert.alert("Producto agregado 🛒", `${item.name} fue añadido al carrito`);

                
                } }
              >
                <Ionicons name="cart-outline" size={22} color="#000" />
                <Text style={styles.buttonText}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;

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

  card: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.06)",
    padding: 15,
    borderRadius: 14,
    marginBottom: 15,
    borderColor: "rgba(255,255,255,0.15)",
    borderWidth: 1,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 15,
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  price: {
    color: "#00E5FF",
    marginTop: 4,
    marginBottom: 10,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00E5FF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "flex-start",
  },

  buttonText: {
    color: "#000",
    fontWeight: "700",
    marginLeft: 5,
  },
});
