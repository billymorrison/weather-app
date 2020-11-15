import React from 'react'
import { render } from '@testing-library/react'
import ForecastSummary from '../../components/forecastsummary'

describe('Forecast Summary', () => {
    it('renders correctly', () => {
        const { asFragment } = render(
            <ForecastSummary
                date={999}
                temperature={68494}
                description='testDesc'
                icon='testIcon'
            />
        )

        expect(asFragment()).toMatchSnapshot();
    })

    it('renders a number of props into a weather summary', () => {
        const { getByText } = render(
            <ForecastSummary
                date={281020}
                temperature={9}
                description='Clear'
                icon='https://icon.com'
            />
        )

        expect(getByText('281020')).toBeTruthy();
        expect(getByText('281020')).toHaveClass('date');
        expect(getByText('9')).toHaveClass('max-temperature');
        expect(getByText('Clear')).toHaveClass('description');
        expect(getByText('https://icon.com')).toHaveClass('icon');
    })
})