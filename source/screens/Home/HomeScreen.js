import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './styles';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to XploRADo</Text>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://images.unsplash.com/photo-1546395224-1eea7e449715?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        }}
      />
      <Button
        style={styles.button}
        title="Login"
        onPress={() => props.navigation.navigate('LoginScreen')}
      />
      <Button
        style={styles.button}
        title="View an Area"
        onPress={() => props.navigation.navigate('RecreationAreaList')}
      />
    </View>
  );
}
