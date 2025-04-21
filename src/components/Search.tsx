import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, ChevronDown, MapPin, Globe, X } from 'lucide-react';
import { continents } from '../data/continents';
import { holidays } from '../data/holidays';

interface FestivalDialogProps {
  festivals: typeof holidays;
  onSelect: (festival: (typeof holidays)[0]) => void;
  onClose: () => void;
}

const FestivalDialog: React.FC<FestivalDialogProps> = ({ festivals, onSelect, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">选择节日</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-600 mb-4">该地区有多个节日信息，请选择您想了解的节日：</p>
        <div className="space-y-2">
          {festivals.map((festival, index) => (
            <button
              key={index}
              onClick={() => onSelect(festival)}
              className="w-full text-left p-3 rounded-lg hover:bg-blue-50 transition duration-150 flex items-center space-x-3"
            >
              <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm">
                {index + 1}
              </span>
              <div>
                <div className="font-medium text-gray-800">{festival.name}</div>
                <div className="text-sm text-gray-500">{festival.date}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Search: React.FC = () => {
  const navigate = useNavigate();
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showFestivalDialog, setShowFestivalDialog] = useState(false);
  const [availableFestivals, setAvailableFestivals] = useState<typeof holidays>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 查找所有匹配的节日
    const festivals = holidays.filter(h => {
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

    if (festivals.length > 0) {
      if (festivals.length === 1) {
        // 如果只有一个节日，直接跳转
        navigate(`/festival/${encodeURIComponent(festivals[0].name)}`);
      } else {
        // 如果有多个节日，显示选择对话框
        setAvailableFestivals(festivals);
        setShowFestivalDialog(true);
      }
    } else {
      alert('抱歉，暂未收录该国家的节日信息');
    }
  };

  const handleFestivalSelect = (festival: (typeof holidays)[0]) => {
    setShowFestivalDialog(false);
    navigate(`/festival/${encodeURIComponent(festival.name)}`);
  };
  
  const getCountries = () => {
    const continent = continents.find(c => c.name === selectedContinent);
    return continent ? continent.countries : [];
  };

  // 获取某个国家可用的节日数量
  const getCountryFestivalsCount = (country: string) => {
    return holidays.filter(h => 
      h.country === country || 
      h.country === '全球' || 
      (h.country === '西方国家' && (selectedContinent === '欧洲' || selectedContinent === '北美洲'))
    ).length;
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
                  {getCountries().map(country => {
                    const festivalsCount = getCountryFestivalsCount(country);
                    return (
                      <option key={country} value={country}>
                        {country} {festivalsCount > 0 ? `(${festivalsCount}个节日)` : ''}
                      </option>
                    );
                  })}
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

      {/* 节日选择对话框 */}
      {showFestivalDialog && (
        <FestivalDialog
          festivals={availableFestivals}
          onSelect={handleFestivalSelect}
          onClose={() => setShowFestivalDialog(false)}
        />
      )}
    </section>
  );
};

export default Search;