import React from 'react';
import { holidays } from '../data/holidays';
import { Calendar } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">探索全球精彩节日</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            浏览世界各地具有代表性的节日庆典，感受不同文化的独特魅力和丰富内涵。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* 第一行 */}
          <div className="md:col-span-8 h-96">
            <div className="group relative h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img 
                src={holidays[0].image}
                alt={holidays[0].name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-6 w-full">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{holidays[0].date}</span>
                    <span className="ml-2 px-2 py-0.5 bg-blue-500/80 rounded-full text-xs">
                      {holidays[0].country}
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">{holidays[0].name}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{holidays[0].description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 h-96">
            <div className="group relative h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img 
                src={holidays[1].image}
                alt={holidays[1].name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-6 w-full">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{holidays[1].date}</span>
                    <span className="ml-2 px-2 py-0.5 bg-blue-500/80 rounded-full text-xs">
                      {holidays[1].country}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{holidays[1].name}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{holidays[1].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第二行 */}
          <div className="md:col-span-4 h-64">
            <div className="group relative h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img 
                src={holidays[2].image}
                alt={holidays[2].name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-4 w-full">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{holidays[2].date}</span>
                    <span className="ml-2 px-2 py-0.5 bg-blue-500/80 rounded-full text-xs">
                      {holidays[2].country}
                    </span>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-1">{holidays[2].name}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{holidays[2].description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 h-64">
            <div className="group relative h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img 
                src={holidays[3].image}
                alt={holidays[3].name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-4 w-full">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{holidays[3].date}</span>
                    <span className="ml-2 px-2 py-0.5 bg-blue-500/80 rounded-full text-xs">
                      {holidays[3].country}
                    </span>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-1">{holidays[3].name}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{holidays[3].description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 h-64">
            <div className="group relative h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img 
                src={holidays[4].image}
                alt={holidays[4].name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-4 w-full">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{holidays[4].date}</span>
                    <span className="ml-2 px-2 py-0.5 bg-blue-500/80 rounded-full text-xs">
                      {holidays[4].country}
                    </span>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-1">{holidays[4].name}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{holidays[4].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第三行 */}
          <div className="md:col-span-6 h-80">
            <div className="group relative h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img 
                src={holidays[5].image}
                alt={holidays[5].name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-6 w-full">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{holidays[5].date}</span>
                    <span className="ml-2 px-2 py-0.5 bg-blue-500/80 rounded-full text-xs">
                      {holidays[5].country}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{holidays[5].name}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{holidays[5].description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 h-80">
            <div className="group relative h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img 
                src={holidays[0].image}
                alt={holidays[0].name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-6 w-full">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{holidays[0].date}</span>
                    <span className="ml-2 px-2 py-0.5 bg-blue-500/80 rounded-full text-xs">
                      {holidays[0].country}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{holidays[0].name}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{holidays[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition duration-300 inline-flex items-center">
            查看更多节日
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;