import React, {useState} from 'react';
import { act, render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';
import colors from '../mocks/handlers'
//import {fetchColors as mockFetchColors} from './fetchColors'

    let testColors = colors

test("Renders without errors", ()=> {
    render(<BubblePage colors={testColors}/>)
});

test("Renders appropriate number of colors passed in after waiting", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    render(<BubblePage/>)
    const colors = await screen.findByTestId('colors')
    expect(colors).toBeInTheDocument
});

    const colorsFn = jest.fn()
    //jest.mock('./fetchColors')

test("Fetches data and renders on mounting", () => {
  //render with initial (empty)
    let initialColors = []
    const {rerender} = render( <BubblePage colors={initialColors}/> )
  //simulate
    // colors = (colorsFn.mockReturnValueOnce(testColors)) // w/o ()? var?
    let colors = colorsFn.mockReturnValueOnce(testColors)
  //assert, no expect X needed here
    rerender( <BubblePage colors={initialColors}/> )
    const colors2 = await screen.findByText('colors')
    expect(colors2).toBeInTheDocument()
})

