import { StyleSheet, Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const SCREEN_BACKGROUNDCOLOR = '#00B762';
export const SCREEN_BACKGROUNDCOLOR_TOP = '#005C36';
export const TITLE_COLOR = '#525252';
export const BUTTON_GROUP_SELECTED_COLOR = '#525252';

export const TextColors = {
  title3: '#504e4e',
  body: '#8c8787',
  itemInfo: '#a8a8a8'
}

export const COLORS = {
  оrange: '#ff9800',
  green: '#00b762',
  blue: '#009fe4',
  red: '#ff3333',
  white: '#fff',
  grey: '#D5D5D5',
  grey2: '#8c8787',
  black: '#525252',
};

export const TextStyle = StyleSheet.create({
  title1: {
    fontSize: 34,
    fontWeight: 'bold',
    color: TITLE_COLOR
  },
  title2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: TITLE_COLOR
  },
  title3: {
    fontSize: 22,
    fontWeight: 'bold',
    color: TextColors.title3
  },
  title4: {
    fontSize: 20,
    color: TITLE_COLOR
  },
  body: {
    fontSize: 17,
    color: COLORS.grey2
  },
  headLine: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.grey2
  },
  headLineNormal: {
    fontSize: 17,
    fontWeight: 'normal',
    color: TITLE_COLOR
  },
  body2: {
    fontSize: 17,
    color: COLORS.grey2
  },
  callout: {
    fontSize: 16,
    color: COLORS.grey2
  },
  subHead: {
    fontSize: 15,
    color: COLORS.grey2
  },
  footNote: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.grey2
  }
});

/**
 * Buttons constants
 */
export const ButtonStyles = {
  fontSize: 17,
  fontWeight: '600'
};

/**
 * Navigation styles
 */

 export const NAVIGATION_STYLES = {
  navBarHidden: false,
  navBarTextColor: '#FFF',
  screenBackgroundColor: '#FFF',
  statusBarColor: SCREEN_BACKGROUNDCOLOR_TOP,
  navBarBackgroundColor: SCREEN_BACKGROUNDCOLOR,
  navBarButtonColor: '#fff',
  tabBarHidden: true,
  //android
  navBarTitleTextCentered: true
 }

 export const NAVIGATION_STYLES_MAIN = {
  navBarHidden: false,
  navBarTextColor: '#FFF',
  screenBackgroundColor: '#FFF',
  statusBarColor: SCREEN_BACKGROUNDCOLOR_TOP,
  navBarBackgroundColor: SCREEN_BACKGROUNDCOLOR,
  navBarButtonColor: '#fff',
  //android
  navBarTitleTextCentered: true
 }