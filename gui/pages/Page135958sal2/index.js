import dayjs from 'dayjs';

Page({
  data: {
    comp586_range: [['企业', '个人']],
    comp586_value: [0],
    zhiwei: '',
    suoshubumen: '',
    jigoumingcheng: '',
    jigouID: '',
    yonghuming: '',
    jigouorgCode: '',
    quanjudizhi: 'http://36.152.205.254:52007/',
    shifoushouquandenglu: false,
    token: '',
    variable_chehuifangkeyuyueshenqingAPIfanhui: {},
    variable_fangkeyuyueshenqingAPIfanhui: {},
    variable_wodeshenqingliebiaoshuzu: [
      {
        id: '',
        state: 0,
        state_text: '',
        state_color: '',
        createTime: '',
        visitorType: 0,
        visitorType_text: '',
        relationMessage: '',
        relationName: '',
        relationPhone: '',
        visitorNumber: 0,
        arriveTime: '',
        reason: '',
        reason_boolean: false,
        chancel_boolean: false,
      },
    ],
    variable_vifOfXView149: false,
    variable_yuyueshenqingxinxi: { visitorType: 0, visitorNumber: 0, arriveTime: '', comeNumber: 0, createTime: '' },
    variable_huoquwodeshenqingliebiaoAPIfanhui: {},
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

  _method_onChangeOfXPicker586: function (event) {
    this.method_onChangeOfXPicker586(event);
  },
  _method_onInputOfXInput478: function (event) {
    this.method_onInputOfXInput478(event);
  },
  _method_onInputOfXInput479: function (event) {
    this.method_onInputOfXInput479(event);
  },
  _method_onInputOfXInput480: function (event) {
    this.method_onInputOfXInput480(event);
  },
  _method_onTapOfXButton708: function (event) {
    this.method_onTapOfXButton708(event.currentTarget.dataset.variableWodeshenqingliebiaoshuzuItem);
  },
  _method_onChangeOfMpTabs3: function (event) {
    this.method_onChangeOfMpTabs3(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXButton708: async function (variableWodeshenqingliebiaoshuzuItem) {
    const _this = this;

    this.data['variable_chehuifangkeyuyueshenqingAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url:
            getApp().gui_global_data.quanjuIPdizhi() +
            '/park/parkVisitor/updateOneselfVisitor?' +
            ('id=' + variableWodeshenqingliebiaoshuzuItem['id']),

          header: {
            authorization: getApp().gui_global_data['token'],
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
    if (this.data['variable_chehuifangkeyuyueshenqingAPIfanhui']['data']['code'] == '200') {
      await this.method_huoquwodeshenqingliebiao();
    }
  },
  method_chushihua: function () {
    const _this = this;

    this.data['variable_yuyueshenqingxinxi']['createTime'] = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
    this.setData({
      ['variable_yuyueshenqingxinxi']: this.data['variable_yuyueshenqingxinxi'],
    });
  },
  method_onInputOfXInput480: function (e) {
    const _this = this;

    this.data['variable_yuyueshenqingxinxi']['comeNumber'] = Number(e['detail']['value']);
  },
  method_onInputOfXInput479: function (e) {
    const _this = this;

    this.data['variable_yuyueshenqingxinxi']['arriveTime'] = e['detail']['value'];
  },
  method_onChangeOfXPicker586: function (event) {
    const _this = this;

    this.data['variable_yuyueshenqingxinxi']['visitorType'] = event['detail']['value'][0];
  },
  method_onInputOfXInput478: function (e) {
    const _this = this;

    this.data['variable_yuyueshenqingxinxi']['visitorNumber'] = Number(e['detail']['value']);
  },
  method_onTapOfXButton313: async function () {
    const _this = this;

    this.data['variable_fangkeyuyueshenqingAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkVisitor/applyVisitor',

          data: JSON.stringify({
            visitorType: this.data['variable_yuyueshenqingxinxi']['visitorType'],
            visitorNumber: this.data['variable_yuyueshenqingxinxi']['visitorNumber'],
            arriveTime: this.data['variable_yuyueshenqingxinxi']['arriveTime'],
            comeNumber: this.data['variable_yuyueshenqingxinxi']['comeNumber'],
            createTime: this.data['variable_yuyueshenqingxinxi']['createTime'],
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
    if (this.data['variable_fangkeyuyueshenqingAPIfanhui']['data']['code'] == '200') {
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
        })({}, '/gui/pages/Page135958sal2/index'),
      });
    }
  },
  method_onChangeOfMpTabs3: async function (event) {
    const _this = this;

    if (event['detail']['value'] == 0) {
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
        })({}, '/gui/pages/Page135958sal2/index'),
      });
    } else {
      await this.method_huoquwodeshenqingliebiao();
    }
  },
  method_huoquwodeshenqingliebiao: async function () {
    const _this = this;

    let variable_linshizhuangtaiwenben = '';
    let variable_linshizhuangtaiyanse = '';
    let variable_linshifangkeleixingwenben = '';
    let variable_linshichehuianniuxianshi = '';
    let variable_linshiyuanyinxianshi = '';
    this.data['variable_wodeshenqingliebiaoshuzu'] = [];
    this.data['variable_huoquwodeshenqingliebiaoAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkVisitor/getOneselfVisitor',

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
    if (this.data['variable_huoquwodeshenqingliebiaoAPIfanhui']['data']['code'] == '200') {
      if (!!this.data['variable_huoquwodeshenqingliebiaoAPIfanhui']['data']['data']) {
        this.data['variable_vifOfXView149'] = false;
        for (
          let itemcount = 0;
          itemcount < this.data['variable_huoquwodeshenqingliebiaoAPIfanhui']['data']['data'].length;
          itemcount++
        ) {
          const item = this.data['variable_huoquwodeshenqingliebiaoAPIfanhui']['data']['data'][itemcount];
          if (item['state'] == 0) {
            variable_linshizhuangtaiwenben = '未审核';
            variable_linshizhuangtaiyanse = 'rgba(45,140,240,1)';
            variable_linshiyuanyinxianshi = false;
            variable_linshichehuianniuxianshi = true;
          } else if (item['state'] == 1) {
            variable_linshizhuangtaiwenben = '已通过';
            variable_linshizhuangtaiyanse = 'rgba(0,181,120,1)';
            variable_linshiyuanyinxianshi = false;
            variable_linshichehuianniuxianshi = false;
          } else if (item['state'] == 2) {
            variable_linshizhuangtaiwenben = '已拒绝';
            variable_linshizhuangtaiyanse = 'rgba(255,59,48,1)';
            variable_linshiyuanyinxianshi = true;
            variable_linshichehuianniuxianshi = false;
          } else {
            variable_linshizhuangtaiwenben = '已撤回';
            variable_linshizhuangtaiyanse = 'rgba(51,51,51,1)';
            variable_linshiyuanyinxianshi = false;
            variable_linshichehuianniuxianshi = false;
          }
          if (item['visitorType'] == 0) {
            variable_linshifangkeleixingwenben = '企业';
          } else {
            variable_linshifangkeleixingwenben = '个人';
          }
          this.data['variable_wodeshenqingliebiaoshuzu'].push({
            id: item['id'],
            state: item['state'],
            state_text: variable_linshizhuangtaiwenben,
            state_color: variable_linshizhuangtaiyanse,
            createTime: dayjs(item['createTime']).format('YYYY-MM-DD HH:mm:ss'),
            visitorType: item['visitorType'],
            visitorType_text: variable_linshifangkeleixingwenben,
            relationMessage: item['relationName'] + ' ' + item['relationPhone'],
            relationName: item['relationName'],
            relationPhone: item['relationPhone'],
            visitorNumber: item['visitorNumber'],
            arriveTime: dayjs(item['arriveTime']).format('YYYY-MM-DD HH:mm:ss'),
            reason: item['reason'],
            reason_boolean: variable_linshiyuanyinxianshi,
            chancel_boolean: variable_linshichehuianniuxianshi,
          });
        }

        this.setData({
          ['variable_wodeshenqingliebiaoshuzu']: this.data['variable_wodeshenqingliebiaoshuzu'],
        });
      } else {
        this.data['variable_vifOfXView149'] = true;
      }
    }
  },
});
