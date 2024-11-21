import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

const Button = ({ isDisabled, isLoading, title, onPress }) => {
  return (
    <Pressable
      style={[styles.button, isDisabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={isDisabled}
    >
      {isLoading && <ActivityIndicator size="small" color="#474747" />}
      <Text
        style={[styles.buttonText, isDisabled && styles.buttonTextDisabled]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  buttonDisabled: {
    backgroundColor: "#2b2b2b",
  },
  buttonText: {
    fontSize: 20,
    color: "#242424",
    fontWeight: "bold",
  },
  buttonTextDisabled: {
    color: "#474747",
  },
});
