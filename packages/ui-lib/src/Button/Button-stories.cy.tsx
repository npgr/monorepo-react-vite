import Picasso from '@toptal/picasso-provider';
import { composeStories } from '@storybook/testing-react';
import { mount } from 'cypress/react';
import * as stories from './Button.stories';

const { Basic } = composeStories(stories);

describe('Button Stories', () => {
  it('Basic Story', () => {
    mount(
      <Picasso>
        <Basic />
      </Picasso>
    );

    //cy.get("svg").click();
    // cy.get("input").then((i) => expect(i.val()).to.be.empty);
    // cy.contains('Basic').should('exist');

    cy.get('button').should('have.text', 'Basic');
  });
});
