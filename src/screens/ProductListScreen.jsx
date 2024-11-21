import React from "react";
import { Button, Text } from "react-native";

import Container from "../components/Container";
import useStore from "../context/store";

const ProductListScreen = ({ navigation }) => {
  const { logout } = useStore();
  return (
    <Container>
      <Text style={{ color: "#fff" }}>ProductListScreen 2</Text>
      <Button title="Entrar" onPress={() => logout()} />
    </Container>
  );
};

export default ProductListScreen;
