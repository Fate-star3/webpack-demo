import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/Home'; // 你的首页组件
import NotFoundPage from '../404'; // 你的404页面组件

function App() {
  return (
    <Routes>
      <Route  path="/" element={<HomePage/>} />
      <Route path='*' element={<NotFoundPage/>} />
      {/* 没有匹配到的路由都会显示NotFoundPage */}
    </Routes>
  );
}

export default App;
