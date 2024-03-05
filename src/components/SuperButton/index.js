import react from "react";
import { TouchableHighlight,StyleSheet, View,Text, Alert } from "react-native";

const SuperButton = (props) =>{
    return(
        <TouchableHighlight 
        style={styles.superButton}
        onPress={()=>Alert.alert("SUCESSO!!!")}
        >

            <View style = {styles.button}>
                <Text style={styles.valor}>{props.valor}</Text>
            </View>

        </TouchableHighlight>
       
    );
}

const styles = StyleSheet.create({
    superButton:{

    },
    button: {
        alignItems: "center",
        backgroundColor: 'rgb(213, 22, 38)', // Vermelho do Flamengo
        padding:12,
        width:300,
    },
   valor:{
    fontSize:20,
    color:"#fff",
    fontWeight:"bold"
   }
})

export default SuperButton
