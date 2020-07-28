import React from 'react';
import styled, {css} from 'styled-components/native';
import {ifProp, prop} from 'styled-tools';

import {Text} from '.';

const ButtonContainer = styled.TouchableOpacity`
  position: relative;
  width: 100%;
  padding: 15px 0;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  elevation: ${5};

  ${ifProp(
    'color',
    css`
      background-color: ${prop('color')};
    `,
  )};
`;

export const Button = ({ text, textColor, color, onPress, }) => {
  return (
    <ButtonContainer color={ color } onPress={ onPress }>
      <Text color={ textColor }>{ text }</Text>
    </ButtonContainer>
  );
};
