import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import RoutinesScreen from "./src/screens/RoutineScreen";
import CartScreen from "./src/screens/CartScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RoutineDetailScreen from "./src/screens/DetalleRutinaPantalla";
import ObjetivoPantalla from "./src/screens/ObjetivoPantalla";
import DatosUsuarioPantalla from "./src/screens/DatosUsuarioPantalla";
import EjercicioPantalla from "./src/screens/EjercicioPantalla";

// Icons
import Ionicons from "@expo/vector-icons/Ionicons";

// ⭐ IMPORTANTE: Provider del contexto
import { RutinaProvider } from "./src/context/RutinaContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ============================
//      MAIN TABS
// ============================
function MainTabs() {
  console.log("APP CARGANDO");

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0D0D0D",
          borderTopColor: "#1A1A1A",
          height: 60,
        },
        tabBarActiveTintColor: "#00E5FF",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tab.Screen
        name="Routines"
        component={RoutinesScreen}
        options={{
          tabBarLabel: "Routines",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// ============================
//         APP
// ============================
export default function App() {
  return (
    // ⭐ Esto hace que TODA tu app pueda guardar ejercicios
    <RutinaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen
            name="Objetivo"
            component={ObjetivoPantalla}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="DatosUsuario"
            component={DatosUsuarioPantalla}
          />

          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
          />

          <Stack.Screen
            name="RoutineDetail"
            component={RoutineDetailScreen}
          />

          <Stack.Screen
            name="ExerciseDetail"
            component={EjercicioPantalla}
            options={{ title: "Ejercicio" }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </RutinaProvider>
  );
}
