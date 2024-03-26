import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Notification} from 'iconsax-react-native';

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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
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
          <View style={{flex: 1, marginHorizontal: 12}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                color: '#FFF',
              }}>
              Shayna Wy
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#7C7C7C',
              }}>
              Customer
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: 55,
              backgroundColor: '#15162F',
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
            <View
              style={{
                backgroundColor: '#FF2929',
                height: 8,
                width: 8,
                borderRadius: 100,
                position: 'absolute',
                top: 16,
                right: 18,
                zIndex: 999,
              }}
            />
            <Notification size={24} color="#FFF" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
