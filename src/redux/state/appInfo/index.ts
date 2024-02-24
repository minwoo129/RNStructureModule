import {initialStateType} from './types';

export const initialState: initialStateType = {
  /** 사용자 디바이스 정보 */
  deviceInfo: null,
  /** 사용자 로그인 유무 */
  login: false,
  /** 앱 버전 */
  version: '',
  /** 앱 설치 후 첫 실행 여부 */
  isFirstStart: true,
  /** 앱 실행 후 초기화 완료여부 */
  init: false,
  /** 최근 검색어 목록 */
  searchRecords: [],
};
