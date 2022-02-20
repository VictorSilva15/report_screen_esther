import { Text, View, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function Header(){
    return(
        <View style={styles.header}>
            <View style={styles.nav}>
            <Ionicons name="arrow-back-sharp" size={24} color="#f0f2f5" />
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
        height:50,
    },
    nav:{
        width:"60%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:"100%"
    },
    title:{
        fontSize:18,
        color:"#f0f2f5",
    },
})