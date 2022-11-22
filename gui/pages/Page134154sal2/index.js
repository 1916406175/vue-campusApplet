Page({
  data: {
    comp424_range: [['北京', '上海']],
    comp424_value: [0],
    variable_vifOfXView802: false,
    variable_vifOfXView581_1: false,
    variable_vifOfXView581: false,
    variable_vifOfXView558: false,
    variable_vifOfXView336: false,
    variable_vifOfXView464: true,
    variable_vifOfXView526: false,
    variable_vifOfXImage322: false,
    variable_vifOfXView257_1: false,
    variable_vifOfXView135: true,
    variable_vifOfXView300: false,
    variable_vifOfXView281: false,
    variable_vifOfXView257: false,
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

  method_onTapOfXView193: function () {
    const _this = this;

    this.data['variable_vifOfXView135'] = false;
    this.data['variable_vifOfXView558'] = true;
    this.setData({
      ['variable_vifOfXView135']: this.data['variable_vifOfXView135'],
    });

    this.setData({
      ['variable_vifOfXView558']: this.data['variable_vifOfXView558'],
    });
  },
  method_onTapOfXView187: function () {
    const _this = this;

    this.data['variable_vifOfXView135'] = false;
    this.data['variable_vifOfXView336'] = true;
    this.data['variable_vifOfXView526'] = false;
    this.setData({
      ['variable_vifOfXView135']: this.data['variable_vifOfXView135'],
    });

    this.setData({
      ['variable_vifOfXView336']: this.data['variable_vifOfXView336'],
    });

    this.setData({
      ['variable_vifOfXView526']: this.data['variable_vifOfXView526'],
    });
  },
  method_onTapOfXView361: function () {
    const _this = this;

    this.data['variable_vifOfXView464'] = false;
    this.data['variable_vifOfXView526'] = true;
    this.setData({
      ['variable_vifOfXView464']: this.data['variable_vifOfXView464'],
    });

    this.setData({
      ['variable_vifOfXView526']: this.data['variable_vifOfXView526'],
    });
  },
  method_onTapOfXView360: function () {
    const _this = this;

    this.data['variable_vifOfXView526'] = false;
    this.data['variable_vifOfXView464'] = true;
    this.setData({
      ['variable_vifOfXView464']: this.data['variable_vifOfXView336'],
    });

    this.setData({
      ['variable_vifOfXView526']: this.data['variable_vifOfXView526'],
    });
  },
  method_onTapOfXView321: function () {
    const _this = this;

    this.data['variable_vifOfXView135'] = true;
    this.data['variable_vifOfXView257'] = false;
    this.data['variable_vifOfXView257_1'] = false;
    this.data['variable_vifOfXView281'] = false;
    this.data['variable_vifOfXView300'] = false;
    this.data['variable_vifOfXView336'] = false;
    this.data['variable_vifOfXView558'] = false;
    this.setData({
      ['variable_vifOfXView257_1']: this.data['variable_vifOfXView257_1'],
    });

    this.setData({
      ['variable_vifOfXView135']: this.data['variable_vifOfXView135'],
    });

    this.setData({
      ['variable_vifOfXView300']: this.data['variable_vifOfXView300'],
    });

    this.setData({
      ['variable_vifOfXView281']: this.data['variable_vifOfXView281'],
    });

    this.setData({
      ['variable_vifOfXView336']: this.data['variable_vifOfXView336'],
    });

    this.setData({
      ['variable_vifOfXView558']: this.data['variable_vifOfXView558'],
    });
  },
  method_onTapOfXView170: function () {
    const _this = this;

    this.data['variable_vifOfXView135'] = false;
    this.data['variable_vifOfXView300'] = true;
    this.setData({
      ['variable_vifOfXView135']: this.data['variable_vifOfXView135'],
    });

    this.setData({
      ['variable_vifOfXView300']: this.data['variable_vifOfXView300'],
    });
  },
  method_onTapOfXView164: function () {
    const _this = this;

    this.data['variable_vifOfXView135'] = false;
    this.data['variable_vifOfXView281'] = true;
    this.setData({
      ['variable_vifOfXView135']: this.data['variable_vifOfXView135'],
    });

    this.setData({
      ['variable_vifOfXView281']: this.data['variable_vifOfXView281'],
    });
  },
  method_onTapOfXView158: function () {
    const _this = this;

    this.data['variable_vifOfXView135'] = false;
    this.data['variable_vifOfXView257'] = true;
    this.data['variable_vifOfXView257_1'] = true;
    this.setData({
      ['variable_vifOfXView257_1']: this.data['variable_vifOfXView257_1'],
    });

    this.setData({
      ['variable_vifOfXView135']: this.data['variable_vifOfXView135'],
    });
  },
});
