import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { getV2BrowserResponse, getV3BrowserResponse } from "../shared/utils";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor() {
    super();
    this.state = { v2Response: "", v3Response: "" };
  }

  async componentDidMount() {
    const v2Response = await getV2BrowserResponse();
    // Uncomment when react-native support is added to v3
    // const v3Response = await getV3BrowserResponse();

    this.setState({
      v2Response: JSON.stringify(v2Response, null, 2)
      // v3Response: JSON.stringify(v3Response, null, 2)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          v2 response: {this.state.v2Response}!
        </Text>
        <Text style={styles.content}>
          v2 response: {this.state.v3Response}!
        </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  content: {
    fontSize: 20,
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
