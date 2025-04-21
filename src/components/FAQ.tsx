import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: '这个网站可以查询哪些国家的节日信息？',
      answer: '我们的数据库覆盖全球200多个国家和地区的节日信息，包括主要的国家法定节假日、传统节日、宗教节日等，您可以查询几乎所有国家的重要节日。'
    },
    {
      question: '如何使用这个网站查找特定国家的节日？',
      answer: '您可以在首页的搜索区域中，先选择您感兴趣的洲，然后从下拉菜单中选择具体的国家，点击"前往了解"按钮即可查看该国的节日信息。'
    },
    {
      question: '除了节日日期，还能了解到哪些信息？',
      answer: '除了节日的具体日期，我们还提供节日的历史背景、文化意义、传统习俗、庆祝方式、禁忌事项以及适合的祝福文案等全方位信息。'
    },
    {
      question: '网站的信息是否会定期更新？',
      answer: '是的，我们的团队会定期更新和核实节日信息，特别是对于浮动日期的节日（如农历节日、宗教节日等），我们会根据每年的实际情况进行更新。'
    },
    {
      question: '我可以为网站贡献我所了解的节日信息吗？',
      answer: '当然可以！我们欢迎用户分享自己国家或了解的其他国家的节日信息。您可以通过网站的"贡献信息"页面提交相关内容，经我们审核后会添加到数据库中。'
    },
    {
      question: '网站的祝福文案可以直接用于商业用途吗？',
      answer: '我们提供的基础祝福文案可以用于个人和商业用途。但如果是大规模商业使用或需要定制化的专业文案，建议联系我们的专业团队获取更多支持。'
    }
  ];
  
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">常见问题</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们收集了用户最常问的一些问题及答案，希望能帮助您更好地使用我们的服务。
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full flex items-center justify-between p-5 rounded-lg text-left ${
                  openIndex === index ? 'bg-blue-50 text-blue-700' : 'bg-white hover:bg-gray-50 text-gray-800'
                } transition duration-300 shadow-sm`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="bg-white p-5 border border-gray-100 rounded-b-lg mt-[-5px] shadow-sm">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;