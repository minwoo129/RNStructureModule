import {
  clearAllStorageDataType,
  clearEachStorageDataType,
  getStorageDataType,
  setStorageDataType,
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageData: setStorageDataType = async args => {
  const {key, data} = args;
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.mergeItem(key, jsonData);
  } catch (e) {
    throw e;
  }
};

export const getStorageData: getStorageDataType = async key => {
  try {
    const jsonData = await AsyncStorage.getItem(key);
    if (!jsonData) return null;
    const data = JSON.parse(jsonData);
    return data;
  } catch (e) {
    throw e;
  }
};

export const clearEachStorageData: clearEachStorageDataType = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    throw e;
  }
};

export const clearAllStorageData: clearAllStorageDataType = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    throw e;
  }
};
