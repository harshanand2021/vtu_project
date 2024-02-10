import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';
import LoginResultScreen from './screens/LoginResultScreen';
import ResultPage from './screens/ResultPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index = {HomeScreen} path = '/' element = {<HomeScreen />} />
      <Route path='/about' element = {<AboutUs />} />
      <Route path='/result/loginpage' element = {<LoginResultScreen />} />
      <Route path='/result/resultpage/' element = {<ResultPage />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
