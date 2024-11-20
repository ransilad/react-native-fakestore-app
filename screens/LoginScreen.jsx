import { Button, Text } from "react-native";

import Container from "../components/Container";

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <Text style={{ color: "#fff" }}>LoginScreen</Text>
      <Button title="Entrar" onPress={() => navigation.navigate("Products")} />
    </Container>
  );
};

export default LoginScreen;
