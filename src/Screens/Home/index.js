import axios from "axios";
import React, {useState, useEffect } from "react";
import {View, ActivityIndicator, StyleSheet, Text, Image, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/Ionicons';

import {Input} from './styles'
import {InputPassword} from './styles'
import logo from '../../Components/Assets/Images/logo.png'

export default function Home({navigation}){

const [dataBooks, setDataBooks] = useState([])
const [searchBook, setSearchBook] = useState('')

    useEffect(() => {
        axios.post(`https://processoreact.projetos.jrmendonca.com.br/Usuarios/ValidaUsuario`)
                .then(response => {
                    setDataBooks(response.data.results.lists)
                }).catch(error => {
                    console.log(error)
                })
    }, [])
    
    return(
    <SafeAreaView style={{alignItems: 'center', backgroundColor: '#F5F6F7'}}>
        <KeyboardAvoidingView style={{justifyContent: 'center'}} behavior='padding'>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo}/>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.textWelcome}>BEM VINDO</Text>
                    <Input placeholder="Email"/>
                    <InputPassword placeholder="Senha" secureTextEntry={true}/>
                        <TouchableOpacity style={{alignItems: 'flex-end', marginTop: 5}}>
                            <Text>Recuperar senha</Text>
                        </TouchableOpacity>
                    <View style={styles.accessContainer}>
                        <TouchableOpacity style={styles.access}>
                            <Text style={styles.accessText}>ACESSAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                        <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Book')
                        }}>                        
                        </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: 80,
        backgroundColor: '#F5F6F7'
    },
    keyboardStyle: {
        flex: 1
    },
    
    inputContainer: {
        marginTop: 50,
    },

    textWelcome: {
        textAlign: 'center',
        padding: 20,
        fontSize: 26,
        fontFamily: 'arial',
        fontWeight: '100',
        letterSpacing: 5,
        color: '#636363'
    
    },
    bookAuthorFont: {
        color: '#303030',
        fontSize: 12,
        maxWidth: 120,

    },
    headerTopic: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20

    },
    accessContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    accessText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },

    access: {
        width: '100%',
        padding: 18,
        backgroundColor: '#129793',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#129793',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 13
    }

})