import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ErrorAlert = ({ description }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{description}</Text>
    </View>
  );
};

export default ErrorAlert;

const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 20,
    backgroundColor: "#8c2626",
    borderRadius: 5,
    padding: 10,
  },
  errorText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
  },
});
