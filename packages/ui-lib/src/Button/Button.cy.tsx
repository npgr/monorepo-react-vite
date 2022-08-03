import { Button } from './Button';
import { mount } from 'cypress/react';

describe('Button2.cy.ts', () => {
  it('playground', () => {
    mount(<Button onClick={() => console.log('yes')}>press me</Button>);
  });
});
