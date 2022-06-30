/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  LogBox,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

// React Native polyfills required for AWS SDK for JavaScript.
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import {getV2BrowserResponse, getV3BrowserResponse} from '@aws-sdk/test-utils';

// Refs: https://github.com/facebook/metro/issues/287#issuecomment-738622439
LogBox.ignoreLogs(['Require cycle: node_modules']);

const App: () => React$Node = () => {
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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                AWS SDK for JavaScript (v2):
              </Text>
              <Button title="Call with v2" onPress={fetchV2Response} />
              <ScrollView style={styles.scrollView}>
                <Text style={styles.sectionDescription}>{v2Response}</Text>
              </ScrollView>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                AWS SDK for JavaScript (v3):
              </Text>
              <Button title="Call with v3" onPress={fetchV3Response} />
              <ScrollView style={styles.scrollView}>
                <Text style={styles.sectionDescription}>{v3Response}</Text>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
