import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import { styles } from './styles';

import Illustration from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {
  return (
    <View style={styles.constainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={Illustration}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{`\n`}
          suas jogatinas{`\n`}
          facilmente{`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos {'\n'}
        </Text>

        <ButtonIcon title="Entrar com discord" activeOpacity={.7}/>
      </View>
    </View>
  );
}

