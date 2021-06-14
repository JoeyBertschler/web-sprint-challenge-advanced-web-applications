import React from 'react';
import { render, screen, waitFor} from "@testing-library/react";
import ColorList from './ColorList';
import colors from '../mocks/handlers'

let colors = colors

test("Renders an empty list of colors without errors", () => {
    render( <ColorList colors={[]} editing={false}
                       toggleEdit={false}
                       saveEdit={ ()=> console.log('edit saved')}
                       deleteColor={ ()=> console.log('color deleted')}
            />
    )
   
});

test("Renders a list of colors without errors", () => {
    render( <ColorList colors={[]} editing={false}
        toggleEdit={false}
        saveEdit={ ()=> console.log('edit saved')}
        deleteColor={ ()=> console.log('color deleted')}
    />
    )
    expect( screen.queryAllByTestId('color')).toHaveLength(11)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", async () => {
    const {rerender} =  render( <ColorList colors={colors} editing={false} 
                                            toggleEdit={false} saveEdit={() => console.log( "saved" )} 
                                            deleteColor={() => console.log( "color deleted" )} 
                                /> 
                        )
    await waitFor( ()=> render( <ColorList   colors={colors} editing={false} 
                                            toggleEdit={false} saveEdit={() => console.log( "saved" )} 
                                            deleteColor={() => console.log( "color deleted" )} 
                                /> 
                        )
    )

    expect( screen.queryByTestId('editMenu')).toBeNull()

    await waitFor( () => rerender( <ColorList colors={colors} editing={true} toggleEdit={true} 
                                              saveEdit={() => console.log( "saved" )} 
                                              deleteColor={() => console.log( "color deleted" )} 
                                    /> 
                                 )
    )
    expect( screen.queryByTestId( "editMenu" ) ).toBeVisible();
  })
