import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import Card from "./Card";


const propTypes={
  title: PropTypes.object,
  content: PropTypes.object,
} 


class List extends React.PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}> {title}</Text>
        </View>

        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({ item }) => <Card item={item}/>}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});
List.propTypes= propTypes;

export default List;
