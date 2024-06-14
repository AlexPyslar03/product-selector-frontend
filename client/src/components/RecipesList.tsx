import React, { FC } from 'react';
import { Layout, List } from 'antd';
import { data } from '../data/Recipes.data'
import Recipe from "./Recipe";

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#fff',
};

const RecipesList: FC = () => {
    return (
        <Layout.Content style={contentStyle}>
            <List grid={{ column: 3 }}
                  dataSource={data}
                  renderItem={(item) => (
                    <Recipe recipe={item}></Recipe>
                  )}>
            </List>
        </Layout.Content>
    );
};

export default RecipesList;