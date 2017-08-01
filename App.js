import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, TextInput } from 'react-native';
export default class App extends React.Component {
    state = {
        usernameValue: "Username",
        passwordValue: "Password"
    };

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    value={this.state.usernameValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8 }}
                />
                <TextInput
                    value={this.state.passwordValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8 }}
                />

                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Login"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Cancel"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
