import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  // We are doing to store the value of the user, e.g email, password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#4a55a2", fontSize: 17, fontWeight: "600" }}>
            Sign In
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
            {" "}
            Sign in to your account
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>
            <TextInput
              //this is in reference to the useState above, we are going to create a value, a prop
              value={email}
              //So now to update the value of the text we are goign to use on Changetext:
              onChangeText={(Text) => setEmail(Text)}
              style={{
                fontSize: email ? 18 : 18, // this is if else
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor={"black"}
              placeholder="Enter your email"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>
            <TextInput
              //this is in reference to the useState above, we are going to create a value, a prop
              value={password}
              //So now to update the value of the text we are goign to use on Changetext:
              onChangeText={(Text) => setPassword(Text)}
              secureTextEntry={true}
              style={{
                fontSize: email ? 18 : 18, // this is if else
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor={"black"}
              placeholder="Enter your password"
            />
          </View>

          <Pressable
            style={{
              width: 200,
              backgroundColor: "#4A55A2",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 15 }}>
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Don't have an account?Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
