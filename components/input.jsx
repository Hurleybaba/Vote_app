import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({
  name,
  placeholder,
  value,
  onChange,
  keyboardType,
}) {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholderTextColor="#868686"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "regular",
    color: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 14,
    fontSize: 16,
    marginTop: 5,
  },
});
