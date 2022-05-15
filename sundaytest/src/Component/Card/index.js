import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';

const Card = props => {
  const { children, elevation, opacity, cornerRadius } = props;

  const cardStyle = Platform.select({
    ios: () => 
      StyleSheet.create({
        container: {
          shadowRadius:elevation, 
          shadowOpacity:opacity, 
          shadowOffset:{ width: 0, height: elevation },
          borderRadius:cornerRadius,
          backgroundColor: props.backgroundColor,
        }
      }),
    android: () => 
      StyleSheet.create({
        container: {
          elevation:elevation,
          borderRadius:cornerRadius, 
          
          backgroundColor: props.backgroundColor,
          // marginVertical:1,
          // paddingVertical:1,

        }
      })
  })();

  return(
    <View   style={[cardStyle.container, {...props.style}]}>
      {children}
    </View>
  ) 

}

Card.prototype = {
  backgroundColor: PropTypes.string,
  elevation: PropTypes.number,
  cornerRadius: PropTypes.number,
  opacity: PropTypes.number
}

Card.defaultProps = {
  backgroundColor: '#ffffff',
  elevation: 5, 
  cornerRadius: 5,
  opacity: 0.5
}

export default Card