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
    variable_jiechujigouxinxibangdingAPIdefanhuijieguo: {},
    variable_jigoushenheAPIdefanhuijieguo: {},
    variable_huoquyonghushenqingjigouAPIdefanhuijieguo: {},
    variable_textOfXText148: '--',
    variable_textOfXText146: '--',
    variable_textOfXText137: '--',
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
  method_chushihua: async function () {
    const _this = this;

    await this.method_huoquyonghushenqingdejigouxinxi();
  },
  method_huoquyonghushenqingdejigouxinxi: async function () {
    const _this = this;

    this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + 'park/parkOrganization/getUserApply',

          header: {
            Authorization: getApp().gui_global_data['token'],
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
    console.log('用户申请API的返回结果', this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']);
    if (this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data']['success'] == true) {
      console.log('用户申请API的返回结果', this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']);
      getApp().gui_global_data['jigouID'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['id'];
      getApp().gui_global_data['jigoumingcheng'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo'][
        'data'
      ]['data']['name'];
      this.data['variable_textOfXText137'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['name'];
      getApp().gui_global_data['suoshubumen'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['orgDept'];
      this.data['variable_textOfXText146'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['orgDept'];
      getApp().gui_global_data['zhiwei'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['orgPost'];
      this.data['variable_textOfXText148'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['orgPost'];
      this.setData({
        ['variable_textOfXText137']: this.data['variable_textOfXText137'],
        ['variable_textOfXText146']: this.data['variable_textOfXText146'],
        ['variable_textOfXText148']: this.data['variable_textOfXText148'],
      });
    } else {
      await wx.showToast({
        title: this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data']['desc'],
        icon: 'none',

        duration: 1000,
        mask: true,
      });
    }
  },
  method_onTapOfXButton159: async function () {
    const _this = this;

    this.data['variable_jiechujigouxinxibangdingAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + 'park/parkOrganization/relieve',

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
    await wx.switchTab({
      url: '/gui/pages/Page134762sal2/index',
    });
  },
  method_onTapOfXButton80: async function () {
    const _this = this;

    this.data['variable_jigoushenheAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + 'park/parkOrganization/recall',

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
    console.log('打印审核API的返回结果', this.data['variable_jigoushenheAPIdefanhuijieguo']);
    await wx.switchTab({
      url: '/gui/pages/Page134762sal2/index',
    });
  },
  method_onTapOfXButton157: async function () {
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
      })('', '/gui/pages/Page136253sal2/index'),
    });
  },
});
