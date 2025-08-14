import { useContext, useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import { ModalShoppingCart } from '../../components/ModalShoppingCart';
import PurchaseListComponents from "../../components/PurchaseListComponent";
import ShoppingCart from '../../components/ShoppingCart';
import CartProvider, { CartContext } from "../../contexts";

export default function Home() {

  const { listShoppingCart, products, addProductOnCart, removeProduct } = useContext(CartContext)

  const [modalShoppingCart, setmodalShoppingCart] = useState(false)

  return (
    <CartProvider>
        <View
          style={{
            flex: 1,
          }}
        > 

          <ModalShoppingCart 
            onPressPlus={(item) => addProductOnCart(item)}
            onPressMinus={(item) => removeProduct(item)}
            listShoppingCart={listShoppingCart}
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
                data={products} 
                onPress={(item) => addProductOnCart(item)}
              />
          </View>
        </View>
    </CartProvider>
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