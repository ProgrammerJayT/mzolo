/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import MenuIcon from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const gotoProfile = () => {
    // navigation.navigate('Profile');
    Alert.alert('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={toggleDrawer}>
          <MenuIcon name="menu-fold" size={30} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.heading}>Mzolo</Text>

        <TouchableOpacity onPress={gotoProfile}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/profile.jpg')}
          />
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <ScrollView>
          <Text>ScrollView</Text>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Create new post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// menu-fold

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#329dd2',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  icon: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    backgroundColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
  },

  footer: {
    alignItems: 'center',
    padding: 10,
  },

  footerButton: {
    backgroundColor: '#000',
    paddingHorizontal: 30,
    borderRadius: 20,
  },

  footerButtonText: {
    color: '#fff',
    padding: 10,
  },
});
