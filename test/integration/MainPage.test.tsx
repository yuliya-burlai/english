import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { renderWithContexts } from '../helpers/render.helpers';
import { MainPage } from '../../src/components/MainPage';
import { findByText, waitFor } from '@testing-library/dom';

describe('MainPage', () => {
  it('displays posts headers', async () => {
    renderWithContexts(<MainPage />, { reactQuery: true});

    expect(await screen.findByText('Hello Vite + React 18!')).toBeInTheDocument();

    expect(await screen.findByText('First post')).toBeInTheDocument();
    expect(await screen.findByText('Second post')).toBeInTheDocument();
    expect(await screen.findByText('Third post')).toBeInTheDocument();
  });

  it('displays posts texts', async () => {
    renderWithContexts(<MainPage />, { reactQuery: true});

    expect(await screen.findByTestId('post-text-0')).toHaveTextContent(/Lorem ipsum dolor sit amet/);
    expect(await screen.findByTestId('post-text-1')).toHaveTextContent(/Curabitur posuere ut ligula suscipit laoreet/);
    expect(await screen.findByTestId('post-text-2')).toHaveTextContent(/Curabitur id placerat enim, nec ultricies tellus/);
  });
});