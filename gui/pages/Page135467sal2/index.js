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

  method_chushihua: function () {
    const _this = this;

    console.log('', this.data.$route_params);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXView298: async function () {
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
      })('', '/gui/pages/Page135463sal2/index'),
    });
  },
});
