import React, { Fragment } from 'react';
import Heading from './Heading';
import ProductList from './ProductList';
import Search from './Search';
import './styles.css';
function Home(){
    return (
        <Fragment>
            <div className="crud__container">
                <h1>CRUD Operations</h1>
                <Search />
                <Heading />
                <ProductList />
            </div>
        </Fragment>
    )
}
export default Home;