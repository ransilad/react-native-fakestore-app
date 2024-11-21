import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = ({ children, noPaddingTop = false }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: noPaddingTop ? 0 : insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "#000",
      }}
    >
      <View style={{ padding: 20, flex: 1 }}>{children}</View>
    </View>
  );
};

export default Container;
