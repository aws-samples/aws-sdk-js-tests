/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, StyleSheet, View, Text, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// React Native polyfills required for AWS SDK for JavaScript.
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import {getV2BrowserResponse, getV3BrowserResponse} from '@aws-sdk/test-utils';

const App: () => Node = () => {
  const [v2Response, setV2Response] = useState('');
  const [v3Response, setV3Response] = useState('');

  const fetchV2Response = async () => {
    try {
      const v2Response = await getV2BrowserResponse();
      setV2Response(JSON.stringify(v2Response, null, 2));
    } catch (err) {
      setV2Response(`Error: ${err}`);
    }
  };

  const fetchV3Response = async () => {
    try {
      const v3Response = await getV3BrowserResponse();
      setV3Response(JSON.stringify(v3Response, null, 2));
    } catch (err) {
      setV3Response(`Error: ${err}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>AWS SDK for JavaScript (v2):</Text>
        <Button title="Call with v2" onPress={fetchV2Response} />
        <TextInput
          style={styles.sectionDescription}
          multiline={true}
          placeholder="v2 response will be populated here"
          value={v2Response}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>AWS SDK for JavaScript (v3):</Text>
        <Button title="Call with v3" onPress={fetchV3Response} />
        <TextInput
          style={styles.sectionDescription}
          multiline={true}
          placeholder="v3 response will be populated here"
          value={v3Response}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    borderWidth: 1,
    flex: 2,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
    backgroundColor: Colors.lighter,
  },
});

export default App;
