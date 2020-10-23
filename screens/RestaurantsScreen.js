import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import SwipingCard from "../components/SwipingCard";

const data = [
  {
    id: 1,
    uri: require("../assets/media/pic1.jpg"),
    title: "Picture 1",
  },
  {
    id: 2,
    uri: require("../assets/media/pic2.jpg"),
    title: "Picture 2",
  },
  {
    id: 3,
    uri: require("../assets/media/pic3.jpg"),
    title: "Picture 3",
  },
  {
    id: 4,
    uri: require("../assets/media/pic4.jpg"),
    title: "Picture 4",
  },
  {
    id: 5,
    uri: require("../assets/media/pic5.jpg"),
    title: "Picture 5",
  },
];

const Card = ({ card }) => (
  <View
    style={{
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center",
    //   backgroundColor: "red",
    }}
  >
    <Image
      source={card.uri}
      style={{ width: "100%", height: "100%", resizeMode: "contain" }}
    ></Image>
  </View>
);

class RestaurantsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper
          cards={data}
          cardIndex={this.state.currentIndex}
          renderCard={(card) => <Card card={card} />}
          onSwiped={() => this.state.currentIndex = (this.state.currentIndex + 1) % data.length} // gets current card
          stackSize = {3}
          stackScale = {3}
          stackSeparation = {3}
          backgroundColor="transparent"
          infinite
          disableBottomSwipe
          disableTopSwipe
          animateCardOpacity
          animateOverlayLabelsOpacity
          //TODO CHANGE OPACITY SETTINGS
          overlayLabels={
            {
                left: {
                  title: 'NOPE',
                  style: {
                    label: {
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1,
                      fontSize: 20,
                      fontFamily: "regular",
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      marginTop: 100,
                      marginLeft: -30
                    }
                  }
                },
                right: {
                  title: 'LIKE',
                  style: {
                    label: {
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1,
                      fontSize: 20,
                      fontFamily: "regular"
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      marginTop: 100,
                      marginLeft: 30
                    }
                  }
                },
              }
          }
        />
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
