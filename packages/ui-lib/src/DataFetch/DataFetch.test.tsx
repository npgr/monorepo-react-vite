import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DataFetch } from './DataFetch';

describe('Given DataFetch component', () => {
  describe('When render DataFetch', () => {
    it('Should show lastname content', async () => {
      render(<DataFetch />);

      const content = await screen.findByText('lastname: Maverick');

      expect(content).toBeTruthy();
    });
  });
});
