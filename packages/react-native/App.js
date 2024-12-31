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
import 'web-streams-polyfill/dist/polyfill';

import {getV3BrowserResponse} from '@aws-sdk/test-utils';

const App: () => Node = () => {
  const [v3Response, setV3Response] = useState('');

  const fetchV3Response = async () => {
    try {
      const v3Response = await getV3BrowserResponse();
      setV3Response(JSON.stringify(v3Response, null, 2));
    } catch (err) {
      console.error(serializeError(err));
      setV3Response(`Error: ${err}. Check console for more details.`);
    }
  };

  return (
    <View style={styles.container}>
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
