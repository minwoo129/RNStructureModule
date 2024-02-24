import {StorageData} from '../async/types';

export type encryptedStorageKey = 'loginInfo' | 'guestLoginInfo';

// ==================================== Function Types ======================================
export type setEncryptedStorageDataType = (
  args: setEncryptedStorageArgs,
) => Promise<void>;

type setEncryptedStorageArgs = loginInfoArgs;

type loginInfoArgs = {
  key: 'loginInfo';
  data: loginInfoType;
};

export type getEncryptedStorageDataType = <T = StorageData>(
  key: encryptedStorageKey,
) => Promise<T | null>;

// ==================================== Data Types: loginInfo =========================================
export type loginInfoType = {
  userId: string;
  pwd: string | null;
  loginType: loginType;
  socialType: socialType | null;
  autoLogin: boolean;
};

export type loginType = 'normal' | 'social';

export type socialType = 'naver' | 'kakao' | 'google' | 'apple';
