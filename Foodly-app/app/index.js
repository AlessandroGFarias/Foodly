import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import { ModalShoppingCart } from '../src/components/ModalShoppingCart';
import PurchaseListComponents from "../src/components/PurchaseListComponent";
import ShoppingCart from '../src/components/ShoppingCart';

export default function Index() {
  
  const [listItens, SetlistItens] = useState([
    {
      id: 1,
      name:'Coca Cola 2L',
      price: 10.90,
      icon: require('../src/contents/img/Coca_Cola_2L.webp')
    },
    {
      id:2,
      name:'Chocolate Lacta ao Leite',
      price: 6.50,
      icon: require('../src/contents/img/lacta_ao_leite.jpg')
    },
    {
      id:3,
      name: 'Salgadinho Doritos 75g',
      price: 15,
      icon: require('../src/contents/img/Doritos.jpeg')
    },
    {
      id:4,
      name:"M&M's",
      price: 5.90,
      icon:require('../src/contents/img/M&Ms.png')
    },
    {
      id: 5,
      name: "Guarana Lata",
      price: 6,
      icon: require('../src/contents/img/guarana.jpeg')
    }
  ])

  const [listShoppingCart, setlistShoppingCart] = useState([])

  const [numberOfItens, setNumberOfItens] = useState([0, 0, 0, 0, 0])

  const [modalShoppingCart, setmodalShoppingCart] = useState(false)

  useEffect(() => {
    console.log(numberOfItens)
  }, [numberOfItens])


  return (
    <View
      style={{
        flex: 1,
      }}
    > 

      <ModalShoppingCart 
        onPressPlus={(index) => {
          setNumberOfItens(prev => prev.map((item, i) => i === index ? item + 1 : item ))
        }}
        onPressMinus={(index, id) => {
          setNumberOfItens(prev => prev.map((item, i) => i === index ? item - 1 : item ))

          if(numberOfItens[index] < 1 ) {
            console.log("entrou!")
          }
          
          
        }}
        listShoppingCart={listShoppingCart}
        numberItensInCart={numberOfItens} 
        modalVisible={modalShoppingCart} 
        onRequestClose={() => setmodalShoppingCart(false)}
      />

      <View style={styles.header}>
          <Text style={styles.textTitleWelcome}>Bem Vindo ao Foodly!</Text>
          <View style={styles.shoppingCart}>
            <ShoppingCart 
              color={'black'} 
              size={40} 
              numberItensInCart={listShoppingCart.length}
              onPress={() => setmodalShoppingCart(true)}
            />
          </View>
      </View>

      <View>
          <PurchaseListComponents 
            data={listItens} 
            onPress={(item) => {
              let filter = listShoppingCart.filter(id => id.id === item.id)
              // Caso a array mude para uma api, usar findIndex()
              let targetIndex = item.id - 1

              console.log(targetIndex)

              if(filter.length === 0) {
                setlistShoppingCart(prev => ([...prev, item]))
                setNumberOfItens(prev => prev.map((item, index) => 
                    targetIndex === index ? parseInt(item) + 1 : parseInt(item)
                ))
                
              } else {
                console.log('Item ja Existe!', item)
                setNumberOfItens(prev => prev.map((item, index) => 
                    targetIndex === index ? parseInt(item) + 1 : parseInt(item)
                ))
              }

            }} 
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop:"20%",
    marginBottom:'10%',
    flexDirection:"row",
    justifyContent:'space-between'
  },
  textTitleWelcome: {
    fontSize:25,
    marginLeft:'15%'
  },
  shoppingCart:{
    paddingRight:"4%"
  }
})