import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function App({ navigation }) {
    return (
          <View style={styles.container}>
            
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:50,marginVertical:30,color:'#027353'}}>Hes</Text>
            <Text style={{fontSize:50,marginVertical:30,color:'#011140'}}>app</Text>
            <Text style={{fontSize:80,marginVertical:10,color:'#590209',fontWeight:'bold'}}>!</Text>
          </View> 

    <View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate("İkiKişi")} style={styles.input}>
            <Text style={styles.yazılar}>2 Kişi</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("ÜçKişi")} style={styles.input}>
            <Text style={styles.yazılar}>3 Kişi</Text>
            </TouchableOpacity>
        </View>
            
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate("DörtKişi")} style={styles.input}>
            <Text style={styles.yazılar}>4 Kişi</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("BeşKişi")} style={styles.input}>
            <Text style={styles.yazılar}>5 Kişi</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate("AltıKişi")} style={styles.input}>
            <Text style={styles.yazılar}>6 Kişi</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("YediKişi")} style={styles.input}>
            <Text style={styles.yazılar}>7 Kişi</Text>
            </TouchableOpacity>
          </View>
            
    </View>

    </View>


    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      //justifyContent: 'center',
      backgroundColor:'#CEECF2',
      
      
      
    },
    input: {
      borderColor: '#36BF7F',
      borderWidth: 2,
      borderRadius: 15,
      padding:10,
      marginHorizontal:10,
      marginVertical:10,
      
      
      
    },
  
    yazılar:{
      fontSize:28,
      fontWeight:'bold',
      color:'#023059',
  
    },
    
  
  
  
  });
  