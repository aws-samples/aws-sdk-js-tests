/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, StyleSheet, View, Text, TextInput} from 'react-native';
import {serializeError} from 'serialize-error';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// React Native polyfills required for AWS SDK for JavaScript.
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import 'web-streams-polyfill/polyfill';

import {getBrowserResponse} from '@aws-sdk/test-utils';

const App: () => Node = () => {
  const [response, setResponse] = useState('');

  const fetchResponse = async () => {
    try {
      const response = await getBrowserResponse();
      setResponse(JSON.stringify(response, null, 2));
    } catch (err) {
      console.error(serializeError(err));
      setResponse(`Error: ${err}. Check console for more details.`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>AWS SDK for JavaScript:</Text>
        <Button title="Click to make a call" onPress={fetchResponse} />
        <TextInput
          style={styles.sectionDescription}
          multiline={true}
          placeholder="Response will be populated here"
          value={response}
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
    flex: 1,
    borderWidth: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
    backgroundColor: Colors.lighter,
  },
});

export default App;
