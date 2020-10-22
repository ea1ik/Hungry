import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import SwipingCard from "../components/SwipingCard";

class RestaurantsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SwipingCard></SwipingCard>
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
  largeFont: {
    fontFamily: "regular",
  },
});
