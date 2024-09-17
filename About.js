import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window')
const About = ({navigation}) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Image
          source={{ uri: "https://shorturl.at/jediC" }}
          style={styles.image}
        />

      </View>
      <Text style={styles.t1}>Discover the genius of Innovation & Development</Text>
      <Text style={styles.t2}>We fuse your imagination with our technical expertise, and create flexible, future-proof applications that boost effectiveness and improve user experience.
        M TECHUB is not merely another software development firm; it is your dynamic partner for accomplishing digital success. Our team of developers are competent and visionaries, as they stay mindful of the most recent structures, programming scripts, and standards of excellence.
      </Text>
      <View style={styles.container}>
        <TouchableHighlight 
        onPress={()=>{
              navigation.navigate("Services")
        }}
        underlayColor="transparent"
        >
          <Text style={styles.btnText}>Explore Services</Text>
        </TouchableHighlight>
      </View>
    </ScrollView >
  )
}
const styles = StyleSheet.create({
  t1: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    margin: 30
  },
  t2: {
    color: 'black',
    margin: 30,
    fontSize: 25,
    fontWeight: "300"
  },
  image:
  {
    width: width * 1,    // 90% of the screen width
    height: height * 0.5,  // 50% of the screen height
    alignSelf: "center",

  },
  container: {
    marginTop: 15,
    backgroundColor: '#1230AE',
    borderRadius: 8,
    borderWidth: 15,
    borderColor: '#1230AE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    marginBottom: 10,
},
btnText: {
  fontSize: 18,
  fontWeight: '600',
  color: '#fff',
},
})


export default About