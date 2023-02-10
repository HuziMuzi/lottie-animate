import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView source={require('./src/assets/typing.json')} autoPlay loop />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
