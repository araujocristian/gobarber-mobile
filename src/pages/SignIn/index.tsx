import React from 'react';
import { Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';
import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Text>SignIn</Text>
    </Container>
  );
};

export default SignIn;
