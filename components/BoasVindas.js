import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const BoasVindas = ({texto}) => {
    return(
        <View style={styles.BoasVindasStyle}>
            <Text style={styles.BoasVindasText}>{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    BoasVindasStyle: {
        width: 200,
        height: 100,
        backgroundColor: "#00f2ff",
        alignItems: "center",
        justifyContent: "center",
    }, 
    BoasVindasText: {
        color: "#eaff00",
        fontSize: 26,
        
    }
})

export default BoasVindas;