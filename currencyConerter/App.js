
import React, { useState } from 'react';
import {
  Text,
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const currencyPerRupy = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}



const App = () => {
  const[inputValue, setInputValue] = useState(0);
  const[outputValue, setOutputValue] = useState(0);

  const countValue = (currency) => {
    if(!inputValue){
      Alert.alert('Input Alert!', 'Enter Value', [{text: 'OK', onPress: () => console.log('OK Pressed')}]);  
    }
    
    let value = parseFloat(inputValue) * currencyPerRupy[currency];
    setOutputValue(value.toFixed(2));
    setInputValue(0);
  
  };


  return(
    <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputText} placeholder="Enter Value" keyboardType="numeric" placeholderTextColor="#212121" value={inputValue} onChangeText={(inputValue) => setInputValue(inputValue)}></TextInput>
        </View>

        <View style={styles.outContainer}>
          <Text style={styles.outText}>{outputValue}</Text>
        </View>

        <View style={styles.currencyContainer}>
          {
            Object.keys(currencyPerRupy).map((currency) => (
              <TouchableOpacity style={styles.currencyButton} key={currency} onPress={() => countValue(currency)}>
                <Text style={styles.currencyButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))
          }
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}
export default App;

const styles = StyleSheet.create(
  {
    scrollContainer: {
      flex: 1,
      backgroundColor: "#BDBDBD",
    },
    outContainer: {
      flex: 1,
      height: 50,
      borderColor: "#212121",
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    },
    outText: {
      fontSize: 20,
      color: "#212121",
      fontWeight: "bold",
    },
    inputContainer: {
      flex: 1,
      height: 50,
      borderBottomColor: "#212121",
      borderBottomWidth: 2,
      paddingLeft: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 70,
    },
    inputText: {
      fontSize: 20,
      alignItems: "center",
      justifyContent: "center",
      color: "#212121",
    },
    currencyContainer: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 50,
    },
    currencyButton: {
      height: 100,
      width: "30%",
      backgroundColor: "#BCAAA4",
      borderColor: "#212121",
      borderWidth: 1,
      borderRadius:5,
      marginLeft: 6,
      marginBottom: 10,
      marginRight: 6,
      alignItems: "center",
      justifyContent: "center",
      
    },
    currencyButtonText: {
      fontSize: 20,
      color: "#212121",
      
    }
  }
)