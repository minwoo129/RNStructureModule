import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppTestProps} from './types';
import CommonButton from '../common/component/CommonButton';

const AppTest: FC<AppTestProps> = ({setDevForm}) => {
  return (
    <View style={styles.container}>
      <CommonButton
        title="정상흐름으로 시작"
        style={styles.buttonStyle}
        titleStyle={styles.buttonTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '100%',
    height: 48,
    backgroundColor: '#3A86F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: 14,
    color: '#fff',
  },
});

export default React.memo(AppTest);
