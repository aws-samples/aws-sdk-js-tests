/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

import {utils} from '@aws-sdk/test-utils';
const {getV2BrowserResponse, getV3BrowserResponse} = utils;

const App: () => React$Node = () => {
  const [v2Response, setV2Response] = useState('');
  const [v3Response, setV3Response] = useState('');

  useEffect(() => {
    async function fetchData() {
      const v2Response = await getV2BrowserResponse();
      const v3Response = await getV3BrowserResponse();

      setV2Response(JSON.stringify(v2Response, null, 2));
      setV3Response(JSON.stringify(v3Response, null, 2));
    }
    fetchData();
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Data returned by v2:</Text>
              <TextInput style={styles.sectionDescription} value={v2Response} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Data returned by v3:</Text>
              <TextInput style={styles.sectionDescription} value={v3Response} />
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
