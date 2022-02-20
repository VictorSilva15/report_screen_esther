import React, { useState } from "react";

import {StyleSheet, Pressable, View, Text} from "react-native";

import { Ionicons } from '@expo/vector-icons';

type CheckBoxProps = {
    label: string;
    setValue: (name: any, arg1: Boolean) => void;
    value: string;
}


export function Checkbox(props:CheckBoxProps) {
    const [checked, onChange] = useState(false);

    props.setValue(props.value, checked)

    function onCheckmarkPress() {
      onChange(!checked);
    }
  
    return (
        <View style={styles.checkboxContainer}>
            <Pressable
                style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                onPress={()=>{
                  onCheckmarkPress()
                  props.setValue(props.value, checked)
                }}
                accessibilityLabel={props.label}
            >
                {checked && <Ionicons name="checkmark" size={24} color="white" />}      
            </Pressable>
            <Text style={styles.checkboxLabel}>{props.label}</Text>
        </View>
      
    );
}


const styles = StyleSheet.create({
    checkboxBase: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      borderColor: 'grey',
      backgroundColor: 'transparent',
    },
  
    checkboxChecked: {
      backgroundColor: '#808080',
    },
      
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom:20
    },
  
    checkboxLabel: {
      marginLeft: 16,
      fontWeight: "500",
      fontSize: 18,
    },
  });
