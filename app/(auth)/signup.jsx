import {
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Input from "../../components/input";
import Button from "../../components/button";

export default function signup() {
  const [fullName, setFullName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color="black"
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.heading}>Add your Personal Info</Text>
          <Text style={styles.subheading}>
            Make sure to fill all available fields
          </Text>
          <Input
            name="Full Name"
            placeholder="John Doe"
            value={fullName}
            onChangeText={setFullName}
            keyboardType="default"
          />
          <Input
            name="Username"
            placeholder="JohnDoe"
            value={username}
            onChangeText={setUsername}
            keyboardType="default"
          />
          <Input
            name="Email"
            placeholder="John@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Input
            name="Phone Number"
            placeholder="070XXXXXXXX"
            value={number}
            onChangeText={setNumber}
            keyboardType="numeric"
          />
        </ScrollView>
        <Button
          text="Continue"
          buttonStyle={{
            position: "absolute",
            bottom: 20,
            marginLeft: 20,
          }}
          handlePress={() => {
            router.push("/signup2");
          }}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    color: "#E8612D",
  },
  subheading: {
    fontSize: 14,
    fontWeight: "light",
    marginBottom: 10,
    color: "gray",
  },
  buttonDisabled: {
    backgroundColor: "#DADADA",
    position: "absolute",
    bottom: 20,
    marginLeft: 20,
  },
});
