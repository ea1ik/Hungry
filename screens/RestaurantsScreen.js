import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import RestaurantCards from "../components/RestaurantCards";


class RestaurantsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <RestaurantCards></RestaurantCards>
      </View>
    );
  }
}

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
