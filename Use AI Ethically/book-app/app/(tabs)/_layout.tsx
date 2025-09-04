import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "index") {
            return <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === "books") {
            return <Ionicons name="book" size={size} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="books" options={{ title: "Books" }} />
    </Tabs>
  );
}
