import React, { FC } from 'react';
import {Card, Flex, Typography} from "antd";
import {CheckOutlined} from "@ant-design/icons";

const { Text } = Typography;

const cardStyle: React.CSSProperties = {
    width: 420,
    padding: "10px",
    margin: "20px",
    borderRadius: "30px",
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 150,
    padding: "2px",
    margin: "2px",
    borderRadius: "30px",
    backgroundColor: "#F0DDC0"
};

type Props = {
    recipe: {
        name: string;
        is_vegan: boolean;
        difficulty_level: number;
        rating: number;
        icon: string;
    }
}

const Recipe: FC<Props> = ({recipe} : Props) => {
    return (
        <Card hoverable style={cardStyle}>
            <Flex>
                <img
                    alt="avatar"
                    src={process.env.PUBLIC_URL + '/img/' + recipe.icon}
                    style={imgStyle}
                />
                <Flex vertical align="flex-start" style={{padding: "2px", margin: "2px"}}>
                    <Typography.Title level={3}>
                        {recipe.name}
                    </Typography.Title>
                    {recipe.is_vegan ?
                        <Text>
                            <CheckOutlined /> Vegan
                        </Text> :
                        <div/>}
                    <Text>
                        Оценка: {recipe.rating}
                    </Text>
                    <Text>
                        Уровень сложности: {recipe.difficulty_level}
                    </Text>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Recipe;