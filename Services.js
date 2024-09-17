import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import styles from '../Navigation/styles';
const Services = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Text style={styles.head}>We offer Various Services</Text>
                <Text style={styles.text}>Explore Our Services</Text>

                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Web Development")}
                    >
                        <Text style={styles.btnText}>Web Development</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("App Development")}
                    >
                        <Text style={styles.btnText}>App Development</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};



export default Services;
