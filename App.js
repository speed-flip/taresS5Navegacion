import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons'

//Views
import Inicio from './views/Inicio';
import Galeria from './views/Galeria';
import Perfil from './views/Perfil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Victor Torres" options={{ headerTitleAlign: 'center' }} component={BottomTabsNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Galeria') {
            iconName = focused ? 'image' : 'image-outline';
          } else if (route.name == 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen
        name="Home"
        component={Inicio}
        options={{
          headerTitle: 'Inicio'
        }}
      />

      <Tab.Screen
        name="Galeria"
        component={Galeria}
        options={{
          headerTitle: '',
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerTitle: 'Tú perfil'
        }}
      />
    </Tab.Navigator>
  )
}
