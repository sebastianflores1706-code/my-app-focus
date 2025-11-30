import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const objetivos = [
  {
    id: "masa",
    label: "Subir Masa Muscular",
    icon: "barbell-outline",
    colors: ["#00E5FF", "#0077AA"],
  },
  {
    id: "perder",
    label: "Perder Peso",
    icon: "flame-outline",
    colors: ["#FF6B6B", "#C73838"],
  },
  {
    id: "resistencia",
    label: "Mejorar Resistencia",
    icon: "fitness-outline",
    colors: ["#A86BFF", "#6A28CC"],
  },
];

const ObjetivoPantalla = ({ navigation }: any) => {
  const [seleccionado, setSeleccionado] = useState("");

  return (
    <View style={styles.container}>
      
      {/* 🔥 Banner superior más grande */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1603734220970-25a0b335ca01?auto=format&fit=crop&w=1200&q=80",
        }}
        style={styles.banner}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.75)", "rgba(0,0,0,0.3)", "transparent"]}
          style={styles.bannerOverlay}
        >
          <Text style={styles.title}>¿Cuál es tu Objetivo?</Text>
        </LinearGradient>
      </ImageBackground>

      <Text style={styles.subtitle}>
        Nadie vendrá a hacerlo por ti.
      </Text>

      <View style={styles.cardsContainer}>
        {objetivos.map((obj) => (
          <TouchableOpacity
            key={obj.id}
            activeOpacity={0.85}
            onPress={() => {
              setSeleccionado(obj.id);
              navigation.navigate("MainTabs", {
                screen: "Routines",
                params: { objetivo: obj.id },
              });
            }}
          >
            <LinearGradient
              colors={obj.colors}
              style={[
                styles.card,
                seleccionado === obj.id && styles.cardSelected,
              ]}
            >
              <Ionicons name={obj.icon} size={40} color="#fff" />
              <Text style={styles.cardLabel}>{obj.label}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botón Ver progreso */}
      <TouchableOpacity
        style={styles.progressButton}
        onPress={() =>
          navigation.navigate("MainTabs", { screen: "Profile" })
        }
      >
        <Text style={styles.progressText}>Ver mi progreso</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ObjetivoPantalla;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#0A0A0A",
  },

  /* Banner ahora más grande */
  banner: {
    height: 280, // 🔥 más grande
    width: "110%", // un poco más ancho para efecto premium
    marginLeft: "-5%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },

  bannerOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // 🔥 TÍTULO CENTRADO
    paddingTop: 40,
  },

  /* TÍTULO PREMIUM */
  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "#00E5FF",
    textAlign: "center",
    letterSpacing: 2,
    textShadowColor: "rgba(0, 229, 255, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },

  subtitle: {
    color: "#AAA",
    fontSize: 16,
    marginTop: 25,
    marginBottom: 25,
    textAlign: "center",
  },

  cardsContainer: {
    marginTop: 10,
    gap: 20,
  },

  card: {
    padding: 25,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  cardSelected: {
    borderWidth: 2,
    borderColor: "#fff",
  },

  cardLabel: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  progressButton: {
    backgroundColor: "#00E5FF",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 25,
  },

  progressText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
  },
});