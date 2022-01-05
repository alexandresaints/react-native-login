import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookNavbar from "./src/Components/BookNavbar";
// import Book from './src/Screens/Book';
import Home from "./src/Screens/Home";

const Main = createNativeStackNavigator()

export default function App(){
    return(
        <>
        <NavigationContainer>
            <Main.Navigator>
                <Main.Screen name='Home' component={Home} options={{ headerShown: false}}/>
                {/* <Main.Screen name='Book' component={Book} options={{ headerTitle: (props) => <BookNavbar {...props} />, headerShadowVisible: false}}/> */}
            </Main.Navigator>
        </NavigationContainer>
        </>
    )
}