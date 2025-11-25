import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ejerciciosPorRutina } from "../datos/ejerciciosPorRutina";

const DetalleRutinaPantalla = ({ route, navigation }: any) => {
  const { routineName: nombreRutina } = route.params;

  const ejercicios =
    ejerciciosPorRutina[nombreRutina as keyof typeof ejerciciosPorRutina] || [];

  return (
    <View style={styles.container}>

      {/* 🔥 BOTÓN DE REGRESO */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={26} color="#00E5FF" />
      </TouchableOpacity>

      {/* 🔥 TÍTULO */}
      <Text style={styles.title}>{nombreRutina}</Text>

      {/* 🔥 LISTA DE EJERCICIOS */}
      <FlatList
        data={ejercicios}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 40, gap: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("ExerciseDetail", { ejercicio: item })
            }
          >
            {/* Imagen */}
            <Image source={{ uri: item.image }} style={styles.img} />

            {/* Info */}
            <View style={styles.textContainer}>
              <Text style={styles.nombre}>{item.name}</Text>
              <Text style={styles.info}>
                Series: {item.sets} | Reps: {item.reps}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DetalleRutinaPantalla;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
  },

  /* 🔥 BOTÓN DE REGRESO PREMIUM */
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 20,
    backgroundColor: "rgba(255,255,255,0.06)",
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  title: {
    color: "#00E5FF",
    fontSize: 36,
    fontWeight: "800",
    marginTop: 80, // deja espacio para la flecha
    marginBottom: 20,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 18,
    gap: 18,
    shadowColor: "#00E5FF",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },

  img: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },

  textContainer: {
    flex: 1,
  },

  nombre: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  info: {
    color: "#78D8FF",
    marginTop: 8,
    fontSize: 16,
  },
});
