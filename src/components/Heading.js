import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Row, Col} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

function Heading(){
    return (
        <Row gutter={16}>
            <Col span={20}>
                <h3 className="crud__heading">Product Listing</h3>
            </Col>
            <Col span={4}>
                <div className="right">
                    <Link to="/add">
                        <Button type="primary" size="large" icon={<PlusCircleOutlined/>}>
                            Add Product
                        </Button>
                    </Link>
                </div>
                
            </Col>
        </Row>
    )
}
export default Heading;