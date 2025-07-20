import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function MainDrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: "Add Two Numbers" }} />
        <Drawer.Screen name="twoSumII" options={{ title: "Two Sum II" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
