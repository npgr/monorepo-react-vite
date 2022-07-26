import { DecoratorFn } from '@storybook/react';
import Picasso from '@toptal/picasso-provider';

const PicassoProvider: DecoratorFn = (StoryFn, context) => {
  //console.log(context);
  return (
    <Picasso responsive={false} loadFavicon={false} fixViewport={false}>
      <StoryFn />
    </Picasso>
  );
};

export const globaldecorators = [PicassoProvider];
