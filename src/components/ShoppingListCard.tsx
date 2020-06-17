import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableRipple, Surface } from 'react-native-paper';

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
      <Surface style={styles.cardContainer}>
        <Text>{shoppingList.title}</Text>
      </Surface>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 15,

    /* TODO: Get rid of this when this issue is resolved:
       https://github.com/callstack/react-native-paper/issues/1990 */
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
});

export default ShoppingListCard;
