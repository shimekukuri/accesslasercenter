import Image from 'next/image';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ weight: '700', style: 'normal', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex-1 gap-4 bg-gradient-to-br from-black from-20% via-slate-600 via-40% to-orange-600 to-70% shadow-2xl rounded-b-xl p-2 flex flex-col backdrop-blur-3xl">
      <div className="flex-1 flex flex-col-reverse md:grid md:grid-cols-5">
        <div className="md:col-span-3 flex-1 flex">
          <div className="flex flex-1 glass rounded-lg shadow-2xl flex-col p-4 md:p-12">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1
                className={`${oswald.className} text-2xl md:text-7xl text-primary-content`}
              >
                Book Today!
              </h1>
              <h2 className={`${oswald.className} md:text-5xl`}>
                Chattanoogas Premeire Laser services
              </h2>
            </div>
            <div className="fle-1">d</div>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center items-center p-2">
          <img
            src="https://le-cdn.websites.hibu.com/f10e5acbebbf4a19bbd1390a71eb08fc/dms3rep/multi/opt/logo-85e86620-1920w.png"
            alt="logo"
            className="w-1/2 mt-4 animate-opacity-to-one-800 opacity-0 shadow-2xl shadow-red-400 rounded-full"
          />
        </div>
      </div>
      <div className="md:flex gap-4 grid grid-cols-2 grid-rows-2 max-h-48">
        <div className="md:flex-1 animate-opacity-to-one-200 opacity-0">
          <div className="btn flex gap-2 md:justify-around flex-row bg-opacity-50 shadow-black rounded-xl border-none backdrop-blur-xl md:w-full h-full py-4 hover:bg-orange-400">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-1/2 rounded-lg md:w-1/5 shadow-2xl"
            />

            <div className="text-xl">Tattoo Removal</div>
          </div>
        </div>
        <div className="md:flex-1 animate-opacity-to-one-200 opacity-0">
          <div className="btn flex gap-2 md:justify-around flex-row bg-opacity-50 shadow-black rounded-xl border-none backdrop-blur-xl md:w-full h-full py-4 hover:bg-orange-400">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-1/2 rounded-lg md:w-1/5"
            />

            <div>TATTOO</div>
          </div>
        </div>
        <div className="md:flex-1 animate-opacity-to-one-200 opacity-0">
          <div className="btn flex gap-2 md:justify-around flex-row bg-opacity-50 shadow-black rounded-xl border-none backdrop-blur-xl md:w-full h-full py-4 hover:bg-orange-400">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-1/2 rounded-lg md:w-1/5"
            />

            <div>ACNE TREATMENT</div>
          </div>
        </div>
        <div className="md:flex-1 animate-opacity-to-one-200 opacity-0">
          <div className="btn flex gap-2 md:justify-around flex-row bg-opacity-50 shadow-black rounded-xl border-none backdrop-blur-xl md:w-full h-full py-4 hover:bg-orange-400">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-1/2 rounded-lg md:w-1/5"
            />

            <div>Tattoo Removal</div>
          </div>
        </div>
      </div>
    </main>
  );
}
