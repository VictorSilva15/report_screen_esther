import { Text, View, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React from "react";


export function Header(){
    return(
        <View style={styles.header}>
            <View style={styles.nav}>
                <Ionicons name="arrow-back-sharp" size={32} color="#f0f2f5" />
                <Text style={styles.title}>Reportar</Text>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        backgroundColor:"#00816f",
        color: "#f0f2f5",
        padding:16,
        height:100,
    },
    nav:{
        width:"60%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        height:"100%"
    },
    title:{
        fontSize:24,
        color:"#f0f2f5",
    },
})