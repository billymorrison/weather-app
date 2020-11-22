import React from 'react'
import { render } from '@testing-library/react'
import SearchForm from '../../components/searchform'

it('renders an input box and submit button', () => {
    const { getByTestId } = render(
        <SearchForm />
    )

    expect(getByTestId('input-id')).toBeInTheDocument()
    expect(getByTestId('submit-id')).toBeInTheDocument()
})