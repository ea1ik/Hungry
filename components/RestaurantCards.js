import React, {Component} from "react";
import { StyleSheet, View, Image } from "react-native";
import Swiper from "react-native-deck-swiper";

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
    {
      id: 6,
      uri: require("../assets/media/pic6.jpg"),
      title: "Picture 6",
    },
    {
      id: 7,
      uri: require("../assets/media/pic7.jpg"),
      title: "Picture 7",
    },
    {
      id: 8,
      uri: require("../assets/media/pic8.jpg"),
      title: "Picture 8",
    },
  ];
  
  const Card = ({ card }) => (
    <View
      style={{
        flex: 0.6,
        justifyContent: "center",
        alignItems: "center",
          backgroundColor: "#FF000020", // for dimensions
      }}
    >
      <Image
        source={card.uri}
        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
      ></Image>
    </View>
  );

class RestaurantCards extends Component {
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
          onSwiped={() =>
            (this.state.currentIndex =
              (this.state.currentIndex + 1) % data.length)
          } // gets current card
        //   stackSize={3}
        //   stackScale={3}
        //   stackSeparation={3}
          showSecondCard = {false}
          backgroundColor="transparent"
          infinite
          disableBottomSwipe
          disableTopSwipe
          animateCardOpacity
          animateOverlayLabelsOpacity
          horizontalThreshold={200}
          inputOverlayLabelsOpacityRangeX={[-200, -100, 0, 100, 200]}
          outputOverlayLabelsOpacityRangeX={[1, 0, 0, 0, 1]}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: styles.imageLabel,
                wrapper: styles.likeWrapper,
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: styles.imageLabel,
                wrapper: styles.nopeWrapper,
              },
            },
          }}
        />
      </View>
    );
  }
}

export default RestaurantCards;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    imageLabel: {
      backgroundColor: "black",
      borderColor: "black",
      color: "white",
      borderWidth: 1,
      fontSize: 20,
      fontFamily: "regular",
    },
    likeWrapper: {
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      marginTop: 100,
      marginLeft: -30,
    },
    nopeWrapper: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: 100,
      marginLeft: 30,
    },
  });
  