import React from "react";
import { Button, Text } from "react-native";

import Container from "../components/Container";

const ProductListScreen = ({ navigation }) => {
  return (
    <Container>
      <Text style={{ color: "#fff" }}>ProductListScreen</Text>
      <Button title="Entrar" onPress={() => navigation.navigate("Login")} />
    </Container>
  );
};

export default ProductListScreen;
