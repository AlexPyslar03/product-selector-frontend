import React, { FC } from 'react';
import { Typography, Layout, Button, Col, Row } from 'antd';

const { Title } = Typography;

const headerStyle: React.CSSProperties = {
    color: '#fff',
    height: '25%',
    paddingInline: 48,
    backgroundColor: '#fff',
};

const titleStyle: React.CSSProperties = {
    textAlign: 'left',
}

const divisionStyle: React.CSSProperties = {
    textAlign: 'center',
}

const NavBar: FC = () => {
    return (
        <Layout.Header style={headerStyle}>
            <Row>
                <Col span={10}>
                    <Title style={titleStyle} level={2}>Babushkin's Bukkakes</Title>
                </Col>
                <Col span={10}>
                    <Title style={divisionStyle} level={3}>"Вкусно и сночно, как у бубушки"</Title>
                </Col>
                <Col span={4}>
                    <Button>Войти</Button>
                </Col>
            </Row>
        </Layout.Header>
    );
};

export default NavBar;