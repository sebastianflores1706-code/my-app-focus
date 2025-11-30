import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRutinas } from "../context/RutinaContext";

const EjercicioPantalla = ({ route, navigation }: any) => {
  const { ejercicio } = route.params;

  // ⬅️ CONTEXTO: para guardar ejercicios
  const { agregarEjercicio } = useRutinas();

  return (
    <ScrollView style={styles.container}>
      {/* Botón de regreso */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={26} color="#00E5FF" />
      </TouchableOpacity>

      {/* Imagen grande */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: ejercicio.image }} style={styles.image} />
      </View>

      {/* Título */}
      <Text style={styles.title}>{ejercicio.name}</Text>

      {/* Series y repeticiones */}
      <Text style={styles.subtext}>
        {ejercicio.sets} Series • {ejercicio.reps} Reps
      </Text>

      {/* Chips de músculos */}
      <View style={styles.chipContainer}>
        {ejercicio.muscles?.map((m: string, index: number) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{m}</Text>
          </View>
        ))}
      </View>

      {/* Descripción */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.sectionText}>
          Este ejercicio requiere control y técnica adecuada. Mantén los codos
          estables, no uses impulso y enfócate en la activación del músculo
          objetivo.
        </Text>
      </View>

      {/* Técnica */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Técnica Correcta</Text>
        <Text style={styles.sectionText}>
          • Mantén los pies bien apoyados en el suelo.{"\n"}
          • Controla el movimiento en la fase negativa.{"\n"}
          • Evita arquear demasiado la espalda.{"\n"}
          • Mantén una velocidad constante y controlada.
        </Text>
      </View>

      {/* Botón: Añadir a mi rutina */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          agregarEjercicio(ejercicio);
          navigation.navigate("MainTabs", { screen: "Profile" });
        }}
      >
        <Text style={styles.buttonText}>Añadir a mi rutina</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default EjercicioPantalla;

/* ===================== */
/*        ESTILOS        */
/* ===================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },

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

  imageContainer: {
    width: "100%",
    height: 320,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  title: {
    color: "#00E5FF",
    fontSize: 34,
    fontWeight: "800",
    marginTop: 25,
    paddingHorizontal: 20,
  },

  subtext: {
    color: "#999",
    fontSize: 18,
    paddingHorizontal: 20,
    marginTop: 5,
  },

  chipContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    flexWrap: "wrap",
  },

  chip: {
    backgroundColor: "rgba(0, 229, 255, 0.15)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: "#00E5FF",
    borderWidth: 1,
  },

  chipText: {
    color: "#00E5FF",
    fontWeight: "600",
  },

  section: {
    marginTop: 25,
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 18,
    marginHorizontal: 20,
    borderColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },

  sectionText: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#00E5FF",
    marginTop: 35,
    marginHorizontal: 20,
    padding: 17,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
  },
});
