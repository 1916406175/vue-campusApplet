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
    variable_srcOfXImage797: '',
    variable_vifOfXView896: false,
    variable_styleColorOfXText595: '',
    variable_styleBackgroundColorOfXView594: '',
    variable_styleColorOfXText593: '',
    variable_styleBackgroundColorOfXView592: '',
    variable_styleColorOfXText591: '',
    variable_styleBackgroundColorOfXView590: '',
    variable_styleColorOfXText589: '',
    variable_styleBackgroundColorOfXView588: '',
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

  _method_onChangeOfMpTabs3: function (event) {
    this.method_onChangeOfMpTabs3(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_chushihua: function () {
    const _this = this;

    console.log('', this.data.$route_params);
  },
  method_onChangeOfMpTabs3: function (event) {
    const _this = this;

    if (event['detail']['value'] == '0') {
      this.data['variable_vifOfXView896'] = false;
    } else {
      this.data['variable_vifOfXView896'] = true;
    }
  },
});
