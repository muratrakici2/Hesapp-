import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
export default function ÜçKişi() {
  const [k1, setk1] = useState('');
  const [k2, setk2] = useState('');
  const [k3, setk3] = useState('');
  const [m1, setm1] = useState('');
  const [m2, setm2] = useState('');
  const [m3, setm3] = useState('');
  const [ms, setms] = useState(0);
  const [ms1, setms1] = useState(0);
  const [ms2, setms2] = useState(0);

  const changeKisi = (val) => { setk1(val); };
  const changeKisi1 = (val) => { setk2(val); };
  const changeKisi2 = (val) => { setk3(val); };
  const changeMiktar = (val) => { setm1(val); };
  const changeMiktar1 = (val) => { setm2(val); };
  const changeMiktar2 = (val) => { setm3(val); };



  const Hesapp = () => {
    setms((Number(m1) - Number(m2)) / 3)
    setms1((Number(m1) - Number(m3)) / 3)
    setms2((Number(m2) - Number(m3)) / 3)

  }

  return (

    <ScrollView style={{ backgroundColor: '#CEECF2', flex: 1 }}>

      <View style={{ flexDirection: 'row', }}>
        <View style={{ flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, flex: 1 }}>
          <TextInput onChangeText={changeKisi} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi1} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi2} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
        </View>

        <View style={{ flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, flex: 1 }}>
          <TextInput onChangeText={changeMiktar} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
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




      <View style={{ marginVertical: 10 }}>
        {ms === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k1}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms > 0 ? ms.toFixed(2) : ms.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k2}</Text>

          </View> }
        {ms1 !== 0 ?
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k1}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms1 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms1 > 0 ? ms1.toFixed(2) : ms1.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k3}</Text>

          </View> : null}
        {ms2 !== 0 ?
          <View style={styles.hesapkısmı}>
            <Text style={styles.yazılar}>{k2}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms2 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms2 > 0 ? ms2.toFixed(2) : ms2.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k3}</Text>

          </View> : null}
      </View>




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

  hesapkısmı: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: 'tomato',
    marginVertical: 10
  }



});
