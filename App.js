/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Login from './screens/Login/Login';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Login />
      </View>
    </SafeAreaView>
  );
};

export default App;
