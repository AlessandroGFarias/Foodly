
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'

export function ModalShoppingCart({ listShoppingCart, numberItensInCart, modalVisible, onRequestClose, onPressPlus, onPressMinus }) {

    return (
        <View>
            <Modal
                visible={modalVisible}
                transparent
                onRequestClose={onRequestClose}
            >
            <View 
                style={{
                    flex:1,
                    justifyContent:'flex-end',
                    alignItems:'flex-end',
                    backgroundColor:"rgba(0,0,0,0.5)"
                }}
            >
            <View 
                style={{
                    width:"95%",
                    height:"95%",
                    backgroundColor:"#fff",
                    borderTopLeftRadius:20
                }}
            >
                <Text style={{margin:20, fontWeight:'bold', fontSize:23}}>Seu Carrinho</Text>
                {listShoppingCart.length > 0 && (
                    listShoppingCart.map((item, index) => {
                    return (
                    <View 
                        key={item.id} 
                        style={{height:90,margin:10,marginBottom:10,marginTop:10,borderWidth:1, flexDirection:'row'}}
                    >
                            <Image
                            style={{height:80,width:60, alignSelf:'center', marginRight:15}}
                            source={item.icon}
                            />
                        <View>
                            <Text style={{fontSize:17}}>{item.name}</Text>
                            <View style={{flexDirection:'row', marginTop:35, alignItems:'center', justifyContent:"space-between", width:180}}>
                                <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity 
                                        style={{ width: 20, height:20, backgroundColor:'cyan', borderWidth:.5,justifyContent:"center", alignItems:"center"}}
                                        onPress={() => onPressMinus(index)}
                                    >
                                    <Text>-</Text>
                                    </TouchableOpacity>

                                    <Text style={{marginRight:10, marginLeft:10}}>{numberItensInCart[index]}</Text>

                                    <TouchableOpacity 
                                        style={{ width: 20, height:20, backgroundColor:'cyan', borderWidth:.5,justifyContent:"center", alignItems:"center"}}
                                        onPress={() => onPressPlus(index, item.id)}
                                    >
                                    <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{justifyContent:"flex-end"}}>
                            <Text style={{fontSize:20}}>{item.price.toLocaleString('pt-Br', {style:"currency", currency:"BRL" })}</Text>
                        </View>
                    </View>
                    )
                })
                )}
            </View>
            </View>
            </Modal>
        </View>
    )
}