import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>お名前</Text>
          <Text>趣味：</Text>
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
});

export default HomeScreen;
