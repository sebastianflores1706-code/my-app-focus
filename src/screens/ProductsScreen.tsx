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
    image: "https://images.unsplash.com/photo-1701859076902-72989d9e038a?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "2",
    name: "Creatina 300g",
    price: 380,
    image: "https://images.unsplash.com/photo-1683394305929-5e7c8d942127?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "3",
    name: "Pre-Workout",
    price: 420,
    image: "https://images.unsplash.com/photo-1701859082181-663004d346d2?auto=format&fit=crop&w=800&q=70",
  },

  // 🔥 Nuevos productos
  {
    id: "4",
    name: "BCAA Aminoácidos",
    price: 299,
    image: "https://images.unsplash.com/photo-1709976142774-ce1ef41a8378?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "5",
    name: "Glutamina 250g",
    price: 310,
    image: "https://images.unsplash.com/photo-1584116831322-57d789ed6a40?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "6",
    name: "Proteína Vegana",
    price: 620,
    image: "https://images.unsplash.com/photo-1693996045838-980674653385?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "7",
    name: "Barra de Proteína (Caja 12)",
    price: 270,
    image: "https://images.unsplash.com/photo-1621057621391-7ed446a24b41?auto=format&fit=crop&w=1114&q=80",
  },
  {
    id: "8",
    name: "Termogénico Burner",
    price: 450,
    image: "https://plus.unsplash.com/premium_photo-1755707977968-7d68f651b244?auto=format&fit=crop&w=1170&q=80…",
  },
  {
    id: "9",
    name: "Omega 3 Premium",
    price: 199,
    image: "https://images.unsplash.com/photo-1709976142410-9aae3b10e8bc?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "10",
    name: "Proteína ISO 100",
    price: 890,
    image: "https://images.unsplash.com/photo-1729701494059-07f6767b476b?auto=format&fit=crop&w=800&q=70",
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
