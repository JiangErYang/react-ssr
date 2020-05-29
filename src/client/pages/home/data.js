const placePic = {
  smallPic: 'https://placekitten.com/180/120',
  threePic: 'https://placekitten.com/170/120',
  bigPic: 'https://placekitten.com/630/315',
  videoPic: 'https://placekitten.com/600/310',
  avatarPic: 'https://placekitten.com/100/100'
};

export const channelList = [
  { id: 1, name: '推荐', include: true }, { id: 2, name: '热点', include: true }, { id: 3, name: '社会' }, { id: 4, name: '娱乐' },
  { id: 5, name: '科技', include: true }, { id: 6, name: '汽车', include: true }, { id: 7, name: '体育' }, { id: 8, name: '财经' },
  { id: 9, name: '军事', include: true }, { id: 10, name: '时尚', include: true }, { id: 11, name: '游戏' }, { id: 12, name: '国际' },
  { id: 13, name: '旅游' }, { id: 14, name: '历史' }, { id: 15, name: '探索' }, { id: 16, name: '美食' },
  { id: 17, name: '育儿' }, { id: 18, name: '养生' }, { id: 19, name: '故事' }, { id: 20, name: '美文' }
];

export const homeFlowList = [
  {
    id: '6815573013170225671',
    title: '习近平：团结合作是国际社会战胜疫情最有力武器',
    publishTime: '3天前',
    commentNum: '1597万',
    feedType: 'bigpic',
    pics: [],
    author: {
      name: '中央新闻网',
      avatar: placePic.avatarPic,
      label: '中央新闻网官方账号',
      vip: true
    },
    isTop: true,
  },
  {
    id: '6815586582116958734',
    title: '人民日报：特殊时期最宝贵的是人民生命财产保护',
    publishTime: '12小时前',
    commentNum: '899万',
    feedType: 'bigpic',
    pics: [],
    author: {
      name: '人民日报',
      avatar: placePic.avatarPic,
      label: '人民日报官方账号',
      vip: true
    },
    isTop: true,
  },
  {
    id: '6816866417774690824',
    title: '武汉订正确诊和死亡病例数 世卫表态',
    publishTime: '1分钟前',
    commentNum: '1.0万',
    feedType: 'smallpic',
    pics: [placePic.smallPic],
    author: {
      name: '中国网',
      avatar: placePic.avatarPic,
      label: '中国网官方账号',
      vip: true
    },
    isHot: true,
  },
  {
    id: '6780199724038225934',
    title: '你愿意为知识付费吗？36氪让一部分人先看到未来',
    publishTime: '1分钟前',
    commentNum: 0,
    feedType: 'smallpic',
    adLink: 'https://36kr.com',
    pics: [placePic.smallPic],
    author: {
      name: '36氪',
      avatar: placePic.avatarPic,
      label: '36氪官方头疼号',
      vip: true
    },
    isAd: true,
  },
  {
    id: '6816548336091267588',
    title: '恒大足球场造型引发热议，网友：也太过分了！',
    publishTime: '2分钟前',
    commentNum: '1701',
    feedType: 'smallpic',
    pics: [placePic.smallPic],
    author: {
      name: '中国商网',
      avatar: placePic.avatarPic,
      label: '中国商网官方账号',
      vip: true
    },
  },
  {
    id: '6816953423997436427',
    title: '比起道貌岸然的吴秀波,"装"了23年的李晨,说崩就崩的人生模仿不来',
    publishTime: '2分钟前',
    commentNum: '899',
    feedType: 'smallpic',
    pics: [placePic.smallPic],
    author: {
      name: '八卦娱乐我最星',
      avatar: placePic.avatarPic,
      label: '娱乐领域创作者',
    },
  },
  {
    id: '6815583319925719560',
    title: '林郑月娥：立法会部分议员恶意“拉布”铁证如山不容抵赖',
    publishTime: '3分钟前',
    commentNum: 888,
    feedType: 'bigpic',
    pics: [],
    author: {
      name: '新华网客户端',
      avatar: placePic.avatarPic,
      label: '新华网官方账号',
      vip: true
    },
  },
  {
    id: '6815612142201340430',
    title: '中国抗疫图鉴（完整版）',
    publishTime: '4分钟前',
    commentNum: 29898,
    feedType: 'threepic',
    pics: [placePic.threePic, placePic.threePic, placePic.threePic],
    author: {
      name: '人民日报',
      avatar: placePic.avatarPic,
      label: '人民日报官方账号',
      vip: true
    },
    isHot: true,
  },
  {
    id: '6805823214321664515',
    title: '伊拉克战争，为何萨达姆放着800架战机不用？这是他真正聪明之处',
    publishTime: '8分钟前',
    commentNum: 122,
    feedType: 'smallpic',
    pics: [placePic.smallPic],
    author: {
      name: '央视网新闻',
      avatar: placePic.avatarPic,
      label: '央视网新闻官方账号',
      vip: true
    },
    showHead: true,
  },
  {
    id: '6815362200710939149',
    title: '26家！美国紧急授权KN95口罩，这些上市公司拿到出口通行证',
    publishTime: '18分钟前',
    commentNum: 3090,
    feedType: 'smallpic',
    pics: [placePic.smallPic],
    author: {
      name: '中国经济网',
      avatar: placePic.avatarPic,
      label: '中国经济网官方账号',
      vip: true
    },
  },
  {
    id: '6815537455467332103',
    title: '数字货币落地，对我们的生活有什么影响？',
    publishTime: '19分钟前',
    commentNum: 301,
    feedType: 'feedvideo',
    duration: '04:49',
    pics: [placePic.videoPic],
    author: {
      name: '烦立停',
      avatar: placePic.avatarPic,
      label: '优质视频作者',
      vip: true
    },
    showHead: true,
  },
  {
    id: '6815902084869653004',
    title: '奥巴马宣布支持美民主党总统竞选人拜登',
    publishTime: '2天前',
    commentNum: 1888,
    feedType: 'bigpic',
    pics: [placePic.bigPic],
    author: {
      name: '中国新闻网',
      avatar: placePic.avatarPic,
      label: '中国新闻网官方账号',
      vip: true,
      friend: true
    },
    showHead: true,
  },
  {
    id: '6813595080142619144',
    title: '摸金校尉、尸香魔芋、黑驴蹄子...《鬼吹灯》这些“专业词汇”来自哪里？',
    publishTime: '04-12 22:50',
    commentNum: 38800,
    feedType: 'threepic',
    pics: [placePic.threePic, placePic.threePic, placePic.threePic],
    author: {
      name: '三联生活周刊',
      avatar: placePic.avatarPic,
      label: '优质自媒体',
      vip: true
    },
  },
  {
    id: '6814744443728462350',
    title: '在抖音不仅仅看短视频哦，快和全世界一起抖起来吧',
    publishTime: '04-15 22:58',
    commentNum: 0,
    feedType: 'bigpic',
    pics: [placePic.bigPic],
    author: {
      name: '抖音',
      avatar: placePic.avatarPic,
      label: '抖音短视频头疼号',
      vip: true,
    },
    adLink: 'https://www.douyin.com/',
    isAd: true,
    showHead: true,
  },
  {
    id: '6816944419342647822',
    title: '特朗普：解放明尼苏达州！解放密歇根州！解放弗吉尼亚州！',
    publishTime: '04-15 22:50',
    commentNum: 3,
    feedType: 'smallpic',
    pics: [placePic.smallPic],
    author: {
      name: '环球日报',
      avatar: placePic.avatarPic,
      label: '环球日报App',
      vip: true
    },
  },
];

