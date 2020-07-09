import React from 'react';
import styled from 'styled-components/native';
import {Button, Text} from '../../components';
import {TextFontWeight, TextAligns, AlignItems, Colors} from '../../enum/index';

const welcomeText = `Welcome
to Sofaster!`;

const imageUrl = '../../assets/images/sofaster_welcome_screen.png';

const HomeContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const HomeBackgroundImage = styled.ImageBackground`
  flex: 1;
  resize-mode: contain;
  justify-content: center;
  align-items: stretch;
`;

const TextContainer = styled.View`
  flex: 1;
  margin-top: 50px;
`;

const ButtonsContainer = styled.View`
  flex: 2;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`;

export default () => {
  return (
    <HomeContainer>
      <HomeBackgroundImage source={require(imageUrl)}>
        <TextContainer>
          <Text
            color={Colors.WHITE}
            fontSize={'40px'}
            fontWeight={TextFontWeight.BOLD}
            textAlign={TextAligns.CENTER}>
            {welcomeText}
          </Text>
          <ButtonsContainer>
            <Button
              text={'Login'}
              textColor={Colors.WHITE}
              color={Colors.CRIMSON}
            />
            <Button
              text={'Sign up'}
              color={Colors.WHITE}
              textColor={Colors.BLACK}
            />
          </ButtonsContainer>
        </TextContainer>
      </HomeBackgroundImage>
    </HomeContainer>
  );
};
