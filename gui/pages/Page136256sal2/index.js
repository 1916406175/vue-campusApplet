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
    variable_jiebangyuanquzhanghaoAPIfanhuijieguo: {},
    variable_bangdingyuanquzhanghaoAPIdefanhuijieguo: '',
    variable_valueOfXInput144: '',
    variable_valueOfXInput128: '',
    variable_valueOfXInput138: '',
    variable_mathrandomReturn: 0,
    variable_yanzhengmashuzu: [
      '-',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '0',
      '1',
      '2',
      '3',
      '4',
    ],
    variable_textOfXText147: '',
  },
  properties: {},

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

    this.method_chushihua();
  },

  _method_onBlurOfXInput128: function (event) {
    this.method_onBlurOfXInput128(event);
  },
  _method_onBlurOfXInput144: function (event) {
    this.method_onBlurOfXInput144(event);
  },
  _method_onConfirmOfXInput138: function (event) {
    this.method_onConfirmOfXInput138(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXButton154: async function () {
    const _this = this;

    console.log('openID', getApp().gui_global_data['jigouorgCode']);
    this.data['variable_jiebangyuanquzhanghaoAPIfanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url:
            getApp().gui_global_data['quanjudizhi'] +
            'park/user/unbindingSysAccount?openId=' +
            getApp().gui_global_data['jigouorgCode'],

          header: {
            Authorization: getApp().gui_global_data['token'],
            'Content-Type': 'application/json',
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
    await wx.showToast({
      title: this.data['variable_jiebangyuanquzhanghaoAPIfanhuijieguo']['data']['desc'],
      icon: 'none',

      duration: 1000,
      mask: false,
    });
  },
  method_onBlurOfXInput144: function (e) {
    const _this = this;

    this.data['variable_valueOfXInput144'] = e['detail']['value'];
    console.log('打印密码', this.data['variable_valueOfXInput144']);
  },
  method_onBlurOfXInput128: function (e) {
    const _this = this;

    this.data['variable_valueOfXInput128'] = e['detail']['value'];
    console.log('打印账户', this.data['variable_valueOfXInput128']);
  },
  method_onConfirmOfXInput138: async function (e) {
    const _this = this;

    this.data['variable_valueOfXInput138'] = e['detail']['value'];
    if (e['detail']['value'] != this.data['variable_textOfXText147']) {
      await wx.showToast({
        title: '请正确输入验证码',
        icon: 'none',

        duration: 1000,
        mask: true,
      });
      e['detail']['value'] = '';
      this.data['variable_valueOfXInput138'] = '';
      this.setData({
        ['variable_valueOfXInput138']: this.data['variable_valueOfXInput138'],
      });
      this.method_onTapOfXText147();
    }
  },
  method_chushihua: function () {
    const _this = this;

    this.method_onTapOfXText147();
  },
  method_onTapOfXText147: function () {
    const _this = this;

    let variable_linshixiabiao = '';
    variable_linshixiabiao = 0;
    this.data['variable_textOfXText147'] = '';
    while (variable_linshixiabiao <= 3) {
      this.data['variable_mathrandomReturn'] = Number(
        (
          (function () {
            return Math.random();
          })() *
            35 +
          1
        ).toFixed(0),
      );
      this.data['variable_textOfXText147'] =
        this.data['variable_textOfXText147'] +
        this.data['variable_yanzhengmashuzu'][this.data['variable_mathrandomReturn']];
      variable_linshixiabiao = variable_linshixiabiao + 1;
    }
    console.log('打印验证码', this.data['variable_textOfXText147']);
    this.setData({
      ['variable_textOfXText147']: this.data['variable_textOfXText147'],
    });
  },
  method_onTapOfXButton80: async function () {
    const _this = this;

    if (this.data['variable_valueOfXInput128'] == '') {
      await wx.showToast({
        title: '请输入用户名',
        icon: 'none',

        duration: 1000,
        mask: false,
      });
    } else {
      if (this.data['variable_valueOfXInput144'] == '') {
        await wx.showToast({
          title: '请输入密码',
          icon: 'none',

          duration: 1000,
          mask: false,
        });
      } else {
        if (this.data['variable_valueOfXInput138'] == '') {
          await wx.showToast({
            title: '请正确输入验证码',
            icon: 'none',

            duration: 1000,
            mask: false,
          });
        } else {
          this.data['variable_bangdingyuanquzhanghaoAPIdefanhuijieguo'] = await (async () => {
            return new Promise((resolve, reject) => {
              wx.request({
                url: getApp().gui_global_data['quanjudizhi'] + 'park/user/bindingSysAccount',

                data: {
                  password: this.data['variable_valueOfXInput144'],
                  username: this.data['variable_valueOfXInput128'],
                },
                header: {
                  Authorization: getApp().gui_global_data['token'],
                  'Content-Type': 'application/json',
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
          console.log('园区账号API的返回', this.data['variable_bangdingyuanquzhanghaoAPIdefanhuijieguo']);
          if (this.data['variable_bangdingyuanquzhanghaoAPIdefanhuijieguo']['data']['success'] == true) {
            await wx.showToast({
              title: this.data['variable_bangdingyuanquzhanghaoAPIdefanhuijieguo']['data']['desc'],
              icon: 'none',

              duration: 1000,
              mask: true,
            });
            await wx.switchTab({
              url: '/gui/pages/Page134762sal2/index',
            });
          } else {
            await wx.showToast({
              title: this.data['variable_bangdingyuanquzhanghaoAPIdefanhuijieguo']['data']['desc'],
              icon: 'none',

              duration: 1000,
              mask: true,
            });
          }
        }
      }
    }
  },
});
