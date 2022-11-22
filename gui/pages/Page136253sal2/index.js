Page({
  data: {
    orgDept:'',
    orgId:"",
    orgPost:"",
    zhiwei: '',
    suoshubumen: '',
    jigoumingcheng: '',
    jigouID: '',
    yonghuming: '',
    jigouorgCode: '',
    quanjudizhi: 'http://36.152.205.254:52007/',
    shifoushouquandenglu: false,
    token: '',
    variable_huoqujigoumingchengAPIdefanhuijieguo: {},
    variable_bianjijigouxinxiAPIdefanhuijieguo: {},
    variable_valueOfXInput138: '',
    variable_valueOfXInput144: '',
    variable_jigoumingcheng_1: '',
    variable_huoquyonghushenqingjigouAPIdefanhuijieguo: {},
    variable_textOfXText148: '行政',
    variable_textOfXText146: '前台事业部',
    variable_textOfXText137: '江苏耳语科技信息有限公司',
    selectData:[]
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
    wx.request({
      url:
        getApp().gui_global_data['quanjudizhi'] +
        'park/parkOrganization/selectListByName',
      header: {
        Authorization: getApp().gui_global_data['token'],
        'Content-Type': 'application/json',
      },
      timeout: 5000,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.data.selectData = result.data.data;
        console.log(this.data.selectData)
      },
      fail: (error) => {
        reject(error);
      },
    });
  },
  // 获取机构下拉


  _method_onBlurOfXInput154: function (event) {
    this.method_onBlurOfXInput154(event);
  },
  _method_onInputOfXInput154: function (event) {
    this.method_onInputOfXInput154(event);
  },
  _method_onBlurOfXInput144: function (event) {
    this.method_onBlurOfXInput144(event);
  },
  _method_onConfirmOfXInput138: function (event) {
    this.method_onConfirmOfXInput138(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onInputOfXInput154: async function (e) {
    const _this = this;
    this.data['variable_huoqujigoumingchengAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url:
            getApp().gui_global_data['quanjudizhi'] +
            '/park/parkOrganization/selectListByName?name=' +
            e['detail']['value'],

          header: {
            Authorization: getApp().gui_global_data['token'],
            'Content-Type': 'application/json',
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
  },
  method_onConfirmOfXInput138: function (e) {
    const _this = this;

    this.data['variable_textOfXText148'] = e['detail']['value'];
    this.setData({
      ['variable_valueOfXInput138']: e['detail']['value'],
    });
  },
  method_onBlurOfXInput144: function (e) {
    const _this = this;

    this.data['variable_textOfXText146'] = e['detail']['value'];
    this.setData({
      ['variable_valueOfXInput144']: e['detail']['value'],
    });
  },
  method_onBlurOfXInput154: function (e) {
    const _this = this;

    this.data['variable_textOfXText137'] = e['detail']['value'];
    this.setData({
      ['variable_jigoumingcheng_1']: e['detail']['value'],
    });
  },
  method_chushihua: async function () {
    const _this = this;

    await this.method_huoquyonghushenqingdejigouxinxi();
  },
  method_huoquyonghushenqingdejigouxinxi: async function () {
    const _this = this;

    this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + 'park/parkOrganization/getUserApply',

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
    if (this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data']['success'] == true) {
      getApp().gui_global_data['jigouID'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['id'];
      getApp().gui_global_data['jigoumingcheng'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo'][
        'data'
      ]['data']['name'];
      this.data['variable_textOfXText137'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['name'];
      getApp().gui_global_data['suoshubumen'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['orgDept'];
      this.data['variable_textOfXText146'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['orgDept'];
      getApp().gui_global_data['zhiwei'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['orgPost'];
      this.data['variable_textOfXText148'] = this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data'][
        'data'
      ]['orgPost'];
      this.setData({
        ['variable_textOfXText137']: this.data['variable_textOfXText137'],
        ['variable_textOfXText146']: this.data['variable_textOfXText146'],
        ['variable_textOfXText148']: this.data['variable_textOfXText148'],
      });
    } else {
      await wx.showToast({
        title: this.data['variable_huoquyonghushenqingjigouAPIdefanhuijieguo']['data']['desc'],
        icon: 'none',

        duration: 1500,
        mask: true,
      });
    }
  },
  method_onTapOfXButton159: function () {
    const _this = this;

    this.method_onTapOfXButton80();
  },
  method_onTapOfXButton80: async function () {
    const _this = this;

    await wx.switchTab({
      url: '/gui/pages/Page134762sal2/index',
    });
  },
  method_onTapOfXButton157: async function () {
    const _this = this;

    if (this.data['variable_jigoumingcheng_1'] == '') {
      await wx.showToast({
        title: '请输入机构名称',
        icon: 'none',

        duration: 1000,
        mask: true,
      });
    } else {
      if (this.data['variable_valueOfXInput144'] == '') {
        await wx.showToast({
          title: '请输入所属部门',
          icon: 'none',

          duration: 1000,
          mask: true,
        });
      } else {
        if (this.data['variable_valueOfXInput138'] == '') {
          await wx.showToast({
            title: '请输入职位',
            icon: 'none',

            duration: 1000,
            mask: true,
          });
        } else {
          this.data['variable_bianjijigouxinxiAPIdefanhuijieguo'] = await (async () => {
            return new Promise((resolve, reject) => {
              console.log(this.data)
              wx.request({
                url: getApp().gui_global_data['quanjudizhi'] + 'park/parkOrganization/applyBind',
                data: {
                  orgId: 94,
                  orgDept: this.data.variable_textOfXText146,
                  orgPost: this.data.variable_textOfXText148,
                },
                header: {
                  Authorization: getApp().gui_global_data['token'],
                  'Content-Type': 'application/json',
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
          await wx.switchTab({
            url: '/gui/pages/Page134762sal2/index',
          });
        }
      }
    }
  },
});
