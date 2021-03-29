import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";

class SettingScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>お名前</Text>
          <Text>趣味：</Text>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
              title="確定する"
              color="#fff"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    color: "#fff",
    backgroundColor: "green",
    padding: 10,
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default SettingScreen;
