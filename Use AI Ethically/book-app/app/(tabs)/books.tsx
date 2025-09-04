import { View, Text, StyleSheet } from "react-native";

export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Page is coming.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
