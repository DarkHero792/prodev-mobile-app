import { Slot } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "home";
          if (route.name === "search") iconName = "search";
          if (route.name === "saved") iconName = "bookmark";
          if (route.name === "inbox") iconName = "mail";
          if (route.name === "profile") iconName = "person";

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0601B4",
        tabBarInactiveTintColor: "gray",
        headerShown: route.name !== "profile", // Hide header for Profile tab only
      })}
    />
  );
}
