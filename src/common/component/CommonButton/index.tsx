import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CommonButtonProps} from './types';

const CommonButton: FC<CommonButtonProps> = ({
  visible = true,
  title,
  titleStyle,
  titleProps,
  ...props
}) => {
  if (!visible) return null;
  return (
    <TouchableOpacity {...props} testID="commonButton">
      <Text {...titleProps} style={titleStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(CommonButton);
