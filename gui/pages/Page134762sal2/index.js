Page({
  data: {
    zhiwei: '',
    suoshubumen: '',
    jigoumingcheng: '',
    jigouID: '',
    yonghuming: '',
    jigouorgCode: '',
    quanjudizhi: 'http://36.152.205.254:52007/',
    shifoushouquandenglu: false,
    token: '',
    variable_tuichudengluAPIdefanhuijieguo: {},
    variable_textOfXText98: '--',
    variable_textOfXText97: '--',
    variable_srcOfXImage88: '',
    variable_fanhuiyonghuxinxiduixiang: { realName: '', orgCode: '', avatar: '' },
    variable_weixincode: '',
    variable_huoqudengluAPIdefanhuijieguo: {},
    variable_vifOfXButton92: false,
    variable_huoqushouquanqingqiu: {},
    variable_kongduixiang: {},
    variable_huoqudengluxinxi: {},
    variable_yonghuxinxiduixiang: {},
    variable_srcOfXImage83: '//s2-cdn.oneitfarm.com/FqEjhsttWjWgUQ1ZHdZCehVCwIkY',
    variable_vifOfXView61: true,
  },
  properties: {},

  onShow() {
    this.method_chushihua();
  },

  onLoad(options) {
    try {
      if (options.params) {
        const $route_params = JSON.parse(decodeURIComponent(options.params));
        this.data.$route_params = $route_params;
        this.setData({
          $route_params: $route_params,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXView63: async function () {
    const _this = this;

    this.data['variable_tuichudengluAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + '/park/user/logout',

          header: {
            Authorization: getApp().gui_global_data['token'],
          },
          timeout: 5000,
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: (result) => {
            resolve(result);
          },
          fail: (error) => {
            reject(error);
          },
        });
      });
    })();
    console.log('打印退出登陆API', this.data['variable_tuichudengluAPIdefanhuijieguo']);
    getApp().gui_global_data['shifoushouquandenglu'] = false;
    getApp().gui_global_data['token'] = '';
    this.data['variable_srcOfXImage88'] = '';
    this.data['variable_textOfXText97'] = '--';
    this.data['variable_textOfXText98'] = '--';
    this.setData({
      ['variable_srcOfXImage88']: this.data['variable_srcOfXImage88'],
      ['variable_textOfXText97']: this.data['variable_textOfXText97'],
      ['variable_textOfXText98']: this.data['variable_textOfXText98'],
    });
    await wx.navigateTo({
      url: (function (p, baseUrl) {
        let resultUrl = '';
        const querystringArr = [];
        try {
          if (typeof p === 'object') {
            try {
              const json = JSON.stringify(p);
              if (json.length) {
                resultUrl = `${baseUrl}?params=${encodeURIComponent(json)}`;
              } else {
                resultUrl = baseUrl;
              }
            } catch (error) {
              resultUrl = baseUrl;
            }
          } else {
            resultUrl = baseUrl;
          }
        } catch (error) {
          resultUrl = baseUrl;
        }
        return resultUrl;
      })('', '/gui/pages/Page147344sal2/index'),
    });
  },
  method_onTapOfXButton100: function () {
    const _this = this;
  },
  method_onTapOfXButton92: async function () {
    const _this = this;

    await wx.navigateTo({
      url: (function (p, baseUrl) {
        let resultUrl = '';
        const querystringArr = [];
        try {
          if (typeof p === 'object') {
            try {
              const json = JSON.stringify(p);
              if (json.length) {
                resultUrl = `${baseUrl}?params=${encodeURIComponent(json)}`;
              } else {
                resultUrl = baseUrl;
              }
            } catch (error) {
              resultUrl = baseUrl;
            }
          } else {
            resultUrl = baseUrl;
          }
        } catch (error) {
          resultUrl = baseUrl;
        }
        return resultUrl;
      })('', '/gui/pages/Page147344sal2/index'),
    });
  },
  method_chushihua: async function () {
    const _this = this;

    if (JSON.parse(getApp().gui_global_data['shifoushouquandenglu']) == false) {
      this.method_onTapOfXButton92();
    } else {
      if (getApp().gui_global_data['token'] == '') {
        console.log('token为空进行打印', getApp().gui_global_data['token']);
      }
      this.data['variable_huoqudengluxinxi'] = await wx.login(this.data['variable_kongduixiang']);
      this.data['variable_weixincode'] = this.data['variable_huoqudengluxinxi']['code'];
      console.log('打印微信code', this.data['variable_weixincode']);
      this.method_onTapOfXView6();
    }
  },
  method_onTapOfXView6: async function () {
    const _this = this;

    let variable_linshiyonghuxinxiduixiang = {};
    console.log('打印一次请求', getApp().gui_global_data['quanjudizhi']);
    this.data['variable_huoqudengluAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + 'park/user/weChatLogin',

          data: {
            code: this.data['variable_weixincode'],
          },
          header: {},
          timeout: 5000,
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: (result) => {
            resolve(result);
          },
          fail: (error) => {
            reject(error);
          },
        });
      });
    })();
    if (this.data['variable_huoqudengluAPIdefanhuijieguo']['statusCode'] == 200) {
      getApp().gui_global_data['token'] = this.data['variable_huoqudengluAPIdefanhuijieguo']['data']['data']['token'];
      variable_linshiyonghuxinxiduixiang = this.data['variable_huoqudengluAPIdefanhuijieguo']['data']['data'][
        'sysUser'
      ];
      if (this.data['variable_huoqudengluAPIdefanhuijieguo']['data']['data']['sysUser']['realName'] != undefined) {
        this.data['variable_fanhuiyonghuxinxiduixiang']['realName'] = this.data[
          'variable_huoqudengluAPIdefanhuijieguo'
        ]['data']['data']['sysUser']['realName'];
      } else {
        this.data['variable_fanhuiyonghuxinxiduixiang']['realName'] = '--';
      }
      if (this.data['variable_huoqudengluAPIdefanhuijieguo']['data']['data']['sysUser']['userName'] != undefined) {
        getApp().gui_global_data['yonghuming'] = this.data['variable_huoqudengluAPIdefanhuijieguo']['data']['data'][
          'sysUser'
        ]['userName'];
      } else {
        getApp().gui_global_data['yonghuming'] = '--';
      }
      if (this.data['variable_huoqudengluAPIdefanhuijieguo']['data']['data']['sysUser']['openId'] != undefined) {
        getApp().gui_global_data['jigouorgCode'] = variable_linshiyonghuxinxiduixiang['openId'];
      } else {
        getApp().gui_global_data['jigouorgCode'] = '--';
      }
      if (this.data['variable_huoqudengluAPIdefanhuijieguo']['data']['data']['sysUser']['orgCode'] != undefined) {
        this.data['variable_fanhuiyonghuxinxiduixiang']['orgCode'] = variable_linshiyonghuxinxiduixiang['orgCode'];
      } else {
        this.data['variable_fanhuiyonghuxinxiduixiang']['orgCode'] = '--';
      }
      if (this.data['variable_huoqudengluAPIdefanhuijieguo']['data']['data']['sysUser']['avatar'] != undefined) {
        this.data['variable_fanhuiyonghuxinxiduixiang']['avatar'] = variable_linshiyonghuxinxiduixiang['avatar'];
      } else {
        this.data['variable_fanhuiyonghuxinxiduixiang']['avatar'] =
          'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132';
      }

      this.setData({
        ['variable_textOfXText97']: this.data['variable_fanhuiyonghuxinxiduixiang']['realName'],
        ['variable_textOfXText98']: this.data['variable_fanhuiyonghuxinxiduixiang']['orgCode'],
        ['variable_srcOfXImage88']: this.data['variable_fanhuiyonghuxinxiduixiang']['avatar'],
      });
    }
    console.log('API返回结果', this.data['variable_huoqudengluAPIdefanhuijieguo']['data']);
    console.log('打印token', getApp().gui_global_data['token']);
  },
  method_onTapOfXView62: function () {
    const _this = this;
  },
  method_onTapOfXView48: async function () {
    const _this = this;

    await wx.navigateTo({
      url: (function (p, baseUrl) {
        let resultUrl = '';
        const querystringArr = [];
        try {
          if (typeof p === 'object') {
            try {
              const json = JSON.stringify(p);
              if (json.length) {
                resultUrl = `${baseUrl}?params=${encodeURIComponent(json)}`;
              } else {
                resultUrl = baseUrl;
              }
            } catch (error) {
              resultUrl = baseUrl;
            }
          } else {
            resultUrl = baseUrl;
          }
        } catch (error) {
          resultUrl = baseUrl;
        }
        return resultUrl;
      })('', '/gui/pages/Page136256sal2/index'),
    });
  },
  method_onTapOfXView27: async function () {
    const _this = this;

    await wx.navigateTo({
      url: (function (p, baseUrl) {
        let resultUrl = '';
        const querystringArr = [];
        try {
          if (typeof p === 'object') {
            try {
              const json = JSON.stringify(p);
              if (json.length) {
                resultUrl = `${baseUrl}?params=${encodeURIComponent(json)}`;
              } else {
                resultUrl = baseUrl;
              }
            } catch (error) {
              resultUrl = baseUrl;
            }
          } else {
            resultUrl = baseUrl;
          }
        } catch (error) {
          resultUrl = baseUrl;
        }
        return resultUrl;
      })('', '/gui/pages/Page136255sal2/index'),
    });
  },
  method_onTapOfXView19: async function () {
    const _this = this;

    await wx.navigateTo({
      url: (function (p, baseUrl) {
        let resultUrl = '';
        const querystringArr = [];
        try {
          if (typeof p === 'object') {
            try {
              const json = JSON.stringify(p);
              if (json.length) {
                resultUrl = `${baseUrl}?params=${encodeURIComponent(json)}`;
              } else {
                resultUrl = baseUrl;
              }
            } catch (error) {
              resultUrl = baseUrl;
            }
          } else {
            resultUrl = baseUrl;
          }
        } catch (error) {
          resultUrl = baseUrl;
        }
        return resultUrl;
      })('', '/gui/pages/Page136252sal2/index'),
    });
  },
});
