import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';


class RestaurantsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.largeFont}>Restaurant Screen</Text>
            </View>
        );
    }
}

export default RestaurantsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    largeFont:{
        fontFamily: 'regular'
    }
})