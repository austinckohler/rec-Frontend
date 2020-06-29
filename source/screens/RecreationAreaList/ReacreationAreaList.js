import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function ReacreationAreaList(props) {
  return (
    <TouchableOpacity style={styles.ReacreationAreaList}>
      <View style={styles.areaView}>
        <Text style={styles.areaText}>
          From Area List
          {/* {props.areas.name} */}
        </Text>
        {/* <Icon name="remove" size={20} color="firebrick" /> */}
      </View>
    </TouchableOpacity>
  );
}
