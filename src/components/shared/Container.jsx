import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";

const Container = ({ children, noPaddingTop = false }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: noPaddingTop ? 0 : insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  innerContainer: {
    padding: 20,
    flex: 1,
  },
});

export default Container;
