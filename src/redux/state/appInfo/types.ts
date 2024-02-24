export type initialStateType = {
  /** 사용자 디바이스 정보 */
  deviceInfo: deviceInfo | null;
  /** 사용자 로그인 유무 */
  login: boolean;
  /** 앱 버전 */
  version: string;
  /** 앱 설치 후 첫 실행 여부 */
  isFirstStart: boolean;
  /** 앱 실행 후 초기화 완료여부 */
  init: boolean;
  /** 최근 검색어 목록 */
  searchRecords: SearchRecord[];
};

/** 사용자 디바이스 정보 */
export type deviceInfo = {
  /** 디바이스 OS 정보 */
  OS: deviceOS;
  /** 디바이스 고유 ID */
  deviceId: string;
  /** 다이나믹 아일랜드 탑재 유무(iPhone만 해당) */
  hasDynamicIsland: boolean;
  /** 노치 탑재 유무(iPhone만 해당) */
  hasNotch: boolean;
  /** 단말기 OS 버전 */
  systemVersion: string;
};

/** 디바이스 OS 종류 */
export type deviceOS = 'android' | 'ios';

/** 검색 기록 아이템 */
export type SearchRecord = {
  type: SearchRecordType;
  searchTxt: string;
  createdAt: string;
  width?: number;
};
/** 검색 기록 유형(검색창 위치) */
export type SearchRecordType = 'serach1' | 'search2';
