import React from 'react';
// import './styles'
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default function HomeScreen({imageText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{imageText}</Text>
      <Image style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1546395224-1eea7e449715?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}/>
    </View>
  )
}
