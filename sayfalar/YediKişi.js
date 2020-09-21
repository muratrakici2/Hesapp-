import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
export default function AltıKişi() {
  const [k1, setk1] = useState('');
  const [k2, setk2] = useState('');
  const [k3, setk3] = useState('');
  const [k4, setk4] = useState('');
  const [k5, setk5] = useState('');
  const [k6, setk6] = useState('');
  const [k7, setk7] = useState('');

  const [m1, setm1] = useState('');
  const [m2, setm2] = useState('');
  const [m3, setm3] = useState('');
  const [m4, setm4] = useState('');
  const [m5, setm5] = useState('');
  const [m6, setm6] = useState('');
  const [m7, setm7] = useState('');

  const [ms1, setms1] = useState(0);
  const [ms2, setms2] = useState(0);
  const [ms3, setms3] = useState(0);
  const [ms4, setms4] = useState(0);
  const [ms5, setms5] = useState(0);
  const [ms6, setms6] = useState(0);
  const [ms7, setms7] = useState(0);
  const [ms8, setms8] = useState(0);
  const [ms9, setms9] = useState(0);
  const [ms10, setms10] = useState(0);
  const [ms11, setms11] = useState(0);
  const [ms12, setms12] = useState(0);
  const [ms13, setms13] = useState(0);
  const [ms14, setms14] = useState(0);
  const [ms15, setms15] = useState(0);
  const [ms16, setms16] = useState(0);
  const [ms17, setms17] = useState(0);
  const [ms18, setms18] = useState(0);
  const [ms19, setms19] = useState(0);
  const [ms20, setms20] = useState(0);
  const [ms21, setms21] = useState(0);

  const changeKisi1 = (val) => { setk1(val); };
  const changeKisi2 = (val) => { setk2(val); };
  const changeKisi3 = (val) => { setk3(val); };
  const changeKisi4 = (val) => { setk4(val); };
  const changeKisi5 = (val) => { setk5(val); };
  const changeKisi6 = (val) => { setk6(val); };
  const changeKisi7 = (val) => { setk7(val); };


  const changeMiktar1 = (val) => { setm1(val); };
  const changeMiktar2 = (val) => { setm2(val); };
  const changeMiktar3 = (val) => { setm3(val); };
  const changeMiktar4 = (val) => { setm4(val); };
  const changeMiktar5 = (val) => { setm5(val); };
  const changeMiktar6 = (val) => { setm6(val); };
  const changeMiktar7 = (val) => { setm7(val); };




  const Hesapp = () => {
    setms1((Number(m1) - Number(m2)) / 7)
    setms2((Number(m1) - Number(m3)) / 7)
    setms3((Number(m1) - Number(m4)) / 7)
    setms4((Number(m1) - Number(m5)) / 7)
    setms5((Number(m1) - Number(m6)) / 7)
    setms6((Number(m1) - Number(m7)) / 7)
    setms7((Number(m2) - Number(m3)) / 7)
    setms8((Number(m2) - Number(m4)) / 7)
    setms9((Number(m2) - Number(m5)) / 7)
    setms10((Number(m2) - Number(m6)) / 7)
    setms11((Number(m2) - Number(m7)) / 7)
    setms12((Number(m3) - Number(m4)) / 7)
    setms13((Number(m3) - Number(m5)) / 7)
    setms14((Number(m3) - Number(m6)) / 7)
    setms15((Number(m3) - Number(m7)) / 7)
    setms16((Number(m4) - Number(m5)) / 7)
    setms17((Number(m4) - Number(m6)) / 7)
    setms18((Number(m4) - Number(m7)) / 7)
    setms19((Number(m5) - Number(m6)) / 7)
    setms20((Number(m5) - Number(m7)) / 7)
    setms21((Number(m6) - Number(m7)) / 7)


  }

  return (

    <ScrollView style={{ backgroundColor: '#CEECF2', flex: 1 }}>

      <View style={{ flexDirection: 'row', }}>
        <View style={{ flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, flex: 1 }}>
          <TextInput onChangeText={changeKisi1} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi2} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi3} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi4} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi5} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi6} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeKisi7} placeholder='İsim' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
        </View>

        <View style={{ flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, flex: 1 }}>
          <TextInput onChangeText={changeMiktar1} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar2} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar3} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar4} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar5} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar6} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
          <TextInput onChangeText={changeMiktar7} keyboardType="number-pad" placeholder='Miktar' placeholderTextColor={"#590209"} style={styles.input}></TextInput>
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

          </View>}
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
            <Text style={styles.yazılar}>{k1}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms4 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms4 > 0 ? ms4.toFixed(2) : ms4.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k5}</Text>

          </View>}
          {ms5 === 0 ? null:
          <View style={styles.hesapkısmı}>
            <Text style={styles.yazılar}>{k1}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms5 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms5 > 0 ? ms5.toFixed(2) : ms5.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k6}</Text>

          </View>}
          {ms6 === 0 ? null:
          <View style={styles.hesapkısmı}>
            <Text style={styles.yazılar}>{k1}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms6 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms6> 0 ? ms6.toFixed(2) : ms6.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k7}</Text>

          </View>}
          {ms7 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k2}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms7 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms7 > 0 ? ms7.toFixed(2) : ms7.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k3}</Text>

          </View>}
          {ms8 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k2}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms8 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms8 > 0 ? ms8.toFixed(2) : ms8.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k4}</Text>

          </View>}
          {ms9 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k2}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms9 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms9 > 0 ? ms9.toFixed(2) : ms9.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k5}</Text>

          </View>}
          {ms10 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k2}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms10 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms10 > 0 ? ms10.toFixed(2) : ms10.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k6}</Text>

          </View>}
          {ms11 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k2}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms10 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms11 > 0 ? ms11.toFixed(2) : ms11.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k7}</Text>

          </View>}
          {ms12 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k3}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms12 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms12 > 0 ? ms12.toFixed(2) : ms12.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k4}</Text>

          </View>}
          {ms13 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k3}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms13 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms13 > 0 ? ms13.toFixed(2) : ms13.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k5}</Text>

          </View>}
          {ms14 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k3}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms14 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms14 > 0 ? ms14.toFixed(2) : ms14.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k6}</Text>

          </View>}
          {ms15 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k3}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms15 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms15 > 0 ? ms15.toFixed(2) : ms15.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k7}</Text>

          </View>}
          {ms16 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k4}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms16 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms16 > 0 ? ms16.toFixed(2) : ms16.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k5}</Text>

          </View>}
          {ms17 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k4}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms17 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms17 > 0 ? ms17.toFixed(2) : ms17.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k6}</Text>

          </View>}
          {ms18 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k4}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms18 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms18 > 0 ? ms18.toFixed(2) : ms18.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k7}</Text>

          </View>}
          {ms19 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k5}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms19 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms19 > 0 ? ms19.toFixed(2) : ms19.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k6}</Text>

          </View>}
          {ms20 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k5}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms20 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms20 > 0 ? ms20.toFixed(2) : ms20.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k7}</Text>

          </View>}
          {ms21 === 0 ? null:
          <View style={styles.hesapkısmı}>

            <Text style={styles.yazılar}>{k6}</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <AntDesign size={22} name={ms21 > 0 ? "arrowleft" : "arrowright"}></AntDesign>
              <Text style={styles.yazılar}>{ms21 > 0 ? ms21.toFixed(2) : ms21.toFixed(2) * -1}{" ₺ verecek"}</Text>
            </View>
            <Text style={styles.yazılar}>{k7}</Text>

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
