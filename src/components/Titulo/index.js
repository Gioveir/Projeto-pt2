import React from "react";
import { Text, StyleSheet} from "react-native";



function Titulo (props){
    return(
        <Text style={css.titulo}>{props.titulo}</Text>
    )
}

const css = StyleSheet.create({
    titulo :{ 
        color:'rgb(126 ,87 ,194)',
        fontSize:40
    }
});
export default Titulo

