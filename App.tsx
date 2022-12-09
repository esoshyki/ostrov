
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={"#026ab5"}
      />
      <WebView source={{ uri: 'https://ostrov-shop.by'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0
  }
});

export default App;
