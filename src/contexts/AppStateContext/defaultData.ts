import {AppStateSetState, AppStateState} from './types';

export const AppStateStateDefault: AppStateState = {
  /** 자동 로그인 에러 발생 여부 */
  isAutoLoginError: false,
};

export const AppStateSetStateDefault: AppStateSetState = {
  /**
   * 자동 로그인 에러 발생 여부 설정
   * - 연결 데이터: isAutoLoginError
   */
  setAutoLoginError: () => {},
};
