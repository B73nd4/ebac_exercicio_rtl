import { render, screen, fireEvent } from '@testing-library/react'
import Post from './index'

describe('PostComments', () => {

    test('deve inserir dois comentários na lista', () => {
        render(<Post />)

        const textarea = screen.getByTestId('comment-input')
        const botao    = screen.getByTestId('comment-button')

        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } })
        fireEvent.click(botao)

        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } })
        fireEvent.click(botao)

        const itens = screen.getAllByTestId('comment-item')

        expect(itens).toHaveLength(2)
        expect(itens[0]).toHaveTextContent('Primeiro comentário')
        expect(itens[1]).toHaveTextContent('Segundo comentário')
    })

})