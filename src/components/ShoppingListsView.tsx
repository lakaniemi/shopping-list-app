import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootState } from 'src/store/root-reducer';
import { ShoppingList } from 'src/store/types';

interface ListSelectionProps {
  shoppingLists: ShoppingList[];
}

interface ListItemProps {
  shoppingList: ShoppingList;
}

function ListItem(props: ListItemProps) {
  const { shoppingList } = props;

  return (
    <View>
      <Text>{shoppingList.title}</Text>
    </View>
  );
}

function ShoppingListsView(props: ListSelectionProps) {
  const { shoppingLists } = props;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shoppingLists}
        renderItem={({ item }) => <ListItem shoppingList={item} />}
        keyExtractor={(item) => `shopping-lists-list-item-${item.id}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect((state: RootState) => ({
  shoppingLists: state.shoppingLists,
}))(ShoppingListsView);
