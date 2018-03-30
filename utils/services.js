const CONFIG = require('../utils/config.js');
const utils = require('../utils/util.js');
module.exports = {
  resume: (body) => {
    const prams = utils.formDataToUrl(body);
    wx.request({
      url: CONFIG.prefix.wApi + '/interface/comm/installRegistration.ht' + prams,
      data: '',
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        return res
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
}
