import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ReacreationAreaList({areas}) {
    return (
        <TouchableOpacity style={styles.ReacreationAreaList}>
            <View style={styles.areaView}>
               <Text style={styles.areaText}>{areas.name}</Text> 
               <Icon name="remov" size={20} color='firebrick'/>
            </View>
            </TouchableOpacity>
    )
}
