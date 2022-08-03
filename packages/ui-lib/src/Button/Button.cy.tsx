import Picasso from '@toptal/picasso-provider';
import { Button } from './Button';
import { mount } from 'cypress/react';

describe('Button component', () => {
  it('playground', () => {
    mount(
      <Picasso>
        <Button onClick={() => console.log('yes')}>press me</Button>
      </Picasso>
    );

    // cy.contains('press me').should('exist');

    cy.get('button').should('have.text', 'press me');
  });
});
