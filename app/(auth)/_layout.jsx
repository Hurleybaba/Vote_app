import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" screenOptions={{ headerShown: false }} />
      <Stack.Screen name="login" screenOptions={{ headerShown: false }} />
      <Stack.Screen name="singup" screenOptions={{ headerShown: false }} />
      <Stack.Screen name="singup2" screenOptions={{ headerShown: false }} />
      <Stack.Screen name="otp-screen" screenOptions={{ headerShown: false }} />
    </Stack>
  );
}
