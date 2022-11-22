Page({
  data: {
    jigouID: '',
    yonghuming: '',
    jigouorgCode: '',
    quanjudizhi: 'http://36.152.205.254:52007/',
    shifoushouquandenglu: false,
    token: '',
    variable_dangqianyonghuid: '',
    variable_baocungerenxinxiAPIdefanhuijieguo: {},
    variable_placeholderOfXInput143: '--',
    variable_placeholderOfXInput138: '--',
    variable_textOfXText112: '--',
    variable_placeholderOfXInput128: '--',
    variable_huoquyonghuxiangqingAPIdefanhuijieguo: '',
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

  _method_onBlurOfXInput128: function (event) {
    this.method_onBlurOfXInput128(event);
  },
  _method_onBlurOfXInput138: function (event) {
    this.method_onBlurOfXInput138(event);
  },
  _method_onBlurOfXInput143: function (event) {
    this.method_onBlurOfXInput143(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onBlurOfXInput143: function (e) {
    const _this = this;

    this.setData({
      ['variable_placeholderOfXInput143']: e['detail']['value'],
    });
  },
  method_onBlurOfXInput138: function (e) {
    const _this = this;

    this.setData({
      ['variable_placeholderOfXInput138']: e['detail']['value'],
    });
  },
  method_onBlurOfXInput128: function (e) {
    const _this = this;

    this.setData({
      ['variable_placeholderOfXInput128']: e['detail']['value'],
    });
  },
  method_chushihua: async function () {
    const _this = this;

    await this.method_huoquyonghuxinxi();
  },
  method_huoquyonghuxinxi: async function () {
    const _this = this;

    if (JSON.parse(getApp().gui_global_data['shifoushouquandenglu']) == false) {
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
    } else {
      this.data['variable_huoquyonghuxiangqingAPIdefanhuijieguo'] = await (async () => {
        return new Promise((resolve, reject) => {
          wx.request({
            url:
              getApp().gui_global_data['quanjudizhi'] +
              'park/user/getSelfDetail?userName=' +
              getApp().gui_global_data['yonghuming'],

            header: {
              Authorization: getApp().gui_global_data['token'],
              'content-type': 'application/json',
            },
            timeout: 5000,
            method: 'GET',
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
      console.log('打印用户详情、', this.data['variable_huoquyonghuxiangqingAPIdefanhuijieguo']);
      if (this.data['variable_huoquyonghuxiangqingAPIdefanhuijieguo']['data']['desc'] == '处理成功') {
        console.log('打印用户详情、', this.data['variable_huoquyonghuxiangqingAPIdefanhuijieguo']['data']['data']);
        this.data['variable_dangqianyonghuid'] = this.data['variable_huoquyonghuxiangqingAPIdefanhuijieguo']['data'][
          'data'
        ]['id'];
        this.data['variable_placeholderOfXInput128'] = this.data['variable_huoquyonghuxiangqingAPIdefanhuijieguo'][
          'data'
        ]['data']['realName'];
        this.data['variable_textOfXText112'] = this.data['variable_huoquyonghuxiangqingAPIdefanhuijieguo']['data'][
          'data'
        ]['phone'];
        this.data['variable_placeholderOfXInput138'] = this.data['variable_huoquyonghuxiangqingAPIdefanhuijieguo'][
          'data'
        ]['data']['idCard'];
        this.data['variable_placeholderOfXInput143'] = this.data['variable_huoquyonghuxiangqingAPIdefanhuijieguo'][
          'data'
        ]['data']['email'];
        console.log('打印用户姓名', this.data['variable_placeholderOfXInput128']);
        console.log('打印用户手机号', this.data['variable_textOfXText112']);
        console.log('打印身份证号', this.data['variable_placeholderOfXInput138']);
        console.log('打印邮箱', this.data['variable_placeholderOfXInput143']);
        this.setData({
          ['variable_placeholderOfXInput128']: this.data['variable_placeholderOfXInput128'],
          ['variable_textOfXText112']: this.data['variable_textOfXText112'],
          ['variable_placeholderOfXInput138']: this.data['variable_placeholderOfXInput138'],
          ['variable_placeholderOfXInput143']: this.data['variable_placeholderOfXInput143'],
        });
      }
    }
  },
  method_onTapOfXButton80: async function () {
    const _this = this;

    console.log('打印变量', 'variable_placeholderOfXInput143');
    console.log('手机号', this.data['variable_textOfXText112']);
    this.data['variable_baocungerenxinxiAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + 'park/user/updateUserInfo',

          data: {
            realName: this.data['variable_placeholderOfXInput128'],
            phone: this.data['variable_textOfXText112'],
            idCard: this.data['variable_placeholderOfXInput138'],
            email: this.data['variable_placeholderOfXInput143'],
            id: this.data['variable_dangqianyonghuid'],
          },
          header: {
            Authorization: getApp().gui_global_data['token'],
            'content-type': 'application/json',
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
    console.log('保存个人信息返回结果', this.data['variable_baocungerenxinxiAPIdefanhuijieguo']);
    if (false) {
    }
    await wx.switchTab({
      url: '/gui/pages/Page134762sal2/index',
    });
  },
});
