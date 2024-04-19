import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangedCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangedCallback.mockClear()
  })

  it('Should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangedCallback}
      />,
    )

    expect(wrapper.getByText('Pagina 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 items(s)')).toBeInTheDocument()
  })

  it('Should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangedCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangedCallback).toHaveBeenCalledWith(1)
  })

  it('Should be able to navigate to the previus page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangedCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(nextPageButton)

    expect(onPageChangedCallback).toHaveBeenCalledWith(4)
  })

  it('Should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangedCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(nextPageButton)

    expect(onPageChangedCallback).toHaveBeenCalledWith(0)
  })

  it('Should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangedCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(nextPageButton)

    expect(onPageChangedCallback).toHaveBeenCalledWith(19)
  })
})