export const messageList = [
  {
    id: '1',
    originMessage: '你这个纯用来哄不懂事的甲方😭',
    messageTime: '22:20',
    messageType: 'reply',
    replyInfo: '跟他聊一下邓亚萍',
    user: {
      name: '用户4046678566934',
      avatar: placePic.avatarPic,
      isVip: false
    }
  },
  {
    id: '2',
    originMessage: '你这个纯用来哄不懂事的甲方😭',
    messageTime: '21:58',
    messageType: 'like',
    otherLike: 2,
    user: {
      name: '流泪风云',
      avatar: placePic.avatarPic
    }
  },
  {
    id: '3',
    originMessage: '你这个纯用来哄不懂事的甲方😭',
    messageTime: '04-19',
    messageType: 'reply',
    replyInfo: '预算1000的甲方不会懂事的😂',
    user: {
      name: '豆本逗',
      avatar: placePic.avatarPic,
      label: '信息技术公司项目经理 优质职场创作者',
      isVip: true
    }
  },
  {
    id: '4',
    originMessage: '你这个纯用来哄不懂事的甲方😭',
    messageTime: '04-19',
    messageType: 'reply',
    replyInfo: '能说1000预算，做个搜索引擎的，你觉得他懂事？',
    user: {
      name: '黄大大真大',
      avatar: placePic.avatarPic,
    }
  },
  {
    id: '5',
    originMessage: '@戆巴子他大爷2468，你不要跑，三斤新鲜冒气的💩已为你准备好，开吃吧',
    messageTime: '04-11',
    messageType: 'like',
    otherLike: '379万',
    user: {
      name: '鸿儿哥哥',
      avatar: placePic.avatarPic,
      label: '优质科技领域创作者',
      isVip: true
    }
  },
  {
    id: '6',
    originMessage: '我非常头疼，我要中奖！！！',
    messageTime: '04-10',
    messageType: 'reply',
    replyInfo: '恭喜你，您获得4月8日抽奖的特等奖，奖励三头蒙牛纯天然奶牛。请于3日内自行提取，过期视为自动放弃领奖资格。',
    user: {
      name: '头疼抽奖',
      avatar: placePic.avatarPic,
      label: '今日头疼官方抽奖平台',
      isVip: true
    }
  },
  {
    id: '7',
    originMessage: '我非常头疼，我要中奖！！！',
    messageTime: '04-10',
    messageType: 'reply',
    replyInfo: '劳资从来就不信能中奖，你如果中了我立即吃翔3斤！',
    user: {
      name: '戆巴子他大爷2468',
      avatar: placePic.avatarPic,
    }
  },
  {
    id: '8',
    originMessage: '我非常头疼，我要中奖！！！',
    messageTime: '04-11',
    messageType: 'like',
    otherLike: '14',
    user: {
      name: '纽扣系反了',
      avatar: placePic.avatarPic
    }
  },
];