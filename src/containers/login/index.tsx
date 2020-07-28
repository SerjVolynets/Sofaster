import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../components/text';

const HomeContainer = styled.View`
flex: 1;
backgroundColor: blue;
`;

export default ({navigation}) => {
    return (
        <HomeContainer>
            <TouchableOpacity onPress={()=>(navigation.goBack())}><Text>Go Back</Text></TouchableOpacity>
            <Text>SIGN UP</Text>
        </HomeContainer>
    )
}