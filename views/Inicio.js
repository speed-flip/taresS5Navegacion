import { View, Text, Button } from 'react-native';

function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inicio</Text>
      <Button
        title='Abrir drawer'
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
}

export default Inicio;
