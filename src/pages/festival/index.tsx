import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Globe, BookOpen, Image as ImageIcon, ArrowLeft, Share2, Heart } from 'lucide-react';
import { holidays } from '../../data/holidays';
import ImagePreview from './ImagePreview';
import './styles.css';

interface FestivalDetailProps {
  id?: string;
}

// 相关节日卡片组件
const RelatedFestivalCard: React.FC<{
  festival: typeof holidays[0];
  isActive: boolean;
  onClick: () => void;
}> = ({ festival, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md ${
      isActive 
        ? 'bg-blue-50 border-2 border-blue-500' 
        : 'bg-white border border-gray-200 hover:border-blue-300'
    }`}
  >
    <div className="flex items-center space-x-3">
      <div className="w-20 h-20 rounded-lg overflow-hidden">
        <img 
          src={festival.image} 
          alt={festival.name}
          className="w-full h-full object-cover transform transition-transform hover:scale-110"
        />
      </div>
      <div className="flex-1">
        <h3 className={`font-medium ${isActive ? 'text-blue-600' : 'text-gray-800'} text-lg mb-1`}>
          {festival.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{festival.date}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{festival.description}</p>
      </div>
    </div>
  </div>
);

const FestivalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [festivalData, setFestivalData] = useState<any>(null);
  const [relatedFestivals, setRelatedFestivals] = useState<typeof holidays>([]);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchFestivalData = () => {
      try {
        setLoading(true);
        setError(null);
        
        // 模拟API调用
        setTimeout(() => {
          const festival = holidays.find(h => h.name === decodeURIComponent(id || ''));
          if (festival) {
            // 查找同一国家的其他节日
            const countryFestivals = holidays.filter(h => 
              (h.country === festival.country || h.country === '全球') && 
              h.name !== festival.name
            );

            // 扩展节日数据
            setFestivalData({
              ...festival,
              id: id,
              traditions: [
                '传统习俗 1',
                '传统习俗 2',
                '传统习俗 3',
                '传统习俗 4',
                '传统习俗 5'
              ],
              images: [festival.image, festival.image] // 临时使用同一张图片两次
            });

            setRelatedFestivals(countryFestivals);
          } else {
            setError('未找到该节日信息');
          }
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('获取节日信息失败');
        setLoading(false);
      }
    };

    fetchFestivalData();
  }, [id]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: festivalData.name,
          text: festivalData.description,
          url: window.location.href,
        });
      } else {
        // 如果不支持原生分享，复制链接到剪贴板
        await navigator.clipboard.writeText(window.location.href);
        alert('链接已复制到剪贴板');
      }
    } catch (error) {
      console.error('分享失败:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  if (error || !festivalData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">😕</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{error || '出错了'}</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-600 flex items-center justify-center mx-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部信息区 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800 flex items-center mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            返回首页
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{festivalData.name}</h1>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <span>{festivalData.country}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{festivalData.date}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart className="w-6 h-6" fill={isLiked ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors"
              >
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧主要内容 */}
          <div className="lg:col-span-2">
            {/* 描述部分 */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                节日描述
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {festivalData.description}
              </p>
            </div>

            {/* 图片展示 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <ImageIcon className="w-5 h-5 mr-2" />
                节日图片
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {festivalData.images?.map((image: string, index: number) => (
                  <div 
                    key={index} 
                    className="aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setShowImagePreview(true);
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`${festivalData.name} - ${index + 1}`}
                      className="w-full h-full object-cover festival-image group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="lg:col-span-1">
            {/* 相关节日 */}
            {relatedFestivals.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {festivalData.country === '全球' ? '其他全球节日' : `${festivalData.country}的其他节日`}
                </h2>
                <div className="space-y-4">
                  {relatedFestivals.map((festival, index) => (
                    <RelatedFestivalCard
                      key={index}
                      festival={festival}
                      isActive={false}
                      onClick={() => navigate(`/festival/${encodeURIComponent(festival.name)}`)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 传统习俗 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">传统习俗</h2>
              <ul className="space-y-3">
                {festivalData.traditions.map((tradition: string, index: number) => (
                  <li 
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{tradition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 图片预览模态框 */}
      {showImagePreview && (
        <ImagePreview
          images={festivalData.images}
          currentIndex={currentImageIndex}
          onClose={() => setShowImagePreview(false)}
          onPrev={() => setCurrentImageIndex(prev => Math.max(0, prev - 1))}
          onNext={() => setCurrentImageIndex(prev => Math.min(festivalData.images.length - 1, prev + 1))}
        />
      )}
    </div>
  );
};

export default FestivalDetail; 