import React from 'react'
import { render } from '@testing-library/react'
import LocationDetails from '../../components/locationdetails'

it('takes a city and country and renders them into a h1 tag', () => {
    const { getByText } = render(
        <LocationDetails 
            city='Manchester' 
            country='UK' 
        />
    )

    expect(getByText('Manchester, UK')).toBeTruthy();
    expect(getByText('Manchester, UK')).toHaveClass('location-details')
})