import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={() => (
        <Text>Feed</Text>
      )} />
      <Drawer.Screen name="Article" component={() => (
        <Text>Article</Text>
      )} />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;
