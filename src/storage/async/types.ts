import {SearchRecord} from '../../redux/state/AdditionalTypes';

export type storageKey = 'appInfo';

export type StorageData = {
  [key in string]: any;
};
// ================================== Function Types ===========================================
export type setStorageDataType = (args: setStorageDataArgs) => Promise<void>;

export type setStorageDataArgs = appInfoArgs;

type appInfoArgs = {
  key: 'appInfo';
  data: appInfoStorageType;
};

export type getStorageDataType = <T = any>(
  key: storageKey,
) => Promise<T | null>;

export type clearEachStorageDataType = (key: storageKey) => Promise<void>;

export type clearAllStorageDataType = () => Promise<void>;

// =================================== Storage Data Types ======================================
export type appInfoStorageType = {
  /** 앱 설치 후 첫 실행 여부 */
  isFirstStart: boolean;
  /** 최근 검색어 목록 */
  searchRecords: SearchRecord[];
};
