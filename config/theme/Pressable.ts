import { createStyle } from '@gluestack-style/react';

export const Pressable = createStyle({
  _web: {
    ':focusVisible': {
      outlineWidth: '2px',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$primary300',
      },
    }
  },
  ":active": {
    opacity: 0.8,
    shadowOpacity: 0.5
  }
});
