import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Picasso from '@toptal/picasso-provider';
import { Button } from './Button';

describe('Given Button component', () => {
  describe('When render button', () => {
    it('Should show button content', () => {
      render(
        <Picasso>
          <Button onClick={vi.fn()}>My Button</Button>
        </Picasso>
      );

      expect(screen.getByRole('button', { name: 'My Button' })).toBeInTheDocument();
    });
  });
  describe('When click on button', () => {
    it('Should call onClick handle', () => {
      const mockOnClick = vi.fn();
      render(
        <Picasso>
          <Button onClick={mockOnClick}>My Button</Button>
        </Picasso>
      );

      const button = screen.getByRole('button', { name: 'My Button' });

      fireEvent.click(button);

      expect(mockOnClick).toBeCalledTimes(1);
    });
    it.todo('todo test'), it.skip('skip test');
  });
});
