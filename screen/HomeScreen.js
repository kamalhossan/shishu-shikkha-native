import {View, Text, StyleSheet, Button} from 'react-native';
import Soroborno from '../component/Soroborno';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Homepage from './Homepage';

export default function HomeScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Text>Home page</Text>
      <Button
        title="Soroborno"
        onPress={() => navigation.navigate('Soroborno')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
