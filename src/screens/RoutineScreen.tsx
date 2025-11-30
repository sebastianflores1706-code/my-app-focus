import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { rutinas } from "../datos/rutinas";
import { LinearGradient } from "expo-linear-gradient";

const RoutinesScreen = ({ navigation, route }: any) => {

    const objetivo = route.params?.objetivo || "masa" ;

    console.log("OBJETIVO ACTUAL:", objetivo);

    const rutinasFiltradas = rutinas.filter((r) => {
        if (objetivo === "masa")
            return ["Chest", "Back", "Legs"].includes(r.name);

        if (objetivo === "peso")
            return ["Legs", "Hombro", "Tríceps"].includes(r.name);

        return true;
    });
  return (
    <LinearGradient
      colors={["#0D0D0D", "#000000"]}
      style={styles.container}
    >
      {/* 🔥 TÍTULO */}
      <Text style={styles.title}>Rutinas</Text>

      {/* 🔥 BANNER MOTIVACIONAL */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
          }}
          style={styles.bannerImage}
        />

        <View style={styles.bannerOverlay} />

        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>
            Construye tu mejor versión 💪
          </Text>
          <Text style={styles.bannerSubtitle}>
            Mantén la constancia. Cada día cuenta.
          </Text>

          <TouchableOpacity style={styles.bannerButton}
          onPress={() =>
            navigation.navigate("DatosUsuario",{
              objetivo: objetivo,
            })
          }
          >
            <Text style={styles.bannerButtonText}>Comenzar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔥 LISTA DE RUTINAS */}
      <FlatList
        data={rutinasFiltradas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 20, paddingBottom: 50 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { borderLeftColor: item.color }]}
            onPress={() =>
              navigation.navigate("RoutineDetail", {
                routineName: item.name,
              })
            }
          >
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={40} color={item.color} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>Ver ejercicios</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
};

export default RoutinesScreen;

/* 🎨 ESTILOS PREMIUM */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  title: {
    color: "#00E5FF",
    fontSize: 38,
    fontWeight: "900",
    marginBottom: 25,
    letterSpacing: 1,
  },

  /* 🔥 Banner */
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 25,
    position: "relative",
  },

  bannerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  bannerContent: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 5,
  },

  bannerSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    marginBottom: 12,
  },

  bannerButton: {
    backgroundColor: "#00E5FF",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  bannerButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },

  /* 🔥 Tarjeta de rutina */
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 22,
    borderRadius: 18,
    borderLeftWidth: 5,
    gap: 20,
    shadowColor: "#00E5FF",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.07)",
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },

  cardSubtitle: {
    color: "#888",
    fontSize: 14,
    marginTop: 4,
  },
});
