import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { ShoppingList } from 'src/store/types';

type Props = {
  shoppingList: ShoppingList;
};

function ShoppingListCard(props: Props) {
  const { shoppingList } = props;

  return (
    <TouchableRipple
      onPress={() => console.log('Pressed')}
      onLongPress={() => console.log('Longpressed')}>
      {/* TODO: Switch from View to Surface when bug with Android is fixed:
          https://github.com/callstack/react-native-paper/issues/1990*/}
      <View style={styles.cardContainer}>
        <Text>{shoppingList.title}</Text>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 15,
  },
});

export default ShoppingListCard;
