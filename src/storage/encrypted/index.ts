import EncryptedStorage from 'react-native-encrypted-storage';
import {
  encryptedStorageKey,
  getEncryptedStorageDataType,
  setEncryptedStorageDataType,
} from './types';

export const setEncryptedStorageData: setEncryptedStorageDataType =
  async args => {
    const {key, data} = args;
    try {
      const jsonData = JSON.stringify(data);
      await EncryptedStorage.setItem(key, jsonData);
    } catch (e) {
      throw e;
    }
  };

export const getEncryptedStorageData: getEncryptedStorageDataType =
  async key => {
    try {
      const jsonData = await EncryptedStorage.getItem(key);
      if (!jsonData) return null;
      const data = JSON.parse(jsonData);
      return data;
    } catch (e) {
      throw e;
    }
  };

export const removeEncryptedStorageItem = async (key: encryptedStorageKey) => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (e) {
    throw e;
  }
};

export const clearEncryptedStorage = async () => {
  try {
    await EncryptedStorage.clear();
  } catch (e) {
    throw e;
  }
};
