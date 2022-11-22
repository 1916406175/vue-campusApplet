Page({
  data: {
    comp155_range: [['科研机构', '加工企业', '种养殖企业', '其他']],
    zhiwei: '',
    suoshubumen: '',
    jigoumingcheng: '',
    jigouID: '',
    yonghuming: '',
    jigouorgCode: '',
    quanjudizhi: 'http://36.152.205.254:52007/',
    shifoushouquandenglu: false,
    token: '',
    variable_xiugaibaocunAPIfanhui: {},
    variable_chehuishenqingAPIfanhui: {},
    variable_huoqujigoubeianxinxiAPIfanhui: {},
    variable_valueOfXPicker155: [0],
    variable_jigoubeianxinxi: {
      id: 0,
      name: '',
      licenseNo: '',
      type: 0,
      applyStatus: 0,
      recall_button_show: false,
      update_button_show: false,
    },
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

  _method_onInputOfXInput150: function (event) {
    this.method_onInputOfXInput150(event);
  },
  _method_onInputOfXInput151: function (event) {
    this.method_onInputOfXInput151(event);
  },
  _method_onChangeOfXPicker155: function (event) {
    this.method_onChangeOfXPicker155(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_huoqujigoubeianxinxi: async function () {
    const _this = this;

    let variable_linshichehuishenqinganniuxianshi = '';
    let variable_linshixiugaianniuxianshi = '';
    this.data['variable_huoqujigoubeianxinxiAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkOrganization/getUserApply',

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
    if (this.data['variable_huoqujigoubeianxinxiAPIfanhui']['data']['code'] == '200') {
      if (!!this.data['variable_huoqujigoubeianxinxiAPIfanhui']['data']['data']) {
        if (this.data['variable_huoqujigoubeianxinxiAPIfanhui']['data']['data']['applyStatus'] == 0) {
          variable_linshichehuishenqinganniuxianshi = true;
        } else {
          variable_linshichehuishenqinganniuxianshi = false;
        }
        if (
          this.data['variable_huoqujigoubeianxinxiAPIfanhui']['data']['data']['applyStatus'] == 0 ||
          this.data['variable_huoqujigoubeianxinxiAPIfanhui']['data']['data']['applyStatus'] == 2
        ) {
          variable_linshixiugaianniuxianshi = true;
        } else {
          variable_linshixiugaianniuxianshi = false;
        }
        this.data['variable_jigoubeianxinxi']['id'] = this.data['variable_huoqujigoubeianxinxiAPIfanhui']['data'][
          'data'
        ]['id'];
        this.data['variable_jigoubeianxinxi']['name'] = this.data['variable_huoqujigoubeianxinxiAPIfanhui']['data'][
          'data'
        ]['name'];
        this.data['variable_jigoubeianxinxi']['licenseNo'] = this.data['variable_huoqujigoubeianxinxiAPIfanhui'][
          'data'
        ]['data']['licenseNo'];
        this.data['variable_jigoubeianxinxi']['type'] = this.data['variable_huoqujigoubeianxinxiAPIfanhui']['data'][
          'data'
        ]['type'];
        this.data['variable_valueOfXPicker155'][0] = this.data['variable_jigoubeianxinxi']['type'] - 1;
        this.data['variable_jigoubeianxinxi']['applyStatus'] = this.data['variable_huoqujigoubeianxinxiAPIfanhui'][
          'data'
        ]['data']['applyStatus'];
        this.data['variable_jigoubeianxinxi']['recall_button_show'] = variable_linshichehuishenqinganniuxianshi;
        this.data['variable_jigoubeianxinxi']['update_button_show'] = variable_linshixiugaianniuxianshi;
        this.setData({
          ['variable_jigoubeianxinxi']: this.data['variable_jigoubeianxinxi'],
          ['variable_valueOfXPicker155']: this.data['variable_valueOfXPicker155'],
        });
      }
    }
  },
  method_chushihua: async function () {
    const _this = this;

    await this.method_huoqujigoubeianxinxi();
    if (!!getApp().gui_global_data['jigouID']) {
      this.data['variable_jigoubeianxinxi']['recall_button_show'] = false;
      this.data['variable_jigoubeianxinxi']['update_button_show'] = false;
      this.setData({
        ['variable_jigoubeianxinxi']: this.data['variable_jigoubeianxinxi'],
      });
    }
  },
  method_onChangeOfXPicker155: function (event) {
    const _this = this;

    this.data['variable_jigoubeianxinxi']['type'] = event['detail']['value'][0] + 1;
  },
  method_onTapOfXButton144: async function () {
    const _this = this;

    this.data['variable_xiugaibaocunAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkOrganization/updateInfo',

          data: JSON.stringify({
            id: this.data['variable_jigoubeianxinxi']['id'],
            name: this.data['variable_jigoubeianxinxi']['name'],
            licenseNo: this.data['variable_jigoubeianxinxi']['licenseNo'],
            type: this.data['variable_jigoubeianxinxi']['type'],
          }),
          header: {
            Authorization: getApp().gui_global_data['token'],
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
    if (this.data['variable_xiugaibaocunAPIfanhui']['data']['code'] == '200') {
      wx.reLaunch({
        url: (function (p, baseUrl) {
          let resultUrl = '';
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
        })({}, '/gui/pages/Page136255sal2/index'),
      });
    }
  },
  method_onTapOfXButton80: async function () {
    const _this = this;

    this.data['variable_chehuishenqingAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkOrganization/recall',

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
    if (this.data['variable_chehuishenqingAPIfanhui']['data']['code'] == '200') {
      wx.reLaunch({
        url: (function (p, baseUrl) {
          let resultUrl = '';
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
        })({}, '/gui/pages/Page136255sal2/index'),
      });
    }
  },
  method_onInputOfXInput151: function (e) {
    const _this = this;

    this.data['variable_jigoubeianxinxi']['licenseNo'] = e['detail']['value'];
  },
  method_onInputOfXInput150: function (e) {
    const _this = this;

    this.data['variable_jigoubeianxinxi']['name'] = e['detail']['value'];
  },
});
