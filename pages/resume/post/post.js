// pages/resume/post/post.js
const services = [
  [
    {
      text: '步兵',
      value: '步兵'
    },
    {
      text: '侦察兵',
      value: '侦察兵'
    },
    {
      text: '装甲兵',
      value: '装甲兵'
    },
    {
      text: '炮兵',
      value: '炮兵'
    },
    {
      text: '防空兵',
      value: '防空兵'
    },
    {
      text: '陆军航空兵',
      value: '陆军航空兵'
    },
    {
      text: '工程兵',
      value: '工程兵'
    },
    {
      text: '通信兵',
      value: '通信兵'
    },
    {
      text: '防化兵',
      value: '防化兵'
    },
    {
      text: '电子对抗兵',
      value: '电子对抗兵'
    },
    {
      text: '特种兵',
      value: '特种兵'
    }
  ],
  [
    {
      text: '水面舰艇部队',
      value: '水面舰艇部队'
    },
    {
      text: '潜艇部队',
      value: '潜艇部队'
    },
    {
      text: '海军航空兵',
      value: '海军航空兵'
    },
    {
      text: '海军岸防部队',
      value: '海军岸防部队'
    },
    {
      text: '海军陆战队',
      value: '海军陆战队'
    }
  ],
  [
    {
      text: '空军航空兵',
      value: '空军航空兵'
    },
    {
      text: '地空导弹兵',
      value: '地空导弹兵'
    },
    {
      text: '高射炮兵',
      value: '高射炮兵'
    },
    {
      text: '雷达兵',
      value: '雷达兵'
    },
    {
      text: '电子对抗兵',
      value: '电子对抗兵'
    },
    {
      text: '空降兵',
      value: '空降兵'
    }
  ],
  [
    {
      text: '导弹兵',
      value: '导弹兵'
    },
    {
      text: '其它保障部队',
      value: '其它保障部队'
    }
  ],
  [
    {
      text: '网络部队',
      value: '网络部队'
    },
    {
      text: '航天部队',
      value: '航天部队'
    },
    {
      text: '保障部队',
      value: '保障部队'
    }
  ],
  [
    {
      text: '内卫部队',
      value: '内卫部队'
    },
    {
      text: '警卫部队',
      value: '警卫部队'
    },
    {
      text: '边防部队',
      value: '边防部队'
    },
    {
      text: '消防部队',
      value: '消防部队'
    },
    {
      text: '黄金部队',
      value: '黄金部队'
    },
    {
      text: '水电部队',
      value: '水电部队'
    },
    {
      text: '交通部队',
      value: '交通部队'
    },
    {
      text: '森林部队',
      value: '森林部队'
    }
  ]
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // formData start
    registerType: undefined,
    name: '',
    sex: '',
    mobile: '',
    services: [],
    options: {
      registerType: [
        { name: '部队退伍兵', value: '1', checked: false },
        { name: '体育特长人才', value: '0', checked: false }
      ],
      sex: [
        { id: 0, name: '女' },
        { id: 1, name: '男' }
      ],
      politicalClimate: [
        {
          id: 0,
          name: '群众'
        },
        {
          id: 2,
          name: '共青团员'
        },
        {
          id: 1,
          name: '共产党员(含预备)'
        },
        {
          id: 3,
          name: '民主党派'
        },
        {
          id: 4,
          name: '无党派人士'
        }
      ],
      education: [
        {
          name: '初中',
          id: 0
        },
        {
          name: '高中',
          id: 1
        },
        {
          name: '中专',
          id: 2
        },
        {
          name: '大专',
          id: 3
        },
        {
          name: '本科',
          id: 4
        },
        {
          name: '硕士',
          id: 5
        },
        {
          name: '博士',
          id: 6
        },
        {
          name: 'MBA',
          id: 7
        },
        {
          name: 'EMBA',
          id: 8
        },
        {
          name: '其它',
          id: 9
        }
      ],
      serverCity: [
        {
          id: '北京',
          name: '北京'
        },
        {
          id: '上海',
          name: '上海'
        },
        {
          id: '广州',
          name: '广州'
        },
        {
          id: '深圳',
          name: '深圳'
        },
        {
          id: '杭州',
          name: '杭州'
        }
      ],
      movementType: [
        {
          id: '武术',
          name: '武术'
        },
        {
          id: '健身',
          name: '健身'
        },
        {
          id: '运动康复',
          name: '运动康复'
        },
        {
          id: '其他',
          name: '其他'
        }
      ],
      armyType: [
        {
          text: '陆军',
          value: '0'
        },
        {
          text: '海军',
          value: '1'
        },
        {
          text: '空军',
          value: '2'
        },
        {
          text: '火箭军',
          value: '3'
        },
        {
          text: '战略支援部队',
          value: '4'
        },
        {
          text: '武装警察',
          value: '5'
        }
      ],
      services: [
        {
          text: '步兵',
          value: '步兵'
        },
        {
          text: '侦察兵',
          value: '侦察兵'
        },
        {
          text: '装甲兵',
          value: '装甲兵'
        },
        {
          text: '炮兵',
          value: '炮兵'
        },
        {
          text: '防空兵',
          value: '防空兵'
        },
        {
          text: '陆军航空兵',
          value: '陆军航空兵'
        },
        {
          text: '工程兵',
          value: '工程兵'
        },
        {
          text: '通信兵',
          value: '通信兵'
        },
        {
          text: '防化兵',
          value: '防化兵'
        },
        {
          text: '电子对抗兵',
          value: '电子对抗兵'
        },
        {
          text: '特种兵',
          value: '特种兵'
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e);
    this.setData({
      registerType: e.detail.value
    });
    console.log(this.data);
    /*
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
    */
  },
  bindPickerChange: function (e) {
    console.log(e);
    const target = e.currentTarget.id;
    const data = {};
    data[target] = e.detail.value;
    this.setData(data);
    console.log(this.data);
  },

  bindServicesPickerChange: function (e) {
    console.log(e);
    const target = e.currentTarget.id;
    const data = {};
    data[target] = e.detail.value;
    this.setData({ options: { services } });
    console.log(this.data);
  },

  formSubmit: function (e) {
    console.log(e);
  }
})