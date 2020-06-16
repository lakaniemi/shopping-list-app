import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootState } from 'src/store/root-reducer';
import { ShoppingList } from 'src/store/types';
import ShoppingListCard from './ShoppingListCard';

type Props = {
  shoppingLists: ShoppingList[];
};

function ShoppingListsView(props: Props) {
  const { shoppingLists } = props;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shoppingLists}
        renderItem={({ item }) => <ShoppingListCard shoppingList={item} />}
        keyExtractor={(item) => `shopping-lists-list-item-${item.id}`}
        ItemSeparatorComponent={() => (
          <View style={{ height: StyleSheet.hairlineWidth }} />
        )}
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
