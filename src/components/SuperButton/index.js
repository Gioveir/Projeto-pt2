import react from "react";
import { TouchableHighlight,StyleSheet, View,Text, Alert } from "react-native";

const SuperButton = (props) =>{
    return(
        <TouchableHighlight 
        style={style.SuperButton}
        onPress={()=>Alert.alert("SUCESSO!!!")}
        >

            <View style = {style.button}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>

        </TouchableHighlight>
       
    );
}

const style = StyleSheet.create({
    SuperButton:{

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

export default SuperButton