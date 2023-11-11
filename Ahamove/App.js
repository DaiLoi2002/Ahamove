import * as React from 'react';
import { useState } from 'react';
import { Text, View,ScrollView,Image,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon1 from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();
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
      const slide=Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive){
        setimgActive(slide);
      }
    }
      
  }
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
        pagingEnabled={true}
          onScroll={({nativeEvent})=>onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          horizontal
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
          {
          images.map((e,index)=>
          <Text
          key={e}
          style={imgActive == index ? styles.dotActive:styles.dot}
          >●</Text>
          )}
        </View>

      </View>
      
    </SafeAreaView>
  );
}


function DonHang() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Đơn Hàng!</Text>
    </View>
  );
}
function ThongBao() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Thông Báo!</Text>
    </View>
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
    flex:1
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
  }
  
})
export default App;