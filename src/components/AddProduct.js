import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import {Form,Input, Button} from 'antd';
import {v4 as uuid} from 'uuid';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDesription] = useState('');
    const [quantity, setQuantity] = useState('');
    const { addProduct } = useContext(GlobalContext);
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const newProduct = {
            id: uuid(),
            name,
            description,
            price,
            quantity
        }
        addProduct(newProduct);
        history.push("/");
    }

    return (
        <Fragment>
            <div className="crud__form">
                <h2>Add Form</h2>
                <Form onSubmit={handleSubmit} {...layout}>
                    <Form.Item 
                        label="Product Name"
                        name="name">
                        <Input type="text" value={name} placeholder="Enter Name" onChange={e => setName(e.target.value)}/>
                    </Form.Item>

                    <Form.Item 
                        label="Description"
                        name="description">
                        <Input type="text" value={description} placeholder="Enter Description" onChange={e => setDesription(e.target.value)}/>
                    </Form.Item>
                    <Form.Item 
                        label="Quantity"
                        name="quantity">
                        <Input type="number" value={quantity} placeholder="Enter no. of Quantity" onChange={e => setQuantity(e.target.value)}/>
                    </Form.Item>
                    <Form.Item 
                        label="Price"
                        name="price">
                        <Input type="number" value={price} placeholder="Enter Price" onChange={e => setPrice(e.target.value)}/>
                    </Form.Item>
                    <div className="center">
                        <Button type="primary" onClick={handleSubmit}>Add Product</Button>
                    </div>
                    <div className="cancel"><Link to='/'>Cancel</Link></div>
                </Form>
            </div>
        </Fragment>
    )
}
export default AddProduct;