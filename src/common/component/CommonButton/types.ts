import {
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';

export interface CommonButtonProps extends TouchableOpacityProps {
  visible?: boolean;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
}
