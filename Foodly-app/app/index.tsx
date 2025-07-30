import React, { useState } from "react";

import { Text, View, StyleSheet } from "react-native";

import PurchaseListComponents from "../components/PurchaseListComponent/PurchaseListComponent"

export default function Index() {
  
  const [listItens, SetlistItens] = useState([
    {
      id: 1,
      name:'Coca Cola',
      price: 19.90
    },
    {
      id:2,
      name:'Chocolate',
      price: 6.50
    },
    {
      id:3,
      name: 'Queijo 500g',
      price: 15
    },
    {
      id:4,
      name:"Batata frita",
      price: 23.90
    },
    {
      id: 6,
      name: "Guarana Lata",
      price: 6
    }
  ])

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.titleWelcome}>
          <Text style={styles.textTitleWelcome}>Bem Vindo ao Foodly!</Text>
      </View>

      <View>
          <PurchaseListComponents data={listItens} onPress={() => console.log('Pressed!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleWelcome: {
    marginTop:"20%",
    alignItems:"center"
  },
  textTitleWelcome: {
    fontSize:20
  }
})