import React, {FC} from 'react';
import {Card, Flex, Typography} from "antd";

const cardStyle: React.CSSProperties = {
    width: 200,
    padding: "10px",
    margin: "20px",
    borderRadius: "30px",
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 100,
    padding: "2px",
    margin: "2px",
    borderRadius: "30px",
    backgroundColor: "#F0DDC0"
};

type Props = {
    product: {
        name: string;
        icon: string;
    }
}

const Product: FC<Props> = ({product} : Props) => {
    return (
        <Card hoverable style={cardStyle}>
            <Flex vertical align="center" justify="space-between">
                <img
                    alt="avatar"
                    src={process.env.PUBLIC_URL + '/img/' + product.icon}
                    style={imgStyle}
                />
                <Typography.Title level={3}>
                    {product.name}
                </Typography.Title>
            </Flex>
        </Card>
    );
};

export default Product;