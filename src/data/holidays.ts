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
    description: '中国最重要的传统节日，象征着新的一年的开始。人们会贴春联、放鞭炮、吃团圆饭，还有舞龙舞狮等庆祝活动。',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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