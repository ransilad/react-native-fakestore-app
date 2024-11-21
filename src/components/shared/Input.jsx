import { StyleSheet, TextInput } from "react-native";

const Input = ({ value, onChangeText, placeholder, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={"#424242"}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      autoCapitalize="none"
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#363636",
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    borderRadius: 5,
  },
});
