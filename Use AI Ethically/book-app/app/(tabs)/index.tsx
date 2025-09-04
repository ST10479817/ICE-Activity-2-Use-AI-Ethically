import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My Book App</Text>
      <Text style={styles.subheading}>Explore and Discover</Text>
      <Text style={styles.text}>
        This app will help you browse and enjoy books in the future. For now, it
        is just a simple demo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
