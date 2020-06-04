import React from 'react';

import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

function Header(props: StackHeaderProps) {
  const { scene, previous, navigation } = props;
  const { options } = scene.descriptor;

  const title = options.title ? options.title : scene.route.name;

  console.log(options);

  return (
    <Appbar.Header>
      {previous && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

export default Header;
