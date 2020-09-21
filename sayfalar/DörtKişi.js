import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
export default function DörtKişi() {
  const [k1, setk1] = useState('');
  const [k2, setk2] = useState('');
  const [k3, setk3] = useState('');
  const [k4, setk4] = useState('');

  const [m1, setm1] = useState('');
  const [m2, setm2] = useState('');
  const [m3, setm3] = useState('');
  const [m4, setm4] = useState('');

  const [ms1, setms1] = useState(0);
  const [ms2, setms2] = useState(0);
  const [ms3, setms3] = useState(0);
  const [ms4, setms4] = useState(0);
  const [ms5, setms5] = useState(0);
  const [ms6, setms6] = useState(0);

  const changeKisi1 = (val) => { setk1(val); };
  const changeKisi2 = (val) => { setk2(val); };
  const changeKisi3 = (val) => { setk3(val); };
  const changeKisi4 = (val) => { setk4(val); };

  const changeMiktar1 = (val) => { setm1(val); };
  const changeMiktar2 = (val) => { setm2(val); };
  const changeMiktar3 = (val) => { setm3(val); };
  const changeMiktar4 = (val) => { setm4(val); };



  const Hesapp = () => {
    setms1((Number(m1) - Number(m2)) / 4)
    setms2((Number(m1) - Number(m3)) / 4)
    setms3((Number(m1) - Number(m4)) / 4)
    setms4((Number(m2) - Number(m3)) / 4)
    setms5((Number(m2) - Number(m4)) / 4)
    setms6((Number(m3) - Number(m4)) / 4)

  }

  return (

    <ScrollView style={{ backgroundColor: '#CEECF2', flex: 1 }}>

      <View style={{ flexDirection: 'row', }}>
        <View style={{ flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, flex: 1 }}>
          <TextInput onChangeText={changeKisi1} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi2} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi3} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi4} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
        </View>

        <View style={{ flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, flex: 1 }}>
          <TextInput onChangeText={changeMiktar1} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar2} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar3} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar4} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
        </View>

      </View>



      <View style={{ alignItems: 'center', marginTop: 20, }}>
        <TouchableOpacity onPress={() => Hesapp()} style={{ borderWidth: 1, backgroundColor: '#023059', borderRadius: 15 }}>
          <Text style={{ fontSize: 24, marginVertical: 15, marginHorizontal: 15, color: '#CEECF2' }}>Hesapp!</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 10 }}></View>



      
        <View style={{marginVertical:10}}>
        {ms1 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k1}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms1 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms1 > 0 ? ms1.toFixed(2) : ms1.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k2}</Text>

        </View> }
        {ms2 === 0 ? null:
          <View style={styles.hesapkısmı}>
            <Text style={styles.yazılar}>{k1}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms2 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms2 > 0 ? ms2.toFixed(2) : ms2.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k3}</Text>

          </View>}
          {ms3 === 0 ? null:
          <View style={styles.hesapkısmı}>
            <Text style={styles.yazılar}>{k1}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms3 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms3 > 0 ? ms3.toFixed(2) : ms3.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k4}</Text>

          </View>}
          {ms4 === 0 ? null:
          <View style={styles.hesapkısmı}>
            <Text style={styles.yazılar}>{k2}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms4 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms4 > 0 ? ms4.toFixed(2) : ms4.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k3}</Text>

          </View>}
          {ms5 === 0 ? null:
          <View style={styles.hesapkısmı}>
            <Text style={styles.yazılar}>{k2}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms5 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms5 > 0 ? ms5.toFixed(2) : ms5.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k4}</Text>

          </View>}
          {ms6 === 0 ? null:
          <View style={styles.hesapkısmı}>
            <Text style={styles.yazılar}>{k3}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms6 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms6> 0 ? ms6.toFixed(2) : ms6.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k4}</Text>

          </View>}

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
