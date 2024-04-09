import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the correct text based on the order status', () => {
    /* Pending */
    const wrapper = render(<OrderStatus status="pending" />)

    let statusText = wrapper.getByText('Pending')
    let badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')

    /* Canceled */
    wrapper.rerender(<OrderStatus status="canceled" />)

    statusText = wrapper.getByText('Canceled')
    badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-rose-500')

    /* Delivered */
    wrapper.rerender(<OrderStatus status="delivered" />)

    statusText = wrapper.getByText('Delivered')
    badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-emerald-500')

    /* Delivering */
    wrapper.rerender(<OrderStatus status="delivering" />)

    statusText = wrapper.getByText('Delivering')
    badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-amber-500')

    /* Processing */
    wrapper.rerender(<OrderStatus status="processing" />)

    statusText = wrapper.getByText('Processing')
    badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
})
