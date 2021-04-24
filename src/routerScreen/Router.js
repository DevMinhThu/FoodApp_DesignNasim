import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {home, search, order, notification, address} from '../tab';
//import home from '../tab/home';

const Tab = createBottomTabNavigator();

export default class Router extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#310127',
            inactiveTintColor: '#9a7c96',
            style: {
              // #E3E4EA
              backgroundColor: '#ffffff',
              height: 66,
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,
            },
            keyboardHidesTabBar: true,
          }}>
          <Tab.Screen
            name="Home"
            component={home}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={search}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({color}) => (
                <Icon name="search" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Order"
            component={order}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({color}) => (
                <Icon name="shopping-bag" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Notification"
            component={notification}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({color}) => (
                <Icon name="heart" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Address"
            component={address}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({color}) => (
                <Icon name="map-marker" color={color} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
