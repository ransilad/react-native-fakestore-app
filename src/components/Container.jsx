import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = ({ children, isCentered = false }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "#000",
        justifyContent: isCentered ? "center" : "flex-start",
      }}
    >
      <View style={{ padding: 20 }}>{children}</View>
    </View>
  );
};

export default Container;
