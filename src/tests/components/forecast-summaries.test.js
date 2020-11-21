import React from 'react'
import { render } from '@testing-library/react'
import ForecastSummaries from '../../components/forecastsummaries'

const mockFunction = () => {
    return
}

describe('Forecast Summaries', () => {
    const forecasts = [
        {
            date: 1525046400000,
            temperature: {
                max: 11
            },
            description: "Clear",
            icon: "800"
        },
        {
            date: 1525046400022,
            temperature: {
                max: 25
            },
            description: "Foggy",
            icon: "900"
        },
    ];

    it("renders the correct amount of ForecastSummary components", () => {
        const { asFragment } = render(
            <ForecastSummaries 
                forecasts={ forecasts } 
                onForecastSelect={ mockFunction }
            />
        );
    
        expect(asFragment()).toMatchSnapshot()
      });

    it('renders a number of props into a weather summary', () => {
        const { getAllByTestId } = render(
            <ForecastSummaries
                forecasts={ forecasts }
                onForecastSelect={ mockFunction }
            />
        )

        expect(getAllByTestId('date-id')).toHaveLength(2);
        expect(getAllByTestId('temperature-id')).toHaveLength(2);
        expect(getAllByTestId('description-id')).toHaveLength(2);
        expect(getAllByTestId('icon-image-id')).toHaveLength(2);
    })
})
        
