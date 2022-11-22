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
    variable_styleBackgroundColorOfXView24: '',
    variable_styleBackgroundColorOfXView2: '',
    variable_shifoushouquan: false,
    variable_vifOfXView61: false,
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
  },

  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXView19: async function () {
    const _this = this;

    this.data['variable_shifoushouquan'] = true;
    getApp().gui_global_data['shifoushouquandenglu'] = true;
    console.log('是否授权登陆', JSON.parse(getApp().gui_global_data['shifoushouquandenglu']));
    this.setData({
      ['variable_vifOfXView61']: false,
    });

    this.setData({
      ['variable_styleBackgroundColorOfXView2']: '#fff',
    });
    await wx.switchTab({
      url: '/gui/pages/Page134762sal2/index',
    });
  },
  method_onTapOfXView18: async function () {
    const _this = this;

    this.data['variable_shifoushouquan'] = false;
    getApp().gui_global_data['shifoushouquandenglu'] = false;
    this.setData({
      ['variable_vifOfXView61']: false,
    });

    this.setData({
      ['variable_styleBackgroundColorOfXView2']: '#fff',
    });
    await wx.switchTab({
      url: '/gui/pages/Page134759sal2/index',
    });
  },
  method_onTapOfXView6: function () {
    const _this = this;

    this.setData({
      ['variable_vifOfXView61']: true,
    });

    this.setData({
      ['variable_styleBackgroundColorOfXView2']: 'rgba(204,204,204,1)',
    });

    this.setData({
      ['variable_styleBackgroundColorOfXView2']: 'rgba(204,204,204,1)',
    });
  },
});
