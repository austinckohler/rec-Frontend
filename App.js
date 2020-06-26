import React, { useState } from 'react';
import { View, Text } from 'react-native'
import HomeScreen from './source/screens/Home/HomeScreen';
// import AppContainer from './source/navigation/AppNav'
import Header from './source/components/Header'
import styles from './source/components/styles';
import RecreationAreaList from './source/screens/RecreationAreaList/ReacreationAreaList'
import { FlatList } from 'react-native-gesture-handler';


export default function App() {
  const [areas, setAreas] = useState([
    {id: 1, name: "White River"},
    {id: 1, name: "Vail"},
    {id: 1, name: "Arkansas River"},
    {id: 1, name: "Telluride"},
    {id: 1, name: "Shrine Pass"},
  ])
  return (
    <View style={styles.container}> 
    <Header title="Xplo-RAD-o"/>
      <HomeScreen imageText='As You Gaze into Space Feel the Magic of this Place'/>
      <FlatList 
        data={areas} 
        renderItem={({item}) => <RecreationAreaList areas={item} />}
      />
    </View>

  )
}
// export default function App() {
//   return (
//     <View>
//       <Text>Hello World</Text>
//     </View>
//   )
// }

