import React from 'react'
import { render } from '@testing-library/react'
import ForecastSummary from '../../components/forecastsummary'

const mockFunction = () => {
    return
}

describe('Forecast Summary', () => {
    it('renders correctly', () => {
        const { asFragment } = render(
            <ForecastSummary
                date={1606129635000}
                temperature={68494}
                description='testDesc'
                icon='800'
                onSelect={mockFunction}
            />
        )

        expect(asFragment()).toMatchSnapshot();
    })

    it('renders a number of props into a weather summary', () => {
        const { getByText, getByTestId } = render(
            <ForecastSummary
                date={1606129635000}
                temperature={9}
                description='Clear'
                icon='800'
                onSelect={mockFunction}
            />
        )

        expect(getByText('Monday Nov 23rd')).toBeTruthy();
        expect(getByText('Monday Nov 23rd')).toHaveClass('date');
        expect(getByTestId('temperature-id')).toHaveClass('max-temperature');
        expect(getByText('Clear')).toHaveClass('description');
    })
})