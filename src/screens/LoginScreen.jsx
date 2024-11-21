import { Keyboard, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import Container from "../components/Container";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { loginAPI } from "../lib/api";
import useFetchAPI from "../hooks/useFetchAPI";
import useStore from "../context/store";

const LoginScreen = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { fetchAPI, isLoading, result, error } = useFetchAPI();
  const { setToken } = useStore();

  const handleLogin = () => {
    Keyboard.dismiss();

    const { url, options } = loginAPI(user, password);
    fetchAPI(url, options);
  };

  useEffect(() => {
    if (result) setToken(result.token);
  }, [result, setToken]);

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
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Credenciales incorrectas, favor intentar nuevamente
          </Text>
        </View>
      )}
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
