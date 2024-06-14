import React, { FC } from 'react';
import { Layout } from 'antd';
import './App.css';
import NavBar from './components/NavBar';
import ProductsList from "./components/ProductsList";
import RecipesList from "./components/RecipesList";

const App: FC = () => {
  return (
      <Layout>
          <NavBar/>
          <Layout>
              <RecipesList/>
              <ProductsList />
          </Layout>
      </Layout>
  );
}

export default App;
