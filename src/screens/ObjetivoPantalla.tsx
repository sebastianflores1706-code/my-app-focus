import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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
    <LinearGradient 
      colors={["#0A0A0A", "#111111"]} 
      style={styles.container}
    >
      {/* 🔥 Título estilo Gymshark */}
      <Text style={styles.title}>¿Cuál es tu objetivo?</Text>
      <Text style={styles.subtitle}>
        Selecciona uno para personalizar tus rutinas
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

      {/* 🔥 Botón premium ver progreso */}
      <TouchableOpacity
        style={styles.progressButton}
        onPress={() =>
          navigation.navigate("MainTabs", { screen: "Profile" })
        }
      >
        <Text style={styles.progressText}>Ver mi progreso</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ObjetivoPantalla;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  /* ⭐ Título premium estilo GymShark */
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#00E5FF",
    textAlign: "center",
    textShadowColor: "rgba(0,229,255,0.35)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 18,
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 30,
  },

  subtitle: {
    color: "#AAA",
    fontSize: 16,
    textAlign: "center",
    opacity: 0.85,
    marginBottom: 30,
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
    backgroundColor: "rgba(255,255,255,0.1)",
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

  /* 🔥 Botón Ver Progreso */
  progressButton: {
    backgroundColor: "#00E5FF",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 50,
  },

  progressText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
  },
});
