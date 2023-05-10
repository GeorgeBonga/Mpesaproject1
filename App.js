import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const App = () => {
  // State variables for input values
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // Add logic for submitting the form data to Mpesa API
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/mpesa.png")} style={styles.logo} />
      {/* <Text style={styles.title}>Mpesa Payment Form</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    aspectRatio: 4 / 3,
    resizeMode: "contain",
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    borderRadius:12,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    width:'70%',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
