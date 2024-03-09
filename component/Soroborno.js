import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import data from '../data.json';

export default function Soroborno() {
  //   console.log(data);

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <TouchableOpacity
        style={styles.letterItem}
        onPress={() => Alert.alert(item.title)}>
        <Text style={styles.letterTitle}>{item.title}</Text>
        {/* <Text style={styles.letterTitle}>{item.id}</Text> */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.homeScreen}>
      <ScrollView>
        <View>
          <View style={styles.componentHeader}>
            <Text style={styles.componenttitle}>
              চলো আমরা স্বরবর্ণের উচ্চারণ শিখি
            </Text>
          </View>
          {/* {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Alert.alert('item is ' + item.title)}>
            <View style={styles.letterItem}>
              <Text style={styles.letterTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))} */}

          <FlatList
            style={styles.flatlist}
            data={data}
            numColumns={3}
            horizontal={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          {/* <Button title="click me" onPress={() => Alert.alert('clicked')} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    borderWidth: 2,
    backgroundColor: 'maroon',
    borderColor: 'white',
  },
  flatlist: {},
  letterItem: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterTitle: {
    fontSize: 60,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
  componentHeader: {
    backgroundColor: '#f9c2ff',
  },
  componenttitle: {
    fontSize: 46,
    textAlign: 'center',
    paddingVertical: 20,
    color: 'black',
  },
});
