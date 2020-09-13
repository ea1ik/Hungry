import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TestingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text>Testing</Text>
            </View>
        );
    }
}

export default TestingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})