import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductListItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: "row",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  details: {
    padding: 15,
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    color: "#e0e0e0",
    fontWeight: "300",
    flex: 1,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  price: {
    fontSize: 16,
    color: "#fff",
    textAlign: "right",
    fontWeight: "500",
  },
});

export default ProductListItem;
