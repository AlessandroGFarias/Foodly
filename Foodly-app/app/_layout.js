import { Stack } from "expo-router";

export default function RootLayout() {
  return ( 
    <Stack
    screenOptions={{
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="index" />
    </Stack>
  );
}
