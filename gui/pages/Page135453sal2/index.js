Page({
  data: {
    shifouyaotiaozhuandaoshouquanyemian: false,
    zhiwei: '',
    suoshubumen: '',
    jigoumingcheng: '',
    jigouID: '',
    yonghuming: '',
    jigouorgCode: '',
    quanjudizhi: 'http://36.152.205.254:52007/',
    shifoushouquandenglu: false,
    token: '',
    variable_huoqubumenliebiaoAPIfanhui: '',
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

  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_huoqubumenliebiao: async function () {
    const _this = this;

    this.data['variable_huoqubumenliebiaoAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/depart/getDepartList',

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
    console.log('', this.data['variable_huoqubumenliebiaoAPIfanhui']);
  },
  method_chushihua: async function () {
    const _this = this;

    await this.method_huoqubumenliebiao();
  },
});
