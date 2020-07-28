import React from 'react'
import {TouchableOpacity} from 'react-native'
import styled from 'styled-components/native';
import {Text} from '../../components/text'
import navigation from 'src/navigation';

const HomeContainer = styled.View`
flex: 1;
backgroundColor: red;
`;

export default ({navigation}) => {
    return (
        <HomeContainer>
            <TouchableOpacity onPress={()=>(navigation.goBack())}><Text>Go Back</Text></TouchableOpacity>
            <Text>SIGN UP</Text>
        </HomeContainer>
    )
}