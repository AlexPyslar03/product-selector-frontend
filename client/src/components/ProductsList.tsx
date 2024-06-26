import React, { FC } from 'react';
import {Layout, List} from 'antd';
import {data} from "../data/Recipes.data";
import Product from "./Product";

const { Footer } = Layout;

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    backgroundColor: '#fff',
};

const ProductsList: FC = () => {
    return (
    <Layout.Sider width="25%" style={siderStyle}>
            <List grid={{column: 2}}
                  pagination={{position: 'bottom', align: 'center'}}
                  dataSource={data}
                  renderItem={(item) => (
                      <Product product={item}></Product>
                  )}
            />
            <Footer style={footerStyle}>Обратная связь</Footer>
    </Layout.Sider>
)
    ;
};

export default ProductsList;