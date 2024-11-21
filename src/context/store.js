import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useStore = create((set) => ({
  isLoading: true,
  isTransitioning: false,
  token: null,
  initializeToken: async () => {
    const storedToken = await AsyncStorage.getItem("authToken");
    set({ token: storedToken, isLoading: false });
  },
  setToken: async (newToken) => {
    set({ isTransitioning: true });
    await AsyncStorage.setItem("authToken", newToken);
    set({ token: newToken, isTransitioning: false });
  },
  logout: async () => {
    set({ isTransitioning: true });
    await AsyncStorage.removeItem("authToken");
    set({ token: null, isTransitioning: false });
  },
}));

export default useStore;
