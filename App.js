import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Components/Auth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Post from "./Components/Post";
import Search from "./Components/Search";
import Subreddit from "./Components/Subreddit";
import Profile from "./Components/Profile";
import Login from "./Components/Login"

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#eee6d3" />
      <Stack.Navigator initialRouteName="Redditech">
        <Stack.Screen
          name="Login"
          component={Login}
          options={() => ({
            headerShown: false,
            animationEnabled: false,
          })}
        />
        {/* <Stack.Screen name="Redditech" component={Home} options={{
          title: 'Redditech',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#ffa31a',
          }
        }} /> */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: { backgroundColor: "#ffa31a" },
          }}
        />
        <Stack.Screen name="Search" component={Search} />
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
        {/* <Stack.Screen name="Connection" component={Connection} /> */}
        <Stack.Screen
          name="Subreddit"
          component={Subreddit}
          options={{
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: { backgroundColor: "#ffa31a" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
