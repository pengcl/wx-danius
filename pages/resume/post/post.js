// pages/resume/post/post.js
const resumeSvc = require('../../../utils/services.js');
const validator = require('../../../utils/validators.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // formData start
    // formData end
    validators: {},
    options: {
      registerType: [
        { name: '部队退伍兵', id: 1, checked: false },
        { name: '体育特长人才', id: 0, checked: false }
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
          id: 0,
          name: '北京'
        },
        {
          id: 1,
          name: '上海'
        },
        {
          id: 2,
          name: '广州'
        },
        {
          id: 3,
          name: '深圳'
        },
        {
          id: 4,
          name: '杭州'
        }
      ],
      movementType: [
        {
          id: 0,
          name: '武术'
        },
        {
          id: 1,
          name: '健身'
        },
        {
          id: 2,
          name: '运动康复'
        },
        {
          id: 3,
          name: '其他'
        }
      ],
      drivingLicence: [
        {
          id: 0,
          name: '无'
        },
        {
          id: 1,
          name: 'A1'
        },
        {
          id: 2,
          name: 'A2'
        },
        {
          id: 3,
          name: 'A3'
        },
        {
          id: 4,
          name: 'B1'
        },
        {
          id: 5,
          name: 'B2'
        },
        {
          id: 6,
          name: 'C1'
        },
        {
          id: 7,
          name: 'C2'
        }
      ],
      infections: [
        {
          id: 0,
          name: '身体健康,无传染性、精神性或其它器质性疾病'
        },
        {
          id: 1,
          name: '有传染性、精神性或其它器质性疾病'
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

  formChange: function (e) {
    console.log(e);
  },

  inputChange: function (e) {
    const validators = this.data.validators;
    const control = e.currentTarget.dataset;
    control.value = e.detail.value;
    validators[control.name] = validator.validate(control);
    this.setData({
      validators: validators
    });
    console.log(this.data.validators);
  },

  textareaChange: function (e) {
    this.setData({
      cursor: e.detail.cursor
    });
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
    const target = e.currentTarget;
    const data = {};

    if (target.dataset.mode === 'selector') {
      data[target.id] = this.data.options[target.id][parseInt(e.detail.value)];
    } else {
      data[target.id] = e.detail.value;
    }
    this.setData(data);
  },

  formSubmit: function (e) {
    console.log(e.detail.value);
    console.log(validator.validates(e));
    // resumeSvc.resume(e.detail.value);
  }
})