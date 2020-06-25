// import 'react-native-gesture-handler';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from '../screens/Home/HomeScreen'

// const Stack = createStackNavigator();

// function MainNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           textAlign: 'center',
//           alignSelf: 'center',
//           flex: 1,
//         },
//       }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }


// // const Drawer = createDrawerNavigator();

// // function DrawerStack() {
// //   return (
// //     <Drawer.Navigator
// //       drawerPosition="left"
// //       initialRouteName="Main"
// //       drawerStyle={drawerWidth()}
// //       drawerContent={props => DrawerContainer}>
// //       <Drawer.Screen name="Main" component={MainNavigator} />
// //     </Drawer.Navigator>
// //   );
// // }

// // function drawerWidth() {
// //   return {
// //     width: 250,
// //   };
// // }

// export default function AppContainer() {
//   return <NavigationContainer> {MainNavigator()}</NavigationContainer>;
// }

// console.disableYellowBox = true;
// // const MainNav = createStackNavigator(
// //   {
// //     Home: Home,
// //   },
// //   {
// //     initialRoute: 'Home',
// //     defaultNavigationOptions: ({navigation}) => ({
// //       headerTitleStyle: {
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //         flex: 1,
// //       },
// //     }),
// //   },
// // );
