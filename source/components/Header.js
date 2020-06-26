import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function Headers({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
