import React, { useRef, useEffect } from 'react';
import mm_bulb from '../img/mm_bulb_00.png';
import { useParams } from 'react-router-dom';

const PageHero = (props) => {
  const mainHeaderNode = useRef(null);
  let { page } = useParams();

  useEffect(() => {
    mainHeaderNode.current.focus();
  }, [page]);

  return (
    <header className="relative py-16 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={mm_bulb} alt="" />
        <div
          className="absolute inset-0 bg-indigo-900"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <p className="text-base font-semibold text-indigo-200 tracking-wide uppercase">
            {props.supHeader}
          </p>
          <h1
            ref={mainHeaderNode}
            tabIndex={-1}
            className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl focus:outline-none focus:ring-8 focus:ring-indigo-600 focus:ring-offset-8 focus:ring-offset-indigo-700"
          >
            {props.mainHeader}
          </h1>
          <p className="mt-5 text-xl text-gray-400">{props.subHeader}</p>
        </div>
      </div>
    </header>
  );
};

export default PageHero;
