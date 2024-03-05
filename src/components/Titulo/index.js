import React from "react";
import { Text, StyleSheet} from "react-native";

function Titulo (props){
    return(
        <Text style={styles.titulo}>{props.titulo}</Text>
    )
}

const styles = StyleSheet.create({
    titulo :{ 
        color: 'rgb(213, 22, 38)', // Vermelho do Flamengo
        fontSize: 40
    }
});

export default Titulo;
