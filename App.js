import React from 'react';
import { StyleSheet, View } from 'react-native';
import Appbar from './src/components/Appbar';
import SignupScreen from './src/screens/SignupScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <SignupScreen />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFDF6',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 78,
  }
});