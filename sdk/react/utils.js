/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

var Log = require('./log');
var Utils = {

  renderRectButton: function(style, icon, func, size, color, fontFamily, key) {
    var RectButton = require('./widgets/RectButton');
    return (
      <RectButton
        key={key}
        icon={icon}
        onPress={func}
        fontSize={size}
        fontFamily={fontFamily}
        style={style}
        buttonColor={color}>
      </RectButton>
    );
  },

  shouldShowLandscape: function(width, height) {
    if (isNaN(width) || isNaN(height) ||
        width === null || height === null ||
        width < 0 || height < 0) {
      return false;
    }

    return width > height;
  },

  // Returns a React stylesheet based on the json object passed in. This method takes the json object,
  // adds in any global styles that are specifed in styles.json, and returns the React Stylesheet.
  getStyles: function(specificStyles) {
    var globalStyles = require('./style/styles.json');

    if(specificStyles == undefined) {
      specificStyles = {};
    }

    var styles = {};
    for (var attrname in globalStyles) { styles[attrname] = globalStyles[attrname]; }
    for (var attrname in specificStyles) { styles[attrname] = specificStyles[attrname]; }

    return StyleSheet.create(styles);
  },

  getTimerLabel: function(timer) {
    var timerLabel = "";

    if (timer < 10) {
      timerLabel = "00:0" + (timer | 0).toString();
    } else if (timer < 60) {
      timerLabel = "00:" + (timer | 0).toString();
    } else if (timer < 600){
      timerLabel = "0" + (timer / 60).toString() + ":" + (timer % 60).toString();
    } else {
      timerLabel = (timer / 60).toString() + ":" + (timer % 60).toString();
    }

    return timerLabel;
  },

  isPlaying: function( rate ) {
    return rate > 0;
  },

  isPaused: function( rate ) {
    return rate == 0;
  },

  secondsToString: function(seconds) {
    var  minus = '';
    if (seconds < 0) {
      minus = "-";
      seconds = -seconds;
    }
    var date = new Date(seconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    if (ss < 10) {
      ss = "0" + ss;
    }
    if (mm == 0) {
      mm = "00";
    } else if (mm < 10) {
      mm = "0" + mm;
    }
    var t = mm + ":" + ss;
    if (hh > 0) {
      t = hh + ":" + t;
    }
    return minus + t;
  },

  localizedString: function(preferredLocale, stringId, localizableStrings) {
    if (typeof stringId !== 'string') return null;
    if (typeof preferredLocale !== 'string') preferredLocale = undefined;
    if (typeof localizableStrings !== 'object' || localizableStrings === null) localizableStrings = {};

    Log.verbose("preferredLocale: " + preferredLocale + ", stringId: " + stringId + ", localizableStrings:");

    var defaultLocale = localizableStrings['defaultLanguage'] ? localizableStrings['defaultLanguage'] : 'en';

    if (preferredLocale && localizableStrings[preferredLocale] && localizableStrings[preferredLocale][stringId]) {
      return localizableStrings[preferredLocale][stringId];
    }

    if (localizableStrings[defaultLocale] && localizableStrings[defaultLocale][stringId]) {
      return localizableStrings[defaultLocale][stringId];
    }

    return stringId;
  },

  stringForErrorCode: function(errorCode: int) {
    switch (errorCode) {
      case 0:
        return "Authorization Failed";
      case 1:
        return "Authorization Response invalid";
      case 2:
        return "Heartbeat failed"
      case 3:
        return "Content Tree Response invalid";
      case 4 :
        return "The signature of the Authorization Response is invalid";
      case 5:
        return "Content Tree Next failed";
      case 6:
        return "AVPlayer Failed";
      case 7:
        return "The asset is not encoded for iOS";
      case 8:
        return "An Internal iOS Error. Check the error property.";
      case 9:
        return "Metadata Response invalid";
      case 10:
        return "During DRM Rights Acquisition, the rights server reported an invalid token";
      case 11:
        return "During DRM Rights Acquisition, the server reported that the device limit has been reached";
      case 12:
        return "During DRM Rights Acquisition, the server reported that device binding failed";
      case 13:
        return "During DRM Rights Acquisition, the server reported the device id was too long";
      case 14:
        return "There was some unknown error during the DRM workflow";
      case 15:
        return "Failed to download a required file during the DRM workflow";
      case 16:
        return "Failed to complete device personalization during the DRM workflow";
      case 17:
        return "Failed to get rights for asset during the DRM workflow";
      case 18:
        return "The expected discovery parameters are not provided";
      case 19:
        return "The discovery response is not received due to network errors";
      case 20:
        return "The discovery reponse is received and an error occured on server side";
      default:
        return "This is not working";
    }
  }

};

module.exports = Utils;
