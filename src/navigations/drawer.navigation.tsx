import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ChatScreen, PedometroScreen, PerfilScreen, MapScreen, SairScreen, AcelerometroScreen, MagnetoScreen, GyroscopioScreen, VideoAudioScreen, QrCodeScreen, CameraScreen } from "../screens";
import colors from "../styles/colors";
import { FontAwesome, Ionicons, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        drawerStyle: { backgroundColor: colors.secondary },
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          drawerLabel: "Mapa",
          drawerIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={SairScreen}
        options={{
          drawerLabel: "Sair",
          drawerIcon: () => (
            <Ionicons name="exit" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Acelerometro"
        component={AcelerometroScreen}
        options={{
          drawerLabel: "Acelerômetro",
          drawerIcon: () => (
            <FontAwesome
              name="car"
              size={24}
              color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pedometro"
        component={PedometroScreen}
        options={{
          drawerLabel: "Pedometro",
          drawerIcon: () => (
            <Foundation name="foot" size={24} color={colors.white} />
          ),
        }} 
      />
      <Drawer.Screen
        name="Magneto"
        component={MagnetoScreen}
        options={{
          drawerLabel: "Magneto",
          drawerIcon: () => (
            <FontAwesome name="magnet" size={24} color={colors.white} />
          ),
        }} 
      />
      <Drawer.Screen
        name="Gyroscopio"
        component={GyroscopioScreen}
        options={{
          drawerLabel: "Gyroscópio",
          drawerIcon: () => (
            <FontAwesome name="balance-scale" size={24} color={colors.white} />
          ),
        }} 
      />
      <Drawer.Screen
        name="AudioVideo"
        component={VideoAudioScreen}
        options={{
          drawerLabel: "Áudio Vídeo",
          drawerIcon: () => (
            <MaterialCommunityIcons 
              name="video" 
              size={24} 
              color={colors.white} 
            />
          ),
        }} 
      />
      <Drawer.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          drawerLabel: "Qrcode",
          drawerIcon: () => (
            <MaterialCommunityIcons 
              name="qrcode-scan" 
              size={24} 
              color={colors.white} 
            />
          ),
        }} 
      />
      <Drawer.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          drawerLabel: "Câmera",
          drawerIcon: () => (
            <MaterialCommunityIcons 
              name="camera" 
              size={24} 
              color={colors.white} 
            />
          ),
        }} 
      />
    </Drawer.Navigator>
  );
}


const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
