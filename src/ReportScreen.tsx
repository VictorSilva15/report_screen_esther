import React, { useEffect} from "react";

// react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

// Core Components
import {View, TextInput, Text, Button, StyleSheet, Alert} from "react-native";

//Components
import { Header } from "./Header";
import { Checkbox } from "./components/CheckBox";

// Types
type SubmitedData = {
    title:string;
    description:string;
    mal_servico:string;
    nao_compareceu:string;
    outro:string;
}

// Yup validation
const fieldsValidationSchema = yup.object().shape({
    title: yup
    .string()
    .required('O Título Não pode ser vazio'),
    description: yup
    .string()
    .required('A descrição Não pode ser vazia'),
}).required()


export function ReportScreen() {

    const {register, setValue, handleSubmit, formState:{errors}} = useForm<SubmitedData>({
      resolver: yupResolver(fieldsValidationSchema)
    });


    useEffect(()=>{
      register("title");
      register("description");
      register("mal_servico");
      register("nao_compareceu");
      register("outro");
    }, [register])


    const onSubmit = (data:SubmitedData ) => {
      
      //... submit code to handle data form.

      console.log(data)

      const title = "Title: " + data.title;
      const description = "Description: " + data.description;

      const outro = data.outro ? "outro: Ativo" : "outro: Desativado";
      const mal_servico = data.mal_servico ? "Mal Serviço: Ativo" : "Mal Serviço: Desativado";
      const nao_compareceu = data.nao_compareceu ? "Não Compareceu: Ativo" : "Não Compareceu: Desativado";


      return Alert.alert("Informações do Formulário", 
        nao_compareceu + "\n" + mal_servico + "\n" + outro + "\n\n" +title + "\n" + description
      )


    }
  

    return(
      <View style={styles.container}>

        <Header/>

        <View style={styles.form}>

          <Checkbox value="nao_compareceu" label="O profissional não compareceu" setValue={setValue}/>
          <Checkbox value="mal_servico" label="O profissional não prestou um bom serviço" setValue={setValue}/>
          <Checkbox value="outro" label="Outro" setValue={setValue}/>

          <TextInput
              {...register("title")}
              style={styles.input}
              placeholder={'Título'}
              onChangeText={text=> setValue('title', text)}
          />

          <Text>{errors.title?.message}</Text>

          <TextInput
              {...register("description")}
              style={styles.input}
              placeholder={'Especifique aqui o que houve.'}
              onChangeText={text=> setValue('description', text)}
              multiline={true}
              numberOfLines={10}
          />

          <Text>{errors.description?.message}</Text>

          <Button color={"#07579f"} onPress={handleSubmit(onSubmit)} title="Reportar"/>
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
        backgroundColor:"#fff",
        color: "#121214",
        borderRadius: 8,
        padding: 8,
        marginVertical:16, 
        textAlignVertical: 'top'
    }
});


