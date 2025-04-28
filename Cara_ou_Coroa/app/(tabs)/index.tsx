import React from 'react';
import { SafeAreaView } from 'react-native';
import CaraCoroa from '../../src/Forms/FormObj';
import styles from '../../src/Forms/FormStyle';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CaraCoroa />
    </SafeAreaView>
  );
};

export default App;