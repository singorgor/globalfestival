import React from 'react';
import { Calendar, Globe, Gift, MessageCircle, PenTool, LanguagesIcon } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: '全球节日数据库',
      description: '收录世界各国的重要节日信息，包括日期、历史背景、文化意义等，帮助您轻松了解全球节庆文化。'
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: '节日风俗指南',
      description: '详细介绍各个节日的传统习俗、庆祝方式、禁忌事项等，助您避免文化冲突，更好地融入当地氛围。'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: '专业祝福文案',
      description: '提供符合不同节日文化特点的祝福语和问候文案，让您的祝福更加专业、得体、富有文化内涵。'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '全球文化视角',
      description: '从全球视角展示节日的多元文化背景，帮助您建立跨文化理解和尊重，拓展国际化视野。'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: '定制化内容',
      description: '根据您的需求和场景，提供个性化的节日资讯和祝福文案，满足不同用户的特定需求。'
    },
    {
      icon: <LanguagesIcon className="w-6 h-6" />,
      title: '多语言支持',
      description: '支持多种语言界面和内容，消除语言障碍，为全球用户提供便捷的节日文化咨询服务。'
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">关于功能的介绍</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            FestiGlobe 提供全面的节日文化信息和专业的祝福文案服务，帮助您更好地了解和尊重全球文化多样性。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;