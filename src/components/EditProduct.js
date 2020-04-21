import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";
import {Form, Button, Input} from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const EditProduct = (props) => {
    let history = useHistory();
    const { products, editProduct } = useContext(GlobalContext);
    const [selectedProduct, setSeletedProduct] = useState({ id: null, name: '', description: '', price: '', quantity: '' });
    const currentProductId = props.match.params.id;

    useEffect(() => {
        const productId = currentProductId;
        const selectedProduct = products.find(product => product.id === productId);
        setSeletedProduct(selectedProduct);
    }, [currentProductId, products]);

    const handleSubmit = e => {
        e.preventDefault();
        editProduct(selectedProduct);
        history.push('/');
        console.log(selectedProduct)
    }

    const handleChange = (userKey, value) => setSeletedProduct({ ...selectedProduct, [userKey]: value })

    if (!selectedProduct || !selectedProduct.id) {
        return <div className="crud__notfound">Id not found !</div>
    }

    return (
        <Fragment>
            <div className="crud__form">
                <h2>Edit Form</h2>
                <Form onSubmit={handleSubmit} {...layout}>
                    <Form.Item label="Product Name">
                        <Input type="text" value={selectedProduct.name} name="name" placeholder="Enter Name" onChange={e => handleChange("name", e.target.value)}/>
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input type="text" value={selectedProduct.description} name="location" placeholder="Enter description" onChange={e => handleChange("description", e.target.value)}/>
                    </Form.Item>
                    <Form.Item label="quantity">
                        <Input type="number" value={selectedProduct.quantity} name="designation" onChange={e => handleChange("quantity", e.target.value)} placeholder="Enter no. of quantity"/>
                    </Form.Item>
                    <Form.Item label="Price">
                        <Input type="number" value={selectedProduct.price} name="price" onChange={e => handleChange("price", e.target.value)} placeholder="Enter Price"/>
                    </Form.Item>
                    <div className="center">
                        <Button type="primary" onClick={handleSubmit}>Edit Product</Button>
                    </div>
                    <div className="cancel"><Link to='/'>Cancel</Link></div>
                </Form>
            </div>
        </Fragment>
    )
}
export default EditProduct;