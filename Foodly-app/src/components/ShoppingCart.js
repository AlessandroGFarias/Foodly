import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function ShoppingCart({ numberItensInCart, size, color, onPress }) {

    return (
        <TouchableOpacity onPress={onPress}>

            <Ionicons name="cart-outline" size={size} color={color}/>
            {
                numberItensInCart !== 0 && (
                    <View style={{
                        width:20,
                        height:20,
                        position:'absolute',
                        top:25,
                        left:25,
                        backgroundColor:'red',
                        borderRadius:10,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Text 
                        style={{
                            fontSize:12,
                            color:"white"
                        }}
                        >{numberItensInCart}</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    )
}