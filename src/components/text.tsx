import styled, {css} from 'styled-components/native';
import {ifProp, prop} from 'styled-tools';

export const Text = styled.Text`
  flex-shrink: 1;
  ${ifProp(
    'color',
    css`
      color: ${prop('color')};
    `,
  )}

  ${ifProp(
    'fontSize',
    css`
      font-size: ${prop('fontSize')};
    `,
  )}

  ${ifProp(
    'fontWeight',
    css`
      font-weight: ${prop('fontWeight')};
    `,
  )}

  ${ifProp(
    'textAlign',
    css`
      text-align: ${prop('textAlign')};
    `,
  )}
`;
