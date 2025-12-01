import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RutinaContext } from "../context/RutinaContext";

const ProfileScreen = ({ route, navigation }: any) => {
  // Datos que vienen desde DatosUsuario
  const datosParams = route.params?.datosUsuario || {};

  // Modo edición
  const [editando, setEditando] = useState(false);

  // Estado con TUS MISMOS NOMBRES
  const [userData, setUserData] = useState({
    peso: "",
    pesoMeta: "",
    altura: "",
    edad: "",
    actividad: "",
    objetivo: "",
  });

  // Ejercicios guardados del contexto
  const { misEjercicios } = useContext(RutinaContext);

  // =======================================
  // 🔥 1. Cargar datos guardados de memoria
  // =======================================
  useEffect(() => {
    const cargar = async () => {
      try {
        const json = await AsyncStorage.getItem("perfil_usuario");
        if (json) {
          setUserData(JSON.parse(json));
        } else {
          setUserData((prev) => ({ ...prev, ...datosParams }));
        }
      } catch (e) {
        console.log("Error cargando", e);
      }
    };
    cargar();
  }, []);

  // =======================================
  // 🔥 2. Guardar datos
  // =======================================
  const guardarDatos = async (data: any) => {
    try {
      await AsyncStorage.setItem("perfil_usuario", JSON.stringify(data));
    } catch (e) {
      console.log("Error guardando", e);
    }
  };

  // =======================================
  // 🔥 3. Si vienen datos nuevos del formulario → guardarlos
  // =======================================
  useEffect(() => {
    if (Object.keys(datosParams).length > 0) {
      const nuevos = { ...userData, ...datosParams };
      setUserData(nuevos);
      guardarDatos(nuevos);
    }
  }, [datosParams]);

  // =======================================
  // 🔥 4. Cuando editas texto
  // =======================================
  const actualizarCampo = (campo: string, valor: string) => {
    setUserData((prev) => ({ ...prev, [campo]: valor }));
  };

  // =======================================
  // 🔥 5. Guardar al terminar edición
  // =======================================
  const guardarCambios = () => {
    guardarDatos(userData);
    setEditando(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Tu Perfil</Text>
          <Text style={styles.goalText}>
            Objetivo: {userData.objetivo || "No definido"}
          </Text>
        </View>

        <Image
          source={{
            uri: "https://i.pinimg.com/736x/c5/d8/42/c5d842c16935522c989fa1bc529d5900.jpg",
          }}
          style={styles.avatar}
        />
      </View>

      {/* INFO FÍSICA */}
      <View style={styles.dataBox}>
        <Text style={styles.sectionTitle}>Tu Información Física</Text>

        {/* Peso actual */}
        <View style={styles.row}>
          <Text style={styles.label}>Peso actual:</Text>

          {editando ? (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={userData.peso}
              onChangeText={(t) => actualizarCampo("peso", t)}
            />
          ) : (
            <Text style={styles.value}>{userData.peso} kg</Text>
          )}
        </View>

        {/* Peso objetivo */}
        <View style={styles.row}>
          <Text style={styles.label}>Peso objetivo:</Text>

          {editando ? (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={userData.pesoMeta}
              onChangeText={(t) => actualizarCampo("pesoMeta", t)}
            />
          ) : (
            <Text style={styles.value}>{userData.pesoMeta} kg</Text>
          )}
        </View>

        {/* Altura */}
        <View style={styles.row}>
          <Text style={styles.label}>Altura:</Text>

          {editando ? (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={userData.altura}
              onChangeText={(t) => actualizarCampo("altura", t)}
            />
          ) : (
            <Text style={styles.value}>{userData.altura} cm</Text>
          )}
        </View>

        {/* Edad */}
        <View style={styles.row}>
          <Text style={styles.label}>Edad:</Text>

          {editando ? (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={userData.edad}
              onChangeText={(t) => actualizarCampo("edad", t)}
            />
          ) : (
            <Text style={styles.value}>{userData.edad} años</Text>
          )}
        </View>

        {/* Actividad */}
        <View style={styles.row}>
          <Text style={styles.label}>Actividad:</Text>

          {editando ? (
            <TextInput
              style={styles.input}
              value={userData.actividad}
              onChangeText={(t) => actualizarCampo("actividad", t)}
            />
          ) : (
            <Text style={styles.value}>{userData.actividad}</Text>
          )}
        </View>
      </View>

      {/* MIS EJERCICIOS */}
      {misEjercicios.length > 0 && (
        <View style={styles.dataBox}>
          <Text style={styles.sectionTitle}>Mis Ejercicios Guardados</Text>

          {misEjercicios.map((ej, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.value}>• {String(ej?.name || "")}</Text>
            </View>
          ))}
        </View>
      )}

      {/* ESTADÍSTICAS */}
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

      {/* BOTÓN EDITAR / GUARDAR */}
      <TouchableOpacity
        style={[
          styles.editButton,
          { backgroundColor: editando ? "#00FF88" : "#00E5FF" },
        ]}
        onPress={() => {
          if (editando) guardarCambios();
          setEditando(!editando);
        }}
      >
        <Text style={styles.editButtonText}>
          {editando ? "Guardar cambios" : "Editar información"}
        </Text>
      </TouchableOpacity>

      <View style={{ height: 60 }} />
    </ScrollView>
  );
};

export default ProfileScreen;

/********** ESTILOS **********/
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0D0D0D", padding: 20 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 25,
  },

  name: { color: "#00E5FF", fontSize: 32, fontWeight: "900" },

  goalText: { color: "#AAA", fontSize: 15, marginTop: 4 },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#00E5FF",
  },

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
    marginBottom: 12,
    alignItems: "center",
  },

  label: { color: "#AAA", fontSize: 16 },

  value: { color: "#FFF", fontSize: 16, fontWeight: "700" },

  input: {
    backgroundColor: "#1a1a1a",
    color: "#FFF",
    padding: 8,
    width: 90,
    borderRadius: 10,
    borderColor: "#00E5FF",
    borderWidth: 1,
    textAlign: "right",
  },

  statsBox: { marginTop: 10 },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statCard: {
    width: "30%",
    paddingVertical: 18,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 16,
    borderColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    alignItems: "center",
  },

  statNumber: { color: "#FFF", fontSize: 22, fontWeight: "900", marginTop: 8 },

  statLabel: { color: "#AAA", fontSize: 14, marginTop: 4 },

  editButton: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 30,
  },

  editButtonText: { color: "#000", fontSize: 18, fontWeight: "800" },
});
