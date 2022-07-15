import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter'
import userEvent from '@testing-library/user-event'

describe('teste da aplicação toda', () => {
  test('1-deve renderizar o component App', () => {
    renderWithRouter(<App  />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  test('2-deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', {
      name: 'Sobre'
    })
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre'
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('3-deve testar um caminho que não existe e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');
    
    const notFoundTitle = screen.getByRole('heading', {
      name: 'Página não encontrada'
    })
    expect(notFoundTitle).toBeInTheDocument();
  });
})
