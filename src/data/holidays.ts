export interface Holiday {
  name: string;
  date: string;
  country: string;
  description: string;
  image: string;
}

export const holidays: Holiday[] = [
  {
    name: '春节',
    date: '农历正月初一',
    country: '中国',
    description: '春节是中国最重要的传统节日，象征着新的一年的开始。人们会贴春联、放鞭炮、吃团圆饭，还有舞龙舞狮等庆祝活动。这个节日承载着中国人对家庭团圆的深厚情感。',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '中秋节',
    date: '农历八月十五',
    country: '中国',
    description: '中秋节是中国传统的团圆节日，象征着家人团聚。人们会赏月、吃月饼、猜灯谜。传说嫦娥奔月的故事更为这个节日增添了浪漫色彩。',
    image: 'https://images.pexels.com/photos/6147708/pexels-photo-6147708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '端午节',
    date: '农历五月初五',
    country: '中国',
    description: '端午节是纪念屈原的传统节日，人们会吃粽子、赛龙舟。这一天人们还会佩戴香囊、艾草，以驱邪避灾，祈求平安健康。',
    image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '元宵节',
    date: '农历正月十五',
    country: '中国',
    description: '元宵节是春节后的第一个重要节日，又称上元节。这天人们会赏花灯、吃元宵、猜灯谜，是一个充满欢乐的节日。',
    image: 'https://images.pexels.com/photos/7789846/pexels-photo-7789846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '清明节',
    date: '公历4月5日前后',
    country: '中国',
    description: '清明节是中国传统的祭祖节日，也是踏青郊游的好时节。人们会扫墓祭祖、放风筝，表达对先人的追思之情。',
    image: 'https://images.pexels.com/photos/1891882/pexels-photo-1891882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '感恩节',
    date: '11月第四个星期四',
    country: '美国',
    description: '美国重要的家庭节日，人们会聚在一起享用感恩节大餐，表达对生活的感恩之情。火鸡是传统的节日食物。',
    image: 'https://images.pexels.com/photos/8259717/pexels-photo-8259717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '排灯节',
    date: '印度历阿斯文月',
    country: '印度',
    description: '印度光明节，庆祝光明战胜黑暗，人们会点燃油灯和蜡烛，家家户户灯火通明，象征着希望和新生。',
    image: 'https://images.pexels.com/photos/2902326/pexels-photo-2902326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '圣诞节',
    date: '12月25日',
    country: '全球',
    description: '纪念耶稣基督诞生的重要节日，全球许多国家都会庆祝。人们会装饰圣诞树、交换礼物、享用丰盛的圣诞大餐。',
    image: 'https://images.pexels.com/photos/1708601/pexels-photo-1708601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '巴西狂欢节',
    date: '复活节前的40天',
    country: '巴西',
    description: '世界上最大的狂欢节，里约热内卢的狂欢节最为著名。充满了桑巴舞、华丽的游行和五彩缤纷的服装。',
    image: 'https://images.pexels.com/photos/5755053/pexels-photo-5755053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '万圣节',
    date: '10月31日',
    country: '西方国家',
    description: '源于古凯尔特人的传统，现在成为一个充满乐趣的节日。孩子们会装扮成各种角色去要糖果，大人们则参加化妆派对。',
    image: 'https://images.pexels.com/photos/3152977/pexels-photo-3152977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];