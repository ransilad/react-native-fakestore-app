import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect } from "react";

import ProductListItem from "../components/ProductListItem";
import ErrorAlert from "../components/shared/ErrorAlert";
import Container from "../components/shared/Container";
import useFetchAPI from "../hooks/useFetchAPI";
import { getProductsAPI } from "../lib/api";

const ProductListScreen = () => {
  const { fetchAPI, isLoading, result, error } = useFetchAPI();

  useEffect(() => {
    const { url, options } = getProductsAPI();
    fetchAPI(url, options);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container noPaddingTop={true}>
      <Text style={styles.styles}>Listado de productos</Text>

      {isLoading && (
        <View style={{ marginBlock: 20 }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      {error && (
        <ErrorAlert description="Se ha producido un error, inténtalo más tarde" />
      )}

      {result && (
        <View style={{ flex: 1 }}>
          <FlatList
            data={result}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductListItem item={item} />}
          />
        </View>
      )}
    </Container>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 25,
    marginBottom: 20,
    textAlign: "right",
  },
});
