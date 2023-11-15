import * as React from 'react';
import { StyleSheet } from 'react-native-web';
import { Button, View, Text,FlatList,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

var array = [
  {
    image: require('../Image/4h.jpg'),
    noinhan: '148 Hoàng Hoa Thám, Phường 12, Tân Bình, Thành phố Hồ Chí Minh',
    price: 1800,
    noigiao:'3837 Hẻm 38, Tây Thạnh, Tân Phú, Thành phố Hồ Chí Minh',
    des: 'show something',
    trangthai: 'thanhcong',
    thoigian: '06/04/2023|23:34',
  },
  {
    image: require('../Image/sieucap.jpg'),
    noinhan: '140 Lê Trọng Tấn, Tây Thạnh, Tân Phú, Thành phố Hồ Chí Minh',
    price: 1700,
    noigiao:'49 Đường Trần Hưng Đạo, Tân Thành, Tân Phú, Thành phố Hồ Chí Minh 700000',
    thoigian: '03/06/2023|9:18',
    trangthai: 'thanhcong',
  },
  {
    image: require('../Image/sieutoc.jpg'),
    noinhan: '53 Phạm Văn Chiêu, Phường 9, Gò Vấp, Thành phố Hồ Chí Minh',
    price: 1500,
    noigiao:'28 - 30 Trần Triệu Luật, Phường 6, Tân Bình, Thành phố Hồ Chí Minh 700000',
    des: 'show something',
    trangthai: 'thanhcong',
    thoigian: '08/10/2023|11:38',
  },
  {
    image: require('../Image/sieutoc_doan.jpg'),
    noinhan: ' 170/1c Đường Vườn Lài, Tân Phú, Thành phố Hồ Chí Minh',
    price: 1900,
    noigiao:'246 Đ. Nguyễn Hồng Đào, Phường 13, Tân Bình, Thành phố Hồ Chí Minh',
    des: 'show something',
    trangthai: 'dahuy',
    thoigian: '02/05/2023|13:33',
  },
  {
    image: require('../Image/tietkiem.jpg'),
    noinhan: 'NHA KHOA THANH BÌNH, Đường số 1, phường 10, Tân Bình, Thành phố Hồ Chí Minh',
    price: 2700,
    noigiao:'131 Trịnh Đình Trọng, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh',
    des: 'show something',
    trangthai: 'dahuy',
    thoigian: '14/11/2023|22:03',
  }
];

function Dadat() {
  var [state, setState] = React.useState(array);
  var [color, setColor] = React.useState(1);
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Pressable
          style={
            ([{ borderWidth: '1px', borderRadius: '5px', borderColor: 'red', padding: '5px' },
            (color == 1 ? { backgroundColor: 'red' } : null)])
          }
          title="All"
          onPress={() => {
            setState(array);  
            setColor(1);
          }}>
          <Text>Tất cả</Text>
        </Pressable>
        <Pressable
          style={
            ([{ borderWidth: '1px', borderRadius: '5px', borderColor: 'red', padding: '5px' },
            (color == 2 ? { backgroundColor: 'red' } : null)])
          }
          title="Thành Công"
          onPress={() => {
            var newarr = array.filter((item) => {
              return item.trangthai == 'thanhcong';
            });
            setState(newarr);
            setColor(2);
          }}>
          <Text>Thành Công</Text>
        </Pressable>
        <Pressable
          style={
            ([{ borderWidth: '1px', borderRadius: '5px', borderColor: 'red', padding: '5px' },
            (color == 3 ? { backgroundColor: 'red' } : null)])
          }
          title="Đã huỷ"
          onPress={() => {
            var newarr = array.filter((item) => {
              return item.trangthai == 'dahuy';
            });
            setState(newarr);
            setColor(3);
          }}>
          <Text>Đã Huỷ</Text>
        </Pressable>
        </View>
        <View style={{ flex: 8 }}>
  <FlatList
    numColumns={1}
    data={state}
    renderItem={({ item }) => {
      return (
        <Pressable
        
          style={{
            alignItems: 'center',
            height: '130px',
            width: '90  %',
            
            backgroundColor: 'pink',
            shadowOffset: { width: '3px', height: '3px' },
            shadowColor: 'grey',
            shadowOpacity: '0.5',
            margin: '10px',
            marginLeft:15
          }}>
            <View style={{flexDirection:'column',flex:1}}>
              <Text style={{flex:0.333,flexDirection:'row'}}>
                <Text >{item.thoigian}</Text>
              </Text>
            <Text style={{fontSize:15,fontWeight:400,flex:0.333,backgroundColor:'white'}}>  📦  {item.noinhan}</Text>
            <Text style={{fontSize:15,fontWeight:400,flex:0.333,backgroundColor:'white'}}>  📥  {item.noigiao} </Text>
            </View>
            
        </Pressable>
      );
    }}
  />
</View>
    </View>
  );
}
export default Dadat
const styles=StyleSheet.create({
    dadat:{flex:1,alignItems :'flex-start', justifyContent: 'flex-start',backgroundColor:"blue"},
    dadat1:{
        backgroundColor:"green",
        width:400
        
    }
    
    
})
