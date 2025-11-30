import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RutinaContext } from "../context/RutinaContext";

const ProfileScreen = ({ route, navigation }: any) => {
  const datos = route.params?.datosUsuario;
  const { misEjercicios } = useContext(RutinaContext); //🔥 ejercicios guardados

  return (
    <ScrollView style={styles.container}>
      {/* 🔥 HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Tu Perfil</Text>
          <Text style={styles.goalText}>
            Objetivo: {datos?.objetivo || "No definido"}
          </Text>
        </View>

        <Image
          source={{
            uri: "https://i.pinimg.com/736x/c5/d8/42/c5d842c16935522c989fa1bc529d5900.jpg",
          }}
          style={styles.avatar}
        />
      </View>

      {/* 🔥 INFO FÍSICA */}
      {datos && (
        <View style={styles.dataBox}>
          <Text style={styles.sectionTitle}>Tu Información Física</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Peso actual:</Text>
            <Text style={styles.value}>{datos.peso} kg</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Peso objetivo:</Text>
            <Text style={styles.value}>{datos.pesoMeta} kg</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Altura:</Text>
            <Text style={styles.value}>{datos.altura} cm</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Edad:</Text>
            <Text style={styles.value}>{datos.edad} años</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Actividad:</Text>
            <Text style={styles.value}>{datos.actividad}</Text>
          </View>
        </View>
      )}

      {/* 🔥 NUEVA SECCIÓN: MIS EJERCICIOS GUARDADOS */}
      {misEjercicios.length > 0 && (
        <View style={styles.dataBox}>
          <Text style={styles.sectionTitle}>Mis Ejercicios Guardados</Text>

          {misEjercicios.map((ej, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.value}>• {ej.name}</Text>
            </View>
          ))}
        </View>
      )}

      {/* 🔥 ESTADÍSTICAS */}
      <View style={styles.statsBox}>
        <Text style={styles.sectionTitle}>Estadísticas</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="barbell-outline" size={32} color="#00E5FF" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Rutinas</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="flame-outline" size={32} color="#FF6B6B" />
            <Text style={styles.statNumber}>3250</Text>
            <Text style={styles.statLabel}>Calorías</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="time-outline" size={32} color="#A86BFF" />
            <Text style={styles.statNumber}>4.5h</Text>
            <Text style={styles.statLabel}>Entrenadas</Text>
          </View>
        </View>
      </View>

      {/* 🔥 BOTÓN EDITAR DATOS */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate("DatosUsuario")}
      >
        <Text style={styles.editButtonText}>Actualizar mis datos</Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default ProfileScreen;

/* 🎨 ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  name: {
    color: "#00E5FF",
    fontSize: 32,
    fontWeight: "900",
  },

  goalText: {
    color: "#AAA",
    fontSize: 15,
    marginTop: 4,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#00E5FF",
  },

  /* DATA BOX */
  dataBox: {
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    marginBottom: 25,
  },

  sectionTitle: {
    color: "#00E5FF",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  label: {
    color: "#AAA",
    fontSize: 16,
  },

  value: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  /* ESTADÍSTICAS */
  statsBox: {
    marginTop: 10,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statCard: {
    width: "30%",
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    borderColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
  },

  statNumber: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 8,
  },

  statLabel: {
    color: "#AAA",
    fontSize: 14,
    marginTop: 4,
  },

  /* BOTÓN EDITAR */
  editButton: {
    backgroundColor: "#00E5FF",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 30,
  },

  editButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "800",
  },
});
