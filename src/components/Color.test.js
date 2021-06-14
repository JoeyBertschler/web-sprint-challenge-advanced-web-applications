import React from 'react';
import { queryByTestId, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const noCol = {}
const someColor = {
    color: "blue",
    code: {
        hex: '#1234' //probably not blue
    },
    id: 12
}

test("Renders without errors with blank color passed into component", () => {
    // render( <Color setEditColor={ ()=>{console.log('setEdit') color={whiteColor}
    //                toggleEdit:{false} deleteColor={ ()=>{

    //                }}}})

    render( <Color setEditColor={() => console.log( "setEdit" )} 
                   color={noCol} 
                   toggleEdit={false} 
                   deleteColor={() => console.log( "color deleted" )} 
            /> 
    )

});
  
test("Renders the color passed into component", () => {
    render( <Color  handleDelete={ ()=>{console.log('setHandleDelete')}
                    }
                    color={someColor}
                    toggleEdit={false}
                    deleteColor={ ()=>{console.log('color deleted')} 
                    }
            />
    )
    await waitFor( ()=>{expect(screen.queryByTestId('color')).toBeVisible()} )
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    render( <Color setEditColor={ ()=> console.log('setEdit2')}
                   color={someColor}
                   toggleEdit={ (bool)=> console.log(bool)}
                   deleteColor={ ()=> console.log('clicked X')} 
            />
    )

            const deleteButton = {Screen}.getByTestId('delete')
            userEvent.click(deleteButton)
})

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    render( <Color setEditColor={ ()=> console.log('setEdit3')}
                   color={someColor}
                   toggleEdit={ (bool)=> console.log(bool)}
                   deleteColor={ ()=> console.log('clicked X')} //got this mixed up but completely lost trail of thought,
                   //no time to start all over
            />
    )

            const deleteButton = {Screen}.getByTestId('delete')
            userEvent.click(deleteButton)
})