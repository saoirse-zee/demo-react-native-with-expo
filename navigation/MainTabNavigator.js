import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import BookingScreen from '../screens/BookingScreen';
import ListScreen from '../screens/ListScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Booking: {
      screen: BookingScreen,
    },
    Recent: {
      screen: ListScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Booking':
            iconName = Platform.OS === 'ios'
              ? `ios-flash${focused ? '' : '-outline'}`
              : 'md-flash';
            break;
          case 'Recent':
            iconName = Platform.OS === 'ios'
              ? `ios-list${focused ? '' : '-outline'}`
              : 'md-list';
            break;
          case 'Profile':
            iconName = Platform.OS === 'ios'
              ? `ios-contact${focused ? '' : '-outline'}`
              : 'md-contact';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
