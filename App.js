import { AppLoading } from "expo";
import React from "react";
import { StyleSheet, View } from "react-native";
import RestaurantsScreen from "./screens/RestaurantsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TestingScreen from "./screens/TestingScreen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantLogo from "./logos/RestaurantLogo";
import ProfileLogo from "./logos/ProfileLogo";

// all the init happens here
// later make it a logo display with bg tasks happening
// db init here
// opens  other screens where all the stuff happens

async function preload(){
  await Font.loadAsync({
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    italic: require("./assets/fonts/Montserrat-Italic.ttf"),
    regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    semiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    thin: require("./assets/fonts/Montserrat-Thin.ttf"),
  });
}

const Tab = createBottomTabNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      fontsLoaded: false
     };
  }
  render() {
    // if (!this.state.fontsLoaded) {
    //   return (
    //     <AppLoading
    //       startAsync={preload}
    //       onFinish={() => this.setState({fontsLoaded: true})}
    //     />
    //   );
    // }
  
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                switch (route.name) {
                  case "RestaurantsScreen":
                    return <RestaurantLogo color={color} />;
                  case "ProfileScreen":
                    return <ProfileLogo color={color} />;
                  case "TestingScreen":
                    break;
                }
              },
            })}
            tabBarOptions={{
              showLabel: false,
              style: {
                backgroundColor: "#f9f9f9",
              },
            }}
          >
            <Tab.Screen
              name="RestaurantsScreen"
              component={RestaurantsScreen}
            />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
            <Tab.Screen name="TestingScreen" component={TestingScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );  
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
