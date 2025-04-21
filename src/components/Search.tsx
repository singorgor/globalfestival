import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, ChevronDown, MapPin, Globe } from 'lucide-react';
import { continents } from '../data/continents';
import { holidays } from '../data/holidays';

const Search: React.FC = () => {
  const navigate = useNavigate();
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 根据选择的国家找到对应的节日
    const festival = holidays.find(h => {
      // 精确匹配国家
      if (h.country === selectedCountry) {
        return true;
      }
      // 处理"全球"节日
      if (h.country === '全球') {
        return true;
      }
      // 处理"西方国家"节日
      if (h.country === '西方国家' && 
          (selectedContinent === '欧洲' || selectedContinent === '北美洲')) {
        return true;
      }
      return false;
    });

    if (festival) {
      // 使用节日名称作为URL参数
      navigate(`/festival/${encodeURIComponent(festival.name)}`);
    } else {
      alert('抱歉，暂未收录该国家的节日信息');
    }
  };
  
  const getCountries = () => {
    const continent = continents.find(c => c.name === selectedContinent);
    return continent ? continent.countries : [];
  };

  return (
    <section id="search" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">查找全球节日信息</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            选择您感兴趣的地区和国家，探索丰富多彩的节日文化和风俗习惯，获取专业的节日问候指南。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form 
            onSubmit={handleSearch}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <label htmlFor="continent" className="block text-sm font-medium text-gray-700 mb-1">
                  选择你要了解的洲
                </label>
                <div 
                  className="relative"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center justify-between w-full p-3 border border-gray-300 rounded-lg cursor-pointer bg-white hover:border-blue-500 transition duration-300">
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-gray-500 mr-2" />
                      <span className={selectedContinent ? 'text-gray-800' : 'text-gray-500'}>
                        {selectedContinent || '选择洲'}
                      </span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </div>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {continents.map(continent => (
                        <div 
                          key={continent.name}
                          className="p-3 hover:bg-blue-50 cursor-pointer transition duration-150"
                          onClick={() => {
                            setSelectedContinent(continent.name);
                            setSelectedCountry('');
                            setIsDropdownOpen(false);
                          }}
                        >
                          {continent.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  选择国家
                </label>
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  disabled={!selectedContinent}
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-white disabled:bg-gray-100 disabled:text-gray-400"
                >
                  <option value="">选择国家</option>
                  {getCountries().map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="md:self-end">
                <button
                  type="submit"
                  disabled={!selectedContinent || !selectedCountry}
                  className="w-full md:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-lg font-medium transition duration-300 flex items-center justify-center"
                >
                  <SearchIcon className="w-5 h-5 mr-2" />
                  前往了解
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;