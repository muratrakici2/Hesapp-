import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnaSayfa from '../../sayfalar/AnaSayfa';
import İkiKişi from '../../sayfalar/İkiKişi';
import ÜçKişi from '../../sayfalar/ÜçKişi';
import DörtKişi from '../../sayfalar/DörtKişi';
import BeşKişi from '../../sayfalar/BeşKişi';
import AltıKişi from '../../sayfalar/AltıKişi';
import YediKişi from '../../sayfalar/YediKişi';


const Stack = createStackNavigator();
const options = {
    title: null,

   headerStyle: {
        backgroundColor: '#CEECF2',
        shadowColor: 'transparent',
        //title:'hello' ,
  },
    headerTintColor: 'black',
    


};
const İkiKişilik = {
    title:'2 Kişi',

    headerStyle: {
        backgroundColor: '#590209',
        //shadowColor: 'transparent', 
    },
    headerTintColor: '#CEECF2',
 
};

const ÜçKişilik = {
    title:'3 Kişi',

    headerStyle: {
        backgroundColor: '#590209',
    },
    headerTintColor: '#CEECF2',
 
};
const DörtKişilik = {
    title:'4 Kişi',

    headerStyle: {
        backgroundColor: '#590209',
    },
    headerTintColor: '#CEECF2',
 
};
const BeşKişilik = {
    title:'5 Kişi',

    headerStyle: {
        backgroundColor: '#590209',
    },
    headerTintColor: '#CEECF2',
 
};
const AltıKişilik = {
    title:'6 Kişi',

    headerStyle: {
        backgroundColor: '#590209',
    },
    headerTintColor: '#CEECF2',
 
};
const YediKişilik = {
    title:'7 Kişi',

    headerStyle: {
        backgroundColor: '#590209',
    },
    headerTintColor: '#CEECF2',
 
};


const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AnaSayfa" >
                <Stack.Screen name="AnaSayfa" component={AnaSayfa} options={options} />
                <Stack.Screen name="İkiKişi" component={İkiKişi} options={İkiKişilik} />
                <Stack.Screen name="ÜçKişi" component={ÜçKişi} options={ÜçKişilik} />
                <Stack.Screen name="DörtKişi" component={DörtKişi} options={DörtKişilik} />
                <Stack.Screen name="BeşKişi" component={BeşKişi} options={BeşKişilik} />
                <Stack.Screen name="AltıKişi" component={AltıKişi} options={AltıKişilik} />
                <Stack.Screen name="YediKişi" component={YediKişi} options={YediKişilik} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigationContainer;