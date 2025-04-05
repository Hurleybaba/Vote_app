import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import voteImg from "../../assets/images/Voting-amico.png";
import Button from "../../components/button";
import Privacy from "../../components/privacy";

export default function index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={voteImg} style={{ width: 300, height: 300 }} />
      <Text style={styles.title}>Let's get Started!</Text>
      <Text style={styles.subtitle}>Let's get you into your account</Text>
      <Button
        text="SignUp"
        handlePress={() => {
          router.push("/signup");
        }}
        textStyle={{ color: "white" }}
      />
      <Button
        text="Login"
        handlePress={() => {
          router.push("/login");
        }}
        buttonStyle={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "#E8612D",
        }}
        textStyle={{ color: "#E8612D" }}
      />

      <Privacy />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "medium",
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#868686",
    paddingVertical: 8,
  },
});
