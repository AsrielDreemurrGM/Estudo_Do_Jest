import { screen } from '@testing-library/react'
import Header from '../index'
import { renderWithProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    // Utiliza a nova função utilitária renderWithProvider para evitar repetição de código
    renderWithProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderWithProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'Roguelike',
              imagem: '',
              plataformas: ['Windows', 'Android'],
              preco: 8.49,
              precoAntigo: 22.19,
              titulo: 'The Binding of Isaac'
            },
            {
              id: 2,
              categoria: 'Roguelike',
              imagem: '',
              plataformas: ['Windows'],
              preco: 73.99,
              precoAntigo: 99.99,
              titulo: 'Hades'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('quantidade-carrinho').innerHTML).toContain(
      '2 itens'
    )
  })
})
