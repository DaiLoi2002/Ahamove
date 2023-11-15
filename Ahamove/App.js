
import * as React from 'react';
import { useState } from 'react';
import { Text, View,ScrollView,Image,Dimensions,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon1 from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dadat from './View/Dadat';

const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();




const images = [
  'https://www.ahamove.com/_next/image?url=https%3A%2F%2Faha-cms-production.s3.ap-southeast-1.amazonaws.com%2FBanner_Web_51c1e2a78e.png&w=1920&q=75',
  'https://www.ahamove.com/_next/image?url=https%3A%2F%2Faha-cms-production.s3.ap-southeast-1.amazonaws.com%2FBanner_Homepage2_1920x900_0ed7b6a0e2.webp&w=1920&q=75',
  'https://www.ahamove.com/_next/image?url=https%3A%2F%2Faha-cms-production.s3.ap-southeast-1.amazonaws.com%2Fweb_20b845cb84.png&w=1920&q=75',
  'https://www.ahamove.com/_next/image?url=https%3A%2F%2Faha-cms-production.s3.ap-southeast-1.amazonaws.com%2FBanner_Homepage3_1920x900_6deacc2839.webp&w=1920&q=75',
  'https://www.ahamove.com/_next/image?url=https%3A%2F%2Faha-cms-production.s3.ap-southeast-1.amazonaws.com%2FBanner_Homepage1_1920x900_efc0fcb754.webp&w=1920&q=75'
  
];


const WIDTH=Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;
const TrangChu=()=> {
  const[imgActive,setimgActive]=useState(0);
  onchange =(nativeEvent) => {
    if(nativeEvent){
      const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
      if(slide!= imgActive){
        setimgActive(slide);
      }
    }
      
  }
  
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent})=>onchange(nativeEvent)}
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.wrap}
          >
              {
                images.map((e,index) =>
                <Image
                key={e}
                resizeMode='stretch'
                style={styles.wrap}
                source={{uri:e}}
                />
                )
              }
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e,index)=>
          <Text
          key={e}
          style={imgActive==index ? styles.dotActive:styles.dot}
          >●</Text>
          )}
        </View>
      </View>
      
      <View style={styles.mid}>
      <Pressable style={styles.buttondathang}>
      <Image source={require("../Ahamove/Image/mid3.jpg")} style={styles.imgbutton}/>
              <Text style={{fontWeight:700}}>Giao hàng</Text>
      </Pressable>
      <Pressable style={styles.buttondathang}>
      <Image source={require("../Ahamove/Image/mid2.jpg")} style={styles.imgbutton}/>
              <Text style={{fontWeight:700}}>Xe tải</Text>
      </Pressable>
      <Pressable style={styles.buttondathang}>
      <Image source={require("../Ahamove/Image/mid1.jpg")} style={styles.imgbutton}/>
              <Text style={{fontWeight:700}}>Liên tỉnh</Text>
      </Pressable>
      </View>
      <Pressable style={styles.dathang}>
        <View style={styles.dathang1}>
        <Image source={require("../Ahamove/Image/mid3.jpg")} style={styles.imgdathang1}/>
        <Text style={{fontWeight:700,fontSize:9}}>       GIAO HÀNG</Text>
        </View>
        <View style={styles.dathang2}>
        <Icon5 name="arrow-down-bold-box" size={24} color="green"/>
        <Text style={{color:"#8B8989"}}>   Bạn muốn giao hàng đến đâu?</Text>
        </View>
      </Pressable >
      <View style={styles.imgfooter}>
      <Image resizeMode={'contain'}  source={require("../Ahamove/Image/footer.jpg")} style={styles.imgf}/>
      </View>
      
      
    </SafeAreaView>
  );
}


function DonHang() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Đã Đặt" component={Dadat} />
      <TopTab.Screen name="Đặt Trước" component={Tab2} /> 
    </TopTab.Navigator>
  );
}
function Tab1() {
  return (
    <View style={styles.dadat}>
      <View style={styles.dadat1}>
        <Text>Trạng Thái Đơn Hàng</Text>
      </View>
    </View>
  );
}

function Tab2() {
  return (
    <View style={{flex: 1, alignItems :'center', justifyContent: 'center'}}>
      <Text>Đây là Tab 2</Text>
    </View>
  );
}
function ThongBao() {
  return (
    <ScrollView>
        <View style={{ flex: 1,backgroundColor:"#C0C0C0"}}> 
    <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.2}} >
    <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
    <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.2}}> 
    <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
    <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.2}}>
    <Icon3 name="bell" size={24} style={styles.Icon}/>
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
    <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.3}}>
    <Icon3 name="bell" size={24} style={styles.Icon}/>
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
    <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.2  }}>
    <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
      <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.3  }}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
      <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.3  }}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
      <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.3  }}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
      <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.3  }}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
      <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.3  }}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
      <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.3  }}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
      <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.3  }}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
      <Pressable style={{ justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:"white",flexDirection:"row", margin:0.3  }}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View>
      </Pressable>
      
      
    
  </View>
  
    </ScrollView>
    
  );
}
function TaiKhoan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tài Khoản!</Text>
    </View>
  );
}


const App=()=> {
  return (
    <NavigationContainer>
      
      
      <Tab.Navigator>
          
        <Tab.Screen name="Trang chủ" component={TrangChu} options={{ tabBarIcon: ({color}) => (
        <Icon1 name="home" size={24} color={color} />
      ), headerShown: false 
    }}/>
        <Tab.Screen name="Đơn hàng" component={DonHang}  options={{ tabBarIcon: ({color}) => (
        <Icon2 name="clock" size={24} color={color} />
      )
    }} />
        <Tab.Screen name="Thông Báo" component={ThongBao} options={{ tabBarIcon: ({color}) => (
        <Icon3 name="bell" size={24} color={color} />
      )
    }} />
        <Tab.Screen name="Tài Khoản" component={TaiKhoan} options={{ tabBarIcon: ({color}) => (
        <Icon4 name="account-box" size={24} color={color} />
      ), headerShown: false 
    }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:20
  },
  wrap:{
    width:WIDTH,
    height:HEIGHT*0.25
  },
  wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
  },
  dotActive:{
    margin:3,
    color:"black"
  },
  dot:{
    margin:3,
    color:"white"
  },buttondathang:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        width:WIDTH*0.333,
        height:HEIGHT*0.15,
        backgroundColor:"white"
      },mid:{
        flexDirection:'row'
      },
      imgbutton:{
        width:80,
        height:70
      },imgfooter:{
        flex:8,
        width:WIDTH,
        height:HEIGHT*0.8
      },
      imgf:{
        flex:1  
      },
      dathang:{
        width:WIDTH,
        height:HEIGHT*0.1,
        margin:2,backgroundColor:"white"
      },imgdathang1:{
        width:15,
        height:15,
        borderRadius: 100
      },
      dathang1:{
        flexDirection:"row",
        marginLeft:20,
        marginTop:10

      },
      dathang2:{
        borderRadius:10,
        flexDirection:"row",
        backgroundColor:"#EEE8CD",
        height:28,width:WIDTH*0.8,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:40
        

      },
      dadat:{
        flex: 1, alignItems :'flex-start', justifyContent: 'flex-start',backgroundColor:"blue"
      },
      dadat1:{
        backgroundColor:"green",
        width:WIDTH
      },
      textTb:{
        fontWeight:500,
        width:330
      },
      texttintuc:{
        fontWeight:500,
        fontSize:10
      },viewtext:{
        margin:30
      },Icon:{
        top:35,
        left:15,
        color:"green"
        
      }
  
})
export default App;