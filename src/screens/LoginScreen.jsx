import { Keyboard, StyleSheet, Text } from "react-native";
import { useState } from "react";

import Container from "../components/Container";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { login } from "../lib/api";

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    Keyboard.dismiss();
    setIsLoading(true);
    // navigation.navigate("Products");

    login(user, password)
      .then((data) => {
        console.log("Pasa OK");
        console.log(data);
      })
      .catch((error) => {
        console.log("Pasa ERROR");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const isDisabled = () => isLoading || !user || !password;

  return (
    <Container isCentered={true}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Input
        placeholder="Ingresa tu usuario"
        value={user}
        onChangeText={setUser}
      />
      <Input
        placeholder="Ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        title="Entrar"
        onPress={handleLogin}
        isLoading={isLoading}
        isDisabled={isDisabled()}
      />
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    marginBottom: 30,
  },
});
