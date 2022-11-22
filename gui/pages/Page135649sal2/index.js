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
    variable_chulishijiandefanhui: {},
    variable_xuanzedetupian: [],
    variable_chulimiaoshu: '',
    variable_textOfXText22: '2022-05-12  20:02:10',
    variable_textOfXText19: '东边田块里面的作物有问题…',
    variable_textOfXText14: '东区',
    variable_textOfXText11: '202201010002',
    variable_zhakanshijiandefanhui: {},
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

  _method_onBlurOfXInput102: function (event) {
    this.method_onBlurOfXInput102(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXView93: async function () {
    const _this = this;

    this.data['variable_xuanzedetupian'] = await wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
    });
  },
  method_chulishijian: async function () {
    const _this = this;

    this.data['variable_chulishijiandefanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkIncident/dispose',

          data: {
            disposeFiles: [
              {
                fileType: 1,
                moduleType: 1,
                absolutelyPath: '',
                createTime: '',
                fileFormat: '',
                fileName: '',
                fileOriginalName: '',
                fileSize: '',
                id: '',
                isDelete: 0,
                moduleId: '',
                relativePath: '',
              },
            ],
            id: this.data.$route_params['id'],
            disposeDescribe: this.data['variable_chulimiaoshu'],
          },
          header: {
            authorization: getApp().gui_global_data['token'],
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
  },
  method_onTapOfXButton80: async function () {
    const _this = this;

    await this.method_chulishijian();
    if (this.data['variable_chulishijiandefanhui']['data']['success'] == true) {
      await wx.showToast({
        title: this.data['variable_chulishijiandefanhui']['data']['desc'],
        icon: 'success',

        duration: 1500,
        mask: false,
      });
      await wx.navigateBack({
        delta: 1,
      });
    }
  },
  method_onBlurOfXInput102: function (e) {
    const _this = this;

    this.data['variable_chulimiaoshu'] = e['detail']['value'];
  },
  method_yemianbianliangfuzhi: function () {
    const _this = this;
  },
  method_zhakanshijian: async function () {
    const _this = this;

    this.data['variable_zhakanshijiandefanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: [
            getApp().gui_global_data.quanjuIPdizhi(),
            '/park/parkIncident/getOneIncident?',
            'id=',
            this.data.$route_params['id'],
          ].join(''),

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
  },
  method_chushihua: async function () {
    const _this = this;

    await this.method_zhakanshijian();
    this.data['variable_textOfXText11'] = this.data['variable_zhakanshijiandefanhui']['data']['data']['incidentCode'];
    this.data['variable_textOfXText14'] = this.data['variable_zhakanshijiandefanhui']['data']['data']['areaName'];
    this.data['variable_textOfXText19'] = this.data['variable_zhakanshijiandefanhui']['data']['data'][
      'incidentDescribe'
    ];
    this.data['variable_textOfXText22'] = this.data['variable_zhakanshijiandefanhui']['data']['data']['createTime'];
    this.setData({
      ['variable_textOfXText11']: this.data['variable_textOfXText11'],
      ['variable_textOfXText14']: this.data['variable_textOfXText14'],
      ['variable_textOfXText19']: this.data['variable_textOfXText19'],
      ['variable_textOfXText22']: this.data['variable_textOfXText22'],
    });
  },
});
