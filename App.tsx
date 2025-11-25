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


// Icons (optional for tabs later)
import Ionicons from "@expo/vector-icons/Ionicons";
import EjercicioPantalla from "./src/screens/EjercicioPantalla";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Main tabs shown after app opens
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Objetivo" component={ObjetivoPantalla}  options={{headerShown: false}}/>

        {/* Bottom tabs (home of the app) */}
        <Stack.Screen name="MainTabs" component={MainTabs} />

        {/* Detail screen */}
        <Stack.Screen name="RoutineDetail" component={RoutineDetailScreen} />
        <Stack.Screen
          name="ExerciseDetail"
          component={EjercicioPantalla}
          options={{ title: "Ejercicio" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
