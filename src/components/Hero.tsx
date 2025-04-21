import React from 'react';
import { Calendar, Gift, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              发现全球节日文化<br />
              <span className="text-blue-500">创建完美祝福</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              FestiGlobe 帮助您了解全球各地的重大节假日、风俗习惯，并为您提供适合各种场合的专业祝福文案。
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a 
                href="#search" 
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300 flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                开始探索
              </a>
              <a 
                href="#features" 
                className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-700 rounded-lg font-medium border border-gray-300 transition duration-300 flex items-center"
              >
                了解更多
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="全球节日庆典" 
              className="rounded-lg shadow-lg max-w-full h-auto w-full md:w-4/5 lg:w-full object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">了解各国传统节日</h3>
            <p className="text-gray-600">探索世界各地的重要节日、历史背景和传统习俗，拓展您的文化视野。</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">熟悉节日习俗</h3>
            <p className="text-gray-600">深入了解不同国家节日期间的礼仪、活动和特色庆祝方式，避免文化冲突。</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">教你如何得体问候</h3>
            <p className="text-gray-600">获取适合不同节日和文化背景的专业祝福语和问候文案，增强您的跨文化沟通能力。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;