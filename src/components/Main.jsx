import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import ProductListScreen from "../screens/ProductListScreen";
import useStore from "../context/store";
import Container from "./shared/Container";
import { Text, TouchableOpacity } from "react-native";
import Navbar from "./Navbar";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

export function Main() {
  const { isLoading, isTransitioning, token, initializeToken } = useStore();

  useEffect(() => {
    initializeToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mostramos un contenedor vacio mientras se carga la información y así evitar el parpadeo
  if (isLoading || isTransitioning) return <Container />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "none" }}>
        {!token && (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
        {token && (
          <>
            <Stack.Screen
              name="Products"
              component={ProductListScreen}
              options={{
                header: () => <Navbar />,
              }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
              options={{
                header: () => <Navbar />,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
