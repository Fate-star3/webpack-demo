import React from 'react';
import Page from '@/components/layout/Page';
import notFoundImg from '@/assets/images/not_found.png';

function Custom404() {
  return (
      <div className="flex flex-col items-center">
        <div className="relative mt-12 h-[15.625rem] w-[15.625rem]">
          <img src={notFoundImg} alt="404" />
        </div>

        <div className="mt-8 text-center">
          <h2 className="mb-1 font-sourceSerif text-2xl font-bold text-black">
            404!
          </h2>
          <p className="mb-4 text-base text-[#000000B2]">pageNotFound</p>
          {/* 将路由改为了新首页的路由 */}
          <a href="/">
            <button className="rounded bg-primary-50 px-5 py-3 text-base text-white">
              goBackToHome
            </button>
          </a>
        </div>
      </div>
  );
}
export default Custom404;
