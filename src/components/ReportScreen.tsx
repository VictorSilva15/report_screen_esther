import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {View, TextInput, Button, StyleSheet, Alert} from "react-native";

import { Header } from "./Header";


type SubmitedData = {
    title:string;
    description:string;
}

const fieldsValidationSchema = yup.object().shape({
    title: yup
    .string()
    .required('O Título Não pode ser vazio'),
    description: yup
    .string()
    .required('A descrição Não pode ser vazia')
    .min(20, 'Descrição deve conter pelomenos 20 caractéres')
  })


export function ReportScreen() {


    const {register, setValue, handleSubmit, formState:{errors}} = useForm<SubmitedData>({
        resolver: yupResolver(fieldsValidationSchema)
      });


    useEffect(()=>{
        register("title");
        register("description");
    })


    const onSubmit = (data:SubmitedData ) => {
        return Alert.alert(data.title, data.description)
    }
    


    return(
        <View style={styles.container}>

            <Header/>

            <View style={styles.form}>
                <TextInput
                    placeholder={'Título'}
                    onChangeText={text=> setValue('title', text)}
                />
                <TextInput
                    placeholder={'Especifiquq aqui o que houve.'}
                    onChangeText={text=> setValue('description', text)}
                />
                <Button onPress={handleSubmit(onSubmit)} title="Continuar"/>
            </View>            
      </View>

    );
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        flex:1,
        justifyContent:"flex-start",
        backgroundColor:"#f0f2f5",
        color:"#121214",
    },

    form:{
        flex:1,
        padding:24,
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        
    },
    input: {
        backgroundColor:"#e5e5e5",
        color: "#121214",
        border:"1px solid coral",
        borderRadius: 8,
        padding: 8,
        marginVertical:16
    },
});


