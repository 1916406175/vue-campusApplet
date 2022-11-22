import dayjs from 'dayjs';

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
    variable_xiaoxiliebiaoshuzu: [{ id: '', title: '', msgContent: '', createTime: '' }],
    variable_huoquxiaoxiliebiaoAPIdefanhuijieguo: {},
  },
  properties: {},

  onShow() {
    this.method_chushihua();
  },

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
  method_huoquxiaoxifenyeliebiao: async function () {
    const _this = this;

    let variable_dangqianshijian = '';
    this.data['variable_xiaoxiliebiaoshuzu'] = [];
    this.data['variable_huoquxiaoxiliebiaoAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + 'park/annountCement/list',

          data: {
            pageNum: 1,
            pageSize: 1000,
            query: {
              readFlag: '',
              userName: getApp().gui_global_data['yonghuming'],
            },
          },
          header: {
            Authorization: getApp().gui_global_data['token'],
            'Content-type': 'application/json',
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
    console.log('打印消息列表API返回', this.data['variable_huoquxiaoxiliebiaoAPIdefanhuijieguo']);
    if (this.data['variable_huoquxiaoxiliebiaoAPIdefanhuijieguo']['data']['success']) {
      for (
        let itemcount = 0;
        itemcount < this.data['variable_huoquxiaoxiliebiaoAPIdefanhuijieguo']['data']['data']['records'].length;
        itemcount++
      ) {
        const item = this.data['variable_huoquxiaoxiliebiaoAPIdefanhuijieguo']['data']['data']['records'][itemcount];
        this.data['variable_xiaoxiliebiaoshuzu'].push({
          id: item['id'],
          title: item['title'],
          msgContent: item['msgContent'],
          createTime: dayjs(item['createTime']).format('YYYY-MM-DD'),
        });
      }
    } else {
      await wx.showToast({
        title: this.data['variable_huoquxiaoxiliebiaoAPIdefanhuijieguo']['data']['desc'],
        icon: 'none',

        duration: 1000,
        mask: false,
      });
    }

    this.setData({
      ['variable_xiaoxiliebiaoshuzu']: this.data['variable_xiaoxiliebiaoshuzu'],
    });
    console.log('打印数组', this.data['variable_xiaoxiliebiaoshuzu']);
  },
  method_chushihua: async function () {
    const _this = this;

    console.log('打印授权登陆', JSON.parse(getApp().gui_global_data['shifoushouquandenglu']));
    if (
      JSON.parse(getApp().gui_global_data['shifoushouquandenglu']) == false ||
      getApp().gui_global_data['token'] == ''
    ) {
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
        })('', '/gui/pages/Page147344sal2/index'),
      });
    } else {
      await this.method_huoquxiaoxifenyeliebiao();
    }
  },
});
