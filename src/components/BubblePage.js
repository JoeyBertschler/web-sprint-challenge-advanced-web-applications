import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import {useHistory} from 'react-router-dom'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

//import { editColorService, deleteColorService } from '../services/colorServices';
import fetchColorService from '../services/fetchColorService';
import axios from "axios";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  const [colorList, setColorList] = useState([])
  const history = useHistory()

  useEffect( ()=>{
    fetchColorService()
      .then( (res)=>{
        console.log("res: ", res)
        setColors(res.data)
      })
      .catch ( (err)=>{
        console.log(err.message)
      }, [] )
    })
    
  //   axiosWithAuth()
  //     .get('/colors')
  //     .then( (res)=>{
  //       console.log('Data: ', res)
  //       setColorList(res.data)
  //     })
  //     .catch( (err)=>{
  //       console.log('Error: ', err)
  //     })
  // }, [])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (e, editColor) => {
    e.preventDefault()
    axiosWithAuth().put(`/colors/${editColor.id}, editColor`) //convoluted tbh
      .then( (res)=>{
        let colorsNew = []
        colors.filter( (color)=>{
          if( color.id !== editColor.id ) {
            colorsNew.push(color)
          }
        })
        setColors( [...colorsNew,editColor])
      })
      .catch( (err)=> {
        console.log('Error: ', err)
      })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`/colors/${colorToDelete.id}`)
      .then( (res)=>{
        console.log("Res:", res)
        let arrNew = []
        colors.filter( (color)=>{
          if (color.id !== Number(res.data) ){
            arrNew.push(color) //seriously convoluted, need to cut this smhw
          }
        })
        setColors(arrNew)
      })
      .catch( (err)=>{
        console.log('Error: ', err)
      })
  };

  return (
    <>
    <div className="container">

      <ColorList colors={colorList} updateColors={setColorList}
                 toggleEdit={toggleEdit} saveEdit={saveEdit} 
                 deleteColor={deleteColor} editing={editing} 
      />

      <Bubbles colors={colorList}/>  {/* alt colors={colorList} */}
  
    </div>
    </>
  )
}

export default BubblePage

//Task List:
//1. When the component mounts, make an axios
// call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
