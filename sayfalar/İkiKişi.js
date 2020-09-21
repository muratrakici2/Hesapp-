import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
export default function İkiKişi() {
  const [k1, setk1] = useState('');
  const [k2, setk2] = useState('');
  const [m3, setm3] = useState('');
  const [m4, setm4] = useState('');
  const [m5, setm5] = useState('');

  const changeKisi = (val) => { setk1(val); };
  const changeKisi1 = (val) => { setk2(val); };
  const changeMiktar1 = (val) => { setm3(val); };
  const changeMiktar2 = (val) => { setm4(val); };


  const Hesapp = () => {
    setm5((Number(m3) - Number(m4)) / 2)
  }

  return (

    <ScrollView style={{ backgroundColor: '#CEECF2', flex: 1 }}>

      <View style={{ flexDirection: 'row', }}>
        <View style={{ flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, flex: 1 }}>
          <TextInput onChangeText={changeKisi} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi1} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
        </View>

        <View style={{ flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, flex: 1 }}>
          <TextInput onChangeText={changeMiktar1} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar2} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
        </View>

      </View>



      <View style={{ alignItems: 'center', marginTop: 20, }}>
        <TouchableOpacity onPress={() => Hesapp()} style={{ borderWidth: 1, backgroundColor: '#023059', borderRadius: 15 }}>
          <Text style={{ fontSize: 24, marginVertical: 15, marginHorizontal: 15, color: '#CEECF2' }}>Hesapp!</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 10 }}></View>



      {m5 ? <View style={styles.hesapkısmı}>

        <Text style={styles.yazılar}>{k1}</Text>
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <AntDesign size={22} name={m5 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
          <Text style={styles.yazılar}>{m5 > 0 ? m5 : m5 * -1}{" ₺ verecek"}</Text>
        </View>
        <Text style={styles.yazılar}>{k2}</Text>

      </View> : null}




    </ScrollView>
  );
}
const styles = StyleSheet.create({

  input: {
    borderColor: '#590209',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 15,
    color: '#590209',
    fontWeight: 'bold',



  },

  yazılar: {
    fontSize: 16,
    paddingHorizontal: 5,
    //fontWeight:'bold',
    color: '#03A63C',

  },
  hesapkısmı:{
    marginHorizontal: 10,
     flexDirection: "row",
      alignItems: "center",
      borderWidth:3,
      padding:5,
      borderRadius:10,
      borderColor:'tomato',
      marginVertical:10
  }



});
