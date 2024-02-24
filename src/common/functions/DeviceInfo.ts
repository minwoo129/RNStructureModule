import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {deviceInfo, deviceOS} from '../../redux/state/AdditionalTypes';

type getDeviceInfoType = () => Promise<deviceInfo>;

/**
 * 디바이스 정보 요청 함수
 */
export const getDeviceInfo: getDeviceInfoType = async () => {
  let OS: deviceOS = Platform.OS === 'android' ? 'android' : 'ios';
  let deviceId = '';
  let uniqueId = '';
  let systemVersion = '';
  let notch = false;
  let dynamicIsland = false;
  try {
    deviceId = DeviceInfo.getDeviceId();
    uniqueId = await DeviceInfo.getUniqueId();
    systemVersion = DeviceInfo.getSystemVersion();
    if (OS === 'ios') {
      notch = DeviceInfo.hasNotch();
      dynamicIsland = DeviceInfo.hasDynamicIsland();
    }
  } catch (e) {
    __DEV__ && console.log('getDeviceInfo error: ', e);
  } finally {
    return {
      OS,
      deviceId: `${deviceId}-${uniqueId}`,
      hasDynamicIsland: dynamicIsland,
      hasNotch: notch,
      systemVersion,
    };
  }
};
