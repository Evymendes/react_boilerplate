// Libs
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { WithNotes } from '@kadira/storybook-addon-notes';
import { withKnobs, number, object, color }
  from '@kadira/storybook-addon-knobs';

// MicroComponents
import Postit from '../components/postit';

let description = `The post-it component still doesn't have an input, but
it's planned for the next chapter. You can play a little with the properties
and see how the component render the changes.`;

storiesOf('Canvas', module)
  .addDecorator(withKnobs)
  .addWithInfo('Postit', description, () => {
    const postitProperties = {
      background: color('Background color', '#76FF03'),
      width: number('Width', 150),
      height: number('Height', 150),
      owner: object('Owner', {
        name: 'Arthur',
        id: '1'
      })
    };

    return (
      <WithNotes notes={'We\'re using a #76FF03 green color'}>
        <Postit background={postitProperties.background}
                width={postitProperties.width}
                height={postitProperties.height}
                owner={postitProperties.owner} />
      </WithNotes>
    );
  });
