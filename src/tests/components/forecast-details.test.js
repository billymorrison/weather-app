import React from 'react'
import { render } from '@testing-library/react'
import ForecastDetails from '../../components/forecastdetails'

describe('Forecast Details', () => {
    const forecast = {
        date: 1525046400000,
        temperature: {
            max: 11,
            min: 4
        },
        wind: {
            speed: 13,
            direction: "s"
        },
        humidity: 30,
        description: "Clear",
        icon: "800"
    }

    it('renders correctly', () => {
        const { asFragment } = render(
            <ForecastDetails
                forecast={forecast}
            />
        )

        expect(asFragment()).toMatchSnapshot();
    })

    it('renders a number of props into a weather summary', () => {
        const { getByText, getByTestId } = render(
            <ForecastDetails
                forecast={forecast}
            />
        )

        expect(getByText('April 30th, 2018')).toBeTruthy();
        expect(getByText('April 30th, 2018')).toHaveClass('date');
        expect(getByTestId('max-temperature-id')).toBeInTheDocument();
        expect(getByTestId('min-temperature-id')).toBeInTheDocument();
        expect(getByText('Humidity: 30%')).toHaveClass('humidity');
        expect(getByText('Wind: 13mph')).toHaveClass('wind');
    })
})