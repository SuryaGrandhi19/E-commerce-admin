import React from 'react'
import './Admin.css';
import Sidebar from '../../Components/Sidebar/sidebar';
import {Routes,Route} from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import { ListProduct } from '../../Components/ListProduct/ListProduct';


export const Admin = () => {
  return (
    <div className="admin">
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/ListProduct' element={<ListProduct/>}/>

        </Routes>
    </div>
  )
}
