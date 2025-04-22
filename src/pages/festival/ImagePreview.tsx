import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      {/* 图片容器 */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* 上一张按钮 */}
        {currentIndex > 0 && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-2 transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* 图片 */}
        <img
          src={images[currentIndex]}
          alt={`预览图片 ${currentIndex + 1}`}
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />

        {/* 下一张按钮 */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-2 transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* 图片计数器 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview; 