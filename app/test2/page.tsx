'use client';
import { url } from 'inspector';
import React from 'react';
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
  useParallax,
} from 'react-scroll-parallax';
import ContentBox from '../components/parralax/contentBox/ContentBox';
import { Proza_Libre } from 'next/font/google';

const pozra = Proza_Libre({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
});

export default function Test2() {
  return (
    <div className="flex-1">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: 'headline.jpeg', speed: -15 }]}
          className="h-full"
        >
          <div className="absolute inset-0 flex items-center md:justify-center flex-col p-4">
            <img
              src="https://le-cdn.websites.hibu.com/f10e5acbebbf4a19bbd1390a71eb08fc/dms3rep/multi/opt/logo-85e86620-1920w.png"
              alt="logo"
              className="w-1/2 md:w-1/4 mt-4 animate-opacity-to-one-800 opacity-0 shadow-2xl shadow-red-400 rounded-full"
            />

            <h1
              className={`${pozra.className} text-4xl md:text-8xl text-white text-center`}
            >
              Access Laser Center
            </h1>
            <div className="flex flex-col md:flex-row flex-1 w-full p-8 gap-3">
              <ContentBox className="flex-1 p-2" translateX={['0px', '-100px']}>
                <div className="card w-auto md:h-auto md:w-auto bg-base-100 shadow-xl image-full">
                  <figure>
                    <img src="/cardBackGround.jpeg" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Chattanoogas Premiere Laser Services
                    </h2>
                    <p className="">
                      Tattoo, Hair, Fungus, Acne, Melanoma, Sun Spots
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Book Now!</button>
                    </div>
                  </div>
                </div>
              </ContentBox>
              <ContentBox
                className="flex flex-1 md:flex-[2_2_0%] h-auto md:h-96"
                translateX={['0px', '100px']}
              >
                <div className="carousel p-4 space-x-4 rounded-box">
                  <div className="carousel-item">
                    <img
                      src="/cardBackGround.jpeg"
                      className="rounded-box h-44 md:h-auto"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/cardBackGround.jpeg"
                      className="rounded-box h-44 md:h-auto"
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      src="/cardBackGround.jpeg"
                      className="rounded-box h-44 md:h-auto"
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      src="/cardBackGround.jpeg"
                      className="rounded-box h-44 md:h-auto"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/cardBackGround.jpeg"
                      className="rounded-box h-44 md:h-auto"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/cardBackGround.jpeg"
                      className="rounded-box h-44 md:h-auto"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/cardBackGround.jpeg"
                      className="rounded-box h-44 md:h-auto"
                    />
                  </div>
                </div>
              </ContentBox>
            </div>
          </div>
        </ParallaxBanner>
        <div className="flex flex-row h-12 overflow-hidden">
          <Parallax translateX={['-50', '100']}>
            <div className="flex flex-row h-12 gap-3">
              <div className="btn btn-primary">Book Today!</div>
              <div className="btn btn-primary">Free Consult!</div>
              <div className="btn btn-primary">Contact Us!</div>
            </div>
          </Parallax>
        </div>
        <ParallaxBanner
          layers={[{ image: 'second.jpeg', speed: -15 }]}
          className="h-full flex flex-col p-4"
        >
          <div className="flex-1"></div>
          <ContentBox
            className="flex-1 flex  p-2 "
            translateX={['50px', '-50px']}
          >
            <article className="prose prose-xl p-6 md:p-8 bg-slate-500 bg-opacity-80 rounded-xl">
              <h1 className="">Tattoo removal</h1>
              <p>We provide an assortment of services</p>
            </article>
            <div className="hidden md:block">test</div>
          </ContentBox>
        </ParallaxBanner>
        <div className="flex flex-row h-12 overflow-hidden">
          <Parallax translateX={[100, -50]}>
            <div className="flex flex-row h-12 gap-3">
              <div className="btn btn-primary">Book Today!</div>
              <div className="btn">Free Consult!</div>
              <div className="btn">Contact Us!</div>
            </div>
          </Parallax>
        </div>
        <ParallaxBanner
          layers={[{ image: 'hairRemoval.jpeg', speed: -15 }]}
          className="h-full flex flex-col p-4"
        >
          <div className="flex-1"></div>
          <ContentBox className="flex-1 flex  p-2" translateX={['0px', '50px']}>
            <article className="prose prose-xl p-6 md:p-8 bg-slate-500 bg-opacity-80 rounded-xl">
              <h1 className="">Hair removal</h1>
              <p>We provide an assortment of services</p>
            </article>
            <div className="hidden md:block">test</div>
          </ContentBox>
        </ParallaxBanner>
        <div className="flex flex-row h-12 overflow-hidden">
          <Parallax translateX={[-100, 100]}>
            <div className="flex flex-row h-12 gap-3">
              <div className="btn btn-primary">Book Today!</div>
              <div className="btn btn-primary">Free Consult!</div>
              <div className="btn btn-primary">Contact Us!</div>
            </div>
          </Parallax>
        </div>
        <ParallaxBanner
          layers={[{ image: 'washingFace.jpeg', speed: -15 }]}
          className="h-full flex flex-col p-4"
        >
          <div className="flex-1"></div>
          <ContentBox className="flex-1 flex p-2" translateX={['0px', '50px']}>
            <article className="prose prose-xl p-6 md:p-8 bg-slate-500 bg-opacity-80 rounded-xl">
              <h1 className="">Acne Treament</h1>
              <p>We provide an assortment of services</p>
            </article>
            <div className="hidden md:block">test</div>
          </ContentBox>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
}
