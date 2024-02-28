import react from "react";
import { TouchableHighlight,StyleSheet, View,Text, Alert } from "react-native";

const Button = (props) =>{
    return(
        <TouchableHighlight 
        style={style.Button}
        onPress={()=>Alert.alert("Redefinição Concluída")}
        >

            <View style = {style.button}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>

        </TouchableHighlight>
       
    );
}

const style = StyleSheet.create({
    Button:{

    },
    button: {
        alignItems: "center",
        backgroundColor: 'rgb(126 ,87 ,194)',
        padding:12,
        width:300,
    },
   valor:{
    fontSize:20,
    color:"#fff",
    fontWeight:"bold"
   }
})

export default Button