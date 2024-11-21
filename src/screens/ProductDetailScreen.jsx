import { Image, Text, View, Dimensions, ScrollView } from "react-native";
import { useState } from "react";

import Container from "../components/shared/Container";

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  const screenWidth = Dimensions.get("window").width - 40;
  const [imageHeight, setImageHeight] = useState(200);

  const handleImageLoad = (event) => {
    const { width, height } = event.nativeEvent.source;
    const aspectRatio = height / width;
    setImageHeight(screenWidth * aspectRatio);
  };

  return (
    <Container noPaddingTop={true}>
      <ScrollView>
        <View style={{ marginBottom: 20 }}>
          <Image
            source={{ uri: product.image }}
            style={{
              width: "100%",
              height: imageHeight, // Alto calculado dinámicamente
              borderRadius: 5,
            }}
            onLoad={handleImageLoad} // Evento al cargar la imagen
          />
        </View>
        <Text
          style={{
            alignSelf: "flex-start",
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 50,
            backgroundColor: "#424242",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          {product.category}
        </Text>
        <Text style={{ color: "#fff", fontSize: 24 }}>{product.title}</Text>
        <Text
          style={{
            color: "#9c9c9c",
            fontSize: 18,
            marginTop: 20,
            lineHeight: 24,
          }}
        >
          {product.description}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
            color: "#fff",
            fontSize: 20,
            marginTop: 20,
            fontWeight: "700",
          }}
        >
          ${product.price}
        </Text>
      </ScrollView>
    </Container>
  );
};

export default ProductDetailScreen;
