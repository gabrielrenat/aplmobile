import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./login.navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNavigation from "./drawer.navigation";
import TabNavigation from "./tab.navigation";
import { useAuth } from "../hook/auth";

export default function Navigation() {
  const { access_token } = useAuth();
  return (
    <NavigationContainer>
      {access_token ? <DrawerNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
}
