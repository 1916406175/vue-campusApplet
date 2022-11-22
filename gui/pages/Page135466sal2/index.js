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
    variable_jigouliebiao: [{ id: 0, name: '' }],
    variable_huoqujigouxinxiAPIfanhui: {},
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

  _method_onTapOfXView297: function (event) {
    this.method_onTapOfXView297(event.currentTarget.dataset.variableJigouliebiaoItem);
  },
  _method_onTapOfXView297_fromId297: function (event) {
    this.method_onTapOfXView297(event.currentTarget.dataset.variableJigouliebiaoItem);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXView297: async function (variableJigouliebiaoItem) {
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
      })(
        {
          query: {
            orgId: variableJigouliebiaoItem['id'],
          },
        },
        '/gui/pages/Page135467sal2/index',
      ),
    });
  },
  method_huoqujigouxinxiliebiao: async function () {
    const _this = this;

    this.data['variable_jigouliebiao'] = [];
    this.data['variable_huoqujigouxinxiAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkOrganization/selectListByName',

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
    if (this.data['variable_huoqujigouxinxiAPIfanhui']['data']['code'] == '200') {
      for (
        let itemcount = 0;
        itemcount < this.data['variable_huoqujigouxinxiAPIfanhui']['data']['data'].length;
        itemcount++
      ) {
        const item = this.data['variable_huoqujigouxinxiAPIfanhui']['data']['data'][itemcount];
        this.data['variable_jigouliebiao'].push({
          id: item['id'],
          name: item['name'],
        });
      }

      this.setData({
        ['variable_jigouliebiao']: this.data['variable_jigouliebiao'],
      });
      console.log('', this.data['variable_jigouliebiao']);
    }
  },
  method_chushihua: async function () {
    const _this = this;

    await this.method_huoqujigouxinxiliebiao();
  },
});
