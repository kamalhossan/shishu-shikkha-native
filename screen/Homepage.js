import {View, Text, StyleSheet, Button} from 'react-native';

export default function Homepage({navigation}) {
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
