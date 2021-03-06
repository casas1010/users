import React from "react";
import { View, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;

export default Container = (props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 15,
        margin: WIDTH * 0.06,
        padding: 10,
        width: WIDTH * 0.88,
        ...props.style
      }}
    >
      {props.children}
    </View>
  );
};
