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
    variable_shebeibiaoqianshuzu: [{ id: 0, labelName: '' }],
    variable_shebeixiangqing: {
      id: 0,
      areaName: '',
      groupName: '',
      deviceSerial: '',
      deviceName: '',
      status: 0,
      status_text: '',
      status_color: '',
      labelList: [],
      liveUrl: '',
      accessToken: '',
    },
    variable_huoqushebeixiangqingAPIfanhui: {},
    variable_shebeiid_1: 0,
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
  method_onTapOfXView55: async function () {
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
            url:
              'https://open.ys7.com/ezopen/h5/iframe?url=' +
              this.data['variable_shebeixiangqing']['liveUrl'] +
              '&autoplay=1&accessToken=' +
              this.data['variable_shebeixiangqing']['accessToken'],
          },
        },
        '/gui/pages/Page149701sal2/index',
      ),
    });
  },
  method_huoqushebeixiangqing: async function () {
    const _this = this;

    this.data['variable_huoqushebeixiangqingAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url:
            getApp().gui_global_data.quanjuIPdizhi() +
            '/park/parkDevice/getDetailById?' +
            ('id=' + this.data['variable_shebeiid_1']),

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
    if (this.data['variable_huoqushebeixiangqingAPIfanhui']['data']['code'] == '200') {
      this.data['variable_shebeixiangqing']['id'] = this.data['variable_huoqushebeixiangqingAPIfanhui']['data']['data'][
        'id'
      ];
      this.data['variable_shebeixiangqing']['areaName'] = this.data['variable_huoqushebeixiangqingAPIfanhui']['data'][
        'data'
      ]['areaName'];
      this.data['variable_shebeixiangqing']['groupName'] = this.data['variable_huoqushebeixiangqingAPIfanhui']['data'][
        'data'
      ]['groupName'];
      this.data['variable_shebeixiangqing']['deviceSerial'] = this.data['variable_huoqushebeixiangqingAPIfanhui'][
        'data'
      ]['data']['deviceSerial'];
      this.data['variable_shebeixiangqing']['deviceName'] = this.data['variable_huoqushebeixiangqingAPIfanhui']['data'][
        'data'
      ]['deviceName'];
      this.data['variable_shebeixiangqing']['status'] = this.data['variable_huoqushebeixiangqingAPIfanhui']['data'][
        'data'
      ]['status'];
      if (this.data['variable_shebeixiangqing']['status'] == 1) {
        this.data['variable_shebeixiangqing']['status_text'] = '正常';
        this.data['variable_shebeixiangqing']['status_color'] = 'rgba(0,181,120,1)';
      } else if (this.data['variable_shebeixiangqing']['status'] == 2) {
        this.data['variable_shebeixiangqing']['status_text'] = '离线';
        this.data['variable_shebeixiangqing']['status_color'] = 'rgba(204,204,204,1)';
      } else {
        this.data['variable_shebeixiangqing']['status_text'] = '禁用';
        this.data['variable_shebeixiangqing']['status_color'] = 'rgba(255,59,48,1)';
      }
      this.data['variable_shebeixiangqing']['labelList'] = this.data['variable_huoqushebeixiangqingAPIfanhui']['data'][
        'data'
      ]['labelList'];
      this.data['variable_shebeibiaoqianshuzu'] = [];
      for (let itemcount = 0; itemcount < this.data['variable_shebeixiangqing']['labelList'].length; itemcount++) {
        const item = this.data['variable_shebeixiangqing']['labelList'][itemcount];
        this.data['variable_shebeibiaoqianshuzu'].push({
          id: item['id'],
          labelName: item['labelName'],
        });
      }
      this.data['variable_shebeixiangqing']['liveUrl'] = this.data['variable_huoqushebeixiangqingAPIfanhui']['data'][
        'data'
      ]['liveUrl'];
      this.data['variable_shebeixiangqing']['accessToken'] = this.data['variable_huoqushebeixiangqingAPIfanhui'][
        'data'
      ]['data']['accessToken'];
      this.setData({
        ['variable_shebeixiangqing']: this.data['variable_shebeixiangqing'],
      });
      console.log('', this.data['variable_shebeibiaoqianshuzu']);
      console.log('', this.data['variable_shebeixiangqing']);
    }
  },
  method_chushihua: async function () {
    const _this = this;

    let variable_linshishipindizhi =
      'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D05409106/1.hd.live&autoplay=1&accessToken=at.2jlq3tizcl65kzzq54hvkdzebwnuija0-67woi2mdmg-1im12dc-fh0qhhvgc';
    this.data['variable_shebeiid_1'] = this.data.$route_params['query']['id'];
    await this.method_huoqushebeixiangqing();
  },
});
