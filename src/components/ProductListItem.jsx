import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductListItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        backgroundColor: "#1c1c1c",
        borderRadius: 5,
        marginBottom: 20,
        flexDirection: "row",
      }}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 100,
            height: 100,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        />
      </View>
      <View
        style={{
          padding: 15,
          flex: 1,
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#e0e0e0",
            fontWeight: "300",
            flex: 1,
            lineHeight: 20,
            letterSpacing: 0.5,
          }}
          numberOfLines={2}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#fff",
            textAlign: "right",
            fontWeight: "500",
          }}
        >
          ${item.price}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductListItem;
