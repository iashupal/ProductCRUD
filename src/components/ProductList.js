import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {Row, Col, Button, Divider} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './styles.css';

const ProductList = () => {
    const { products, removeProduct } = useContext(GlobalContext);
    console.log(products);
    return (
        <Fragment>
            {products.length > 0 ? 
            (<Fragment>
                {products.map(product => (
                    <div className="crud__list" key={product.id}>
                        <Row gutter={16}>
                            <Col span={18}>
                                <div className="crud__inrlist">
                                    <p className=""><span>Product Name: </span>{product.name}</p>
                                    <p className=""><span>Description: </span>{product.description}</p>
                                    <p className=""><span>Quantity: </span>{product.quantity}</p>
                                    <p className=""><span>Price: </span>{product.price}</p>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="right">
                                    <Link to={`/edit/${product.id}`}>
                                        <Button className="" icon={<EditOutlined />}>Edit</Button>
                                    </Link>
                                    <Divider type="vertical" />
                                    <Button onClick={() => removeProduct(product.id)} type="danger" icon={<DeleteOutlined />}>Delete</Button>
                                </div>
                            </Col>
                        </Row>
                        
                    </div>
                ))}
            </Fragment>) 
            :
            (
                <p className="crud_no--data">No data</p>
            )}
        </Fragment>
    )
}
export default ProductList;