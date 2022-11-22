Page({
  data: {
    comp16_range: [['北京', '上海']],
    comp16_value: [0],
    comp37_range: [['北京', '上海']],
    comp37_value: [0],
    zhiwei: '',
    suoshubumen: '',
    jigoumingcheng: '',
    jigouID: '',
    yonghuming: '',
    jigouorgCode: '',
    quanjudizhi: 'http://36.152.205.254:52007/',
    shifoushouquandenglu: false,
    token: '',
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

  method_onTapOfXView33: function () {
    const _this = this;
  },
});
