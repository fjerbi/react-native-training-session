
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Home from "./screens/Home";


const App = () => {
 

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Home></Home>
    </View>
  );
};



export default App;
