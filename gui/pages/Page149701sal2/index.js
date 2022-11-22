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
    variable_srcOfXWebView3: '',
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

    this.method_huoqushipindizhi();
  },

  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_huoqushipindizhi: function () {
    const _this = this;

    this.data['variable_srcOfXWebView3'] = this.data.$route_params['query']['url'];
    this.setData({
      ['variable_srcOfXWebView3']: this.data['variable_srcOfXWebView3'],
    });
  },
});
