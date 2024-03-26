import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

export default () => {
  return (
    <>
      <StatusBar backgroundColor={'#05051E'} barStyle={'light-content'} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#05051E',
          paddingHorizontal: 24,
          paddingVertical: 30,
        }}>
        {/* Header */}
        <View style={{backgroundColor: 'red', flexDirection: 'row'}}>
          {/* <View style={{backgroundColor: 'green', flex: 1, height: 60}}></View> */}
          <View
            style={{
              backgroundColor: '#15162F',
              borderRadius: 100,
              height: 70,
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/1194465593/id/foto/wanita-muda-jepang-tampak-percaya-diri.jpg?s=1024x1024&w=is&k=20&c=mNT_QwbfrEy3XY2CChd3IOAGnQ5YQGujNKMtKYPm5jw=',
              }}
              height={54}
              width={54}
              style={{
                borderRadius: 100,
              }}
            />
          </View>
          <View style={{backgroundColor: 'blue', flex: 1, height: 60}}></View>
          <View style={{backgroundColor: 'yellow', flex: 1, height: 60}}></View>
        </View>
      </SafeAreaView>
    </>
  );
};
