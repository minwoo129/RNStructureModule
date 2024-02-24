export type AppStateContextType = {
  state: AppStateState;
  setState: AppStateSetState;
};

export type AppStateState = {
  /** 자동 로그인 에러 발생 여부 */
  isAutoLoginError: boolean;
};

export type AppStateSetState = {
  /**
   * 자동 로그인 에러 발생 여부 설정
   * - 연결 데이터: isAutoLoginError
   */
  setAutoLoginError: (isAutoLoginError: boolean) => void;
};
