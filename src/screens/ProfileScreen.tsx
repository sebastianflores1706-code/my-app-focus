import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/300" }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Sebas</Text>
      <Text style={styles.email}>sebas@example.com</Text>

      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="fitness-outline" size={26} color="#00E5FF" />
          <Text style={styles.optionText}>Mis rutinas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="cart-outline" size={26} color="#00E5FF" />
          <Text style={styles.optionText}>Mis compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="log-out-outline" size={26} color="#FF4D4D" />
          <Text style={[styles.optionText, { color: "#FF4D4D" }]}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    paddingTop: 50,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#00E5FF",
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
  },
  email: {
    color: "#999",
    marginBottom: 30,
  },
  section: {
    width: "90%",
  },
  option: {
    backgroundColor: "#1A1A1A",
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#00E5FF",
  },
  optionText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
