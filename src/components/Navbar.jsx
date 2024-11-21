import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import useStore from "../context/store";
import ExitIcon from "./icons/ExitIcon";
import BackIcon from "./icons/BackIcon";

const Navbar = () => {
  const { top } = useSafeAreaInsets();
  const { logout } = useStore();
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container, paddingTop: top + 20 }}>
      <View style={styles.header}>
        {navigation.canGoBack() && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <BackIcon style={{ color: "#fff" }} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.exitButton} onPress={logout}>
          <Text style={styles.exitText}>Salir</Text>
          <ExitIcon style={{ color: "#fff" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingInline: 20,
  },
  header: {
    borderWidth: 1,
    borderColor: "#737373",
    borderRadius: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: 10,
    paddingBlock: 5,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    padding: 10,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
  },
  exitButton: {
    padding: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginLeft: "auto",
  },
  exitText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Navbar;
