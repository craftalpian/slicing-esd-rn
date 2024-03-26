import React from 'react';
import {Text, View} from 'react-native';

export default () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text style={{fontSize: 40}}>Test ESD</Text>
      <Text style={{fontSize: 40, fontFamily: 'Poppins-Black'}}>Test ESD</Text>
      <Text style={{fontSize: 40, fontFamily: 'Poppins-SemiBold'}}>Test ESD</Text>
    </View>
  );
};
