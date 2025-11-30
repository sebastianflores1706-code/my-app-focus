import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const DatosUsuarioPantalla = ({ navigation, route }: any) => {
  const objetivo = route.params?.objetivo; // viene desde RoutinesScreen

  const [peso, setPeso] = useState("");
  const [pesoMeta, setPesoMeta] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState("");
  const [actividad, setActividad] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Antes de comenzar…</Text>
      <Text style={styles.subtitle}>
        Necesitamos algunos datos para ajustar tu plan
      </Text>

      {/* INPUTS */}
      <Text style={styles.label}>Tu peso actual (kg)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
        placeholder="Ej. 72"
        placeholderTextColor="#777"
      />

      <Text style={styles.label}>Peso objetivo (kg)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pesoMeta}
        onChangeText={setPesoMeta}
        placeholder="Ej. 80"
        placeholderTextColor="#777"
      />

      <Text style={styles.label}>Tu altura (cm)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
        placeholder="Ej. 175"
        placeholderTextColor="#777"
      />

      <Text style={styles.label}>Edad</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={edad}
        onChangeText={setEdad}
        placeholder="Ej. 22"
        placeholderTextColor="#777"
      />

      <Text style={styles.label}>Actividad física</Text>
      <TextInput
        style={styles.input}
        value={actividad}
        onChangeText={setActividad}
        placeholder="Ej. Sedentario / Moderado / Fuerte"
        placeholderTextColor="#777"
      />

      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("MainTabs", {
            screen: "Profile",
            params: {
              datosUsuario: {
                peso,
                pesoMeta,
                altura,
                edad,
                actividad,
                objetivo,
              },
            },
          });
        }}
      >
        <Text style={styles.buttonText}>Guardar y Continuar</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default DatosUsuarioPantalla;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#00E5FF",
    textAlign: "center",
    marginTop: 20,
  },

  subtitle: {
    color: "#AAA",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 35,
  },

  label: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    backgroundColor: "#1A1A1A",
    color: "#FFF",
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#333",
  },

  button: {
    backgroundColor: "#00E5FF",
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 40,
  },

  buttonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
  },
});
