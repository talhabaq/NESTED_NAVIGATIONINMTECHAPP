import { View, Text ,Image,ScrollView} from 'react-native'
import React from 'react'
import styles from '../Navigation/styles'

const WebDev = () => {
    return (
        <ScrollView>
            <View>
                <Image
                    source={{
                        uri: 'https://shorturl.at/kP2G2',
                    }}
                    style={styles.headerImg}
                />
            </View>
            <View>
                <Text style={styles.head}>
                    Custom Web Application Development Services
                </Text>
                <Text style={styles.text}>
                    With our web development services, we assist you in achieving your online vision. We design and develop aesthetically pleasing, intuitive, and feature-rich websites, while keeping a close eye on user experience.S
                </Text>
            </View>
        </ScrollView>
    )
}

export default WebDev