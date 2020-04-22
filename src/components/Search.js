import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import {Form,Input, Button, Row, Col} from 'antd';

function Search(){
    let history = useHistory();
    const [search, setSearch] = useState('');
    const { searchFilter } = useContext(GlobalContext);
    function handleChange(){
        searchFilter(search);
        history.push('/')
    }
    return(
        <Form layout="vertical">
            <Row gutter={16}>
                <Col span={22}>
                <Form.Item>
                    <Input type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
                </Form.Item>
                </Col>
                <Col span={2}>
                    <Button type="primary" onClick={handleChange}>Search</Button>
                </Col>
            </Row>
        </Form>
    );
}
export default Search;