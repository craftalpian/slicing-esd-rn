import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  Building4,
  Convert3DCube,
  Notification,
  SearchNormal,
  Tree,
} from 'iconsax-react-native';

const categories = [
  {
    title: 'City',
    amount: '829 house',
    icon: <Building4 size={24} color="#FFF" />,
  },
  {
    title: 'Nature',
    amount: '54,293 house',
    icon: <Tree size={24} color="#FFF" />,
  },
  {
    title: 'Apartment',
    amount: '221 house',
    icon: <Convert3DCube size={24} color="#FFF" />,
  },
];

const assets = [
  {
    image_url:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Rumahnya Angga',
    short_description: '9,301 sqft • House • Rent',
    price: '$69,000',
  },
  {
    image_url:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Rumahnya Angga',
    short_description: '9,301 sqft • House • Rent',
    price: '$69,000',
  },
];

export default () => {
  return (
    <>
      <StatusBar backgroundColor={'#05051E'} barStyle={'light-content'} />
      <SafeAreaView style={styles.main}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profile_image}>
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
            <Text style={styles.full_name}>Shayna Wy</Text>
            <Text style={styles.role}>Customer</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.active} />
            <Notification size={24} color="#FFF" />
          </View>
        </View>
        {/* Search */}
        <View style={styles.search_wrapper}>
          <SearchNormal size={24} color="#FFF" />
          <TextInput
            style={styles.search}
            placeholder="Search by city or agent"
            placeholderTextColor={'#61647D'}
          />
        </View>
        {/* Categories */}
        <View style={{marginTop: 20}}>
          <FlatList
            data={categories}
            contentContainerStyle={{
              marginLeft: 24,
              paddingRight: 24,
            }}
            horizontal={true}
            renderItem={({item: {amount, title, icon}, index}) => (
              <TouchableHighlight
                onPress={() =>
                  Alert.alert(`Kategori ${title} memiliki ${amount}`)
                }
                key={index}>
                <View style={styles.card}>
                  <View style={styles.icon}>{icon}</View>
                  <View style={{marginTop: 16}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.amount}>{amount}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
        {/* Staff Picks */}
        <View style={{marginTop: 30}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
              color: '#FFF',
              textAlign: 'left',
              marginBottom: 8,
              marginLeft: 24,
            }}>
            Staff Picks
          </Text>
          <FlatList
            data={assets}
            contentContainerStyle={{
              marginLeft: 24,
              paddingRight: 24,
            }}
            horizontal={true}
            renderItem={({
              item: {image_url, price, short_description, title},
              index,
            }) => (
              <View
                key={index}
                style={{
                  width: 230,
                  height: 254,
                  borderRadius: 16,
                  marginRight: 18,
                  backgroundColor: '#15162F',
                }}>
                <Image
                  resizeMode="cover"
                  source={{uri: image_url}}
                  style={{
                    height: 127,
                    width: 230,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingHorizontal: 16,
                  }}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontFamily: 'Poppins-Bold',
                      fontSize: 18,
                    }}>
                    {title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 14,
                      color: '#61647D',
                      marginVertical: 6,
                    }}>
                    {short_description}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 14,
                      color: '#61647D',
                    }}>
                    <Text
                      style={{
                        color: '#C7A5FF',
                        fontFamily: 'Poppins-Bold',
                        fontSize: 16,
                      }}>
                      {price}
                    </Text>
                    /month
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
  amount: {
    color: '#61647D',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  card: {
    width: 130,
    height: 161,
    backgroundColor: '#15162F',
    marginRight: 18,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    borderRadius: 100,
    backgroundColor: '#640EF1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
  },
  search_wrapper: {
    backgroundColor: '#15162F',
    borderRadius: 100,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginHorizontal: 24,
  },
  search: {marginLeft: 16, fontFamily: 'Poppins-Regular'},
  main: {
    flex: 1,
    backgroundColor: '#05051E',
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  profile_image: {
    backgroundColor: '#15162F',
    borderRadius: 100,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  full_name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFF',
  },
  role: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#7C7C7C',
  },
  notification: {
    height: 55,
    width: 55,
    backgroundColor: '#15162F',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  active: {
    backgroundColor: '#FF2929',
    height: 8,
    width: 8,
    borderRadius: 100,
    position: 'absolute',
    top: 16,
    right: 18,
    zIndex: 999,
  },
});
