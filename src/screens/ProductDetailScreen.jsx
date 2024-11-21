import { useState } from "react";
import {
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={[styles.image, { height: imageHeight }]}
            onLoad={handleImageLoad}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,1)"]}
            style={styles.gradient}
          />
        </View>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
    position: "relative",
  },
  image: {
    width: "100%",
    borderRadius: 5,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  category: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "#424242",
    color: "#fff",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
  description: {
    color: "#9c9c9c",
    fontSize: 18,
    marginTop: 20,
    lineHeight: 24,
  },
  price: {
    alignSelf: "flex-end",
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "700",
  },
});

export default ProductDetailScreen;
