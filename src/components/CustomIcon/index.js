import React from 'react';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontawesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const CustomIcon = ({name, size = 25, color, type, style, ...props}) => {
  switch (type) {
    case 'fontawesome':
      return (
        <Fontawesome
          name={name}
          size={size}
          color={color}
          style={style}
          {...props}
        />
      );
    case 'antdesign':
      return (
        <AntDesign
          name={name}
          size={size}
          color={color}
          style={style}
          {...props}
        />
      );
    default:
      return (
        <Feather
          name={name}
          size={size}
          color={color}
          style={style}
          {...props}
        />
      );
  }
};

CustomIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
};

export default CustomIcon;
