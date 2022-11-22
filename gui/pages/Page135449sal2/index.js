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
    variable_fangzhiquyuid: '',
    variable_optionsOfVanDropdownItem1216: [{ text: '', value: '' }],
    variable_vifOfXView86: false,
    variable_shebeiliebiaoshuzu: [{ id: 0, deviceName: '' }],
    variable_quyushuzu: [{ id: '', areaNmae: '' }],
    variable_huoqushebeiliebiaoAPIfanhui: {},
    variable_huoququyuliebiaoAPIfanhui: {},
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

  _method_onChangeOfVanDropdownItem1216: function (event) {
    this.method_onChangeOfVanDropdownItem1216(event);
  },
  _method_onTapOfXView915: function (event) {
    this.method_onTapOfXView915(event.currentTarget.dataset.variableShebeiliebiaoshuzuItem);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onChangeOfVanDropdownItem1216: async function (value) {
    const _this = this;

    this.data['variable_fangzhiquyuid'] = value['detail'];
    await this.method_huoqushebeiliebiao();
  },
  method_onTapOfXView915: async function (variableShebeiliebiaoshuzuItem) {
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
            id: variableShebeiliebiaoshuzuItem['id'],
          },
        },
        '/gui/pages/Page136260sal2/index',
      ),
    });
  },
  method_chushihua: async function () {
    const _this = this;

    await this.method_huoququyuliebiao();
    this.data['variable_fangzhiquyuid'] = '0';
    await this.method_huoqushebeiliebiao();
  },
  method_huoqushebeiliebiao: async function () {
    const _this = this;

    let variable_linshifangzhiquyuid = '';
    this.data['variable_shebeiliebiaoshuzu'] = [];
    if (this.data['variable_fangzhiquyuid'] == '0') {
      variable_linshifangzhiquyuid = '';
    } else {
      variable_linshifangzhiquyuid = this.data['variable_fangzhiquyuid'];
    }
    this.data['variable_huoqushebeiliebiaoAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkDevice/getList',

          data: JSON.stringify({
            areaId: variable_linshifangzhiquyuid,
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
    if (this.data['variable_huoqushebeiliebiaoAPIfanhui']['data']['code'] == '200') {
      if (!this.data['variable_huoqushebeiliebiaoAPIfanhui']['data']['data']) {
        this.data['variable_vifOfXView86'] = true;
      } else {
        this.data['variable_vifOfXView86'] = false;
        for (
          let itemcount = 0;
          itemcount < this.data['variable_huoqushebeiliebiaoAPIfanhui']['data']['data'].length;
          itemcount++
        ) {
          const item = this.data['variable_huoqushebeiliebiaoAPIfanhui']['data']['data'][itemcount];
          this.data['variable_shebeiliebiaoshuzu'].push({
            id: item['id'],
            deviceName: item['deviceName'],
          });
        }

        this.setData({
          ['variable_shebeiliebiaoshuzu']: this.data['variable_shebeiliebiaoshuzu'],
          ['variable_vifOfXView86']: this.data['variable_vifOfXView86'],
        });
      }
    }
  },
  method_huoququyuliebiao: async function () {
    const _this = this;

    this.data['variable_optionsOfVanDropdownItem1216'] = [];
    this.data['variable_huoququyuliebiaoAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkArea/getAreaList',

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
    if (this.data['variable_huoququyuliebiaoAPIfanhui']['data']['code'] == '200') {
      if (!!this.data['variable_huoququyuliebiaoAPIfanhui']['data']['data']) {
        this.data['variable_optionsOfVanDropdownItem1216'].push({
          value: '0',
          text: '全部',
        });
        for (
          let itemcount = 0;
          itemcount < this.data['variable_huoququyuliebiaoAPIfanhui']['data']['data'].length;
          itemcount++
        ) {
          const item = this.data['variable_huoququyuliebiaoAPIfanhui']['data']['data'][itemcount];
          this.data['variable_optionsOfVanDropdownItem1216'].push({
            value: item['id'],
            text: item['areaName'],
          });
        }

        this.setData({
          ['variable_optionsOfVanDropdownItem1216']: this.data['variable_optionsOfVanDropdownItem1216'],
        });
      }
    }
  },
});
