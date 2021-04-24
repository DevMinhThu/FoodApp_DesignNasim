import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {IMAGE} from './constants/Images';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  titleApp: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  styleHello: {
    fontSize: 24,
    paddingLeft: 30,
    color: '#b8adb5',
  },
  styleNasim: {
    fontSize: 24,
    paddingLeft: 30,
    color: '#0A0A15',
    fontWeight: 'bold',
  },
  styleUser: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingRight: 30,
  },
  styleAvatar: {
    width: 45, 
    height: 45, 
    borderRadius: 10,
  },
});

export class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.titleApp}>
          <Text style={styles.styleHello}>
            Hello <Text style={styles.styleNasim}>Nasim</Text>
          </Text>
        </View>
        <View style={styles.styleUser}>
          <Image
            source={IMAGE.AVATAR_USER}
            style={styles.styleAvatar}
          />
        </View>
      </View>
    );
  }
}
