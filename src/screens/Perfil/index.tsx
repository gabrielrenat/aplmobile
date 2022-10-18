/* import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./style";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <ImageBackground
      source={require("../../assets/fundo.png")}
      style={styles.container}
    >
      <Image source={require("../../assets/lazaro.png")} />
      <Text style={styles.title}>Lázaro Eduardo da Silva</Text>
      <CardSocial>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <Text style={styles.link}>https://linkedin.com</Text>
        </>
      </CardSocial>
      <Button
        title="Alterar Senha"
        type="third"
        onPress={() => console.log("Alterar Senha")}
      />
      <Button title="Sair" type="third" onPress={() => console.log("Sair")} />
    </ImageBackground>
  );
} */

import React, { useEffect, useRef, useState} from "react";
import { Text, ImageBackground, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonComp, CardSocialComp } from "../../components";
import styles from "./styles";
import { useAuth } from "../../hook/auth";
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from "../../services/data/Push";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Perfil() {
  const { user } = useAuth();
  const [isLoading, SetIsLoading] = useState(true);


  useEffect(() => {
    if (user && user.profile_photo_url) {
      SetIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    async function fetchToken() {
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/fundo.png")}
      style={styles.container}
    >
      <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
      <Text style={styles.title}>{user?.name}</Text>
      <CardSocialComp>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <Text style={styles.link}>https://linkedin.com</Text>
        </>
      </CardSocialComp>
      <ButtonComp
        title="Alterar Senha"
        type="primary"
        onPress={() => console.log("Alterar Senha")}
      />
      <ButtonComp
        title="Sair"
        type="primary"
        onPress={() => console.log("Sair")}
      />
    </ImageBackground>
  );
}

