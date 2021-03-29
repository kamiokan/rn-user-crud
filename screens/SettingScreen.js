import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchUserRecord(); // Action creatorを呼ぶ
  }

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

const mapStateToProps = (state) => {
  return {
    // `state.user.fetchUserRecord`を → `this.props.fetchUserRecord`にコピー
    fetchUserRecord: state.user.fetchUserRecord,
  };
};

export default connect(mapStateToProps, actions)(SettingScreen);
