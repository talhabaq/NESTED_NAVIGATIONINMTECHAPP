import { View, Text,ScrollView,Image } from 'react-native'
import React from 'react'
import styles from '../Navigation/styles'


const AppDev = () => {
    return (
        <ScrollView>
            <View>
                <Image
                    source={{
                        uri: 'https://shorturl.at/iybsx'
                    }}
                    style={styles.headerImg}
                />
            </View>
            <View>
                <Text style={styles.head}>
                    Custom Mobile Application Development Services
                </Text>
                <Text style={styles.text}>
                    Our professional mobile application developers can help you achieve your digital goals. Our team has extensive experience developing intelligent applications for both iOS and Android platforms.
                </Text>
            </View>
        </ScrollView>
    )
}

export default AppDev