import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerTitle: "設定画面",
        }}
      />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = "home";
      return <FontAwesome name={iconName} size={size} color={color} />;
    } else if (route.name === "Setting") {
      iconName = "setting";
      return <AntDesign name={iconName} size={size} color={color} />;
    }
  },
});

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Setting" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
