Page({
  data: {
    comp289_options: [
      { text: '全部状态', value: '' },
      { text: '待处理', value: '1' },
      { text: '已处理', value: '0' },
    ],
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
    variable_pageSize: 10,
    variable_pageNum: 1,
    variable_1: 1,
    variable_0: 0,
    variable_vforOfXView451: [
      {
        id: '',
        incidentCode: '',
        groupId: '',
        areaId: '',
        incidentDescribe: '',
        disposeDescribe: '',
        userId: '',
        disposeUserId: '',
        isDispose: 0,
        disposeState: 0,
        createTime: '',
        disposeTime: '',
        groupName: '',
        areaName: '',
        sysUserName: '',
        sysUserPhone: '',
        incidentFiles: '',
        disposeFiles: '',
        disposeUserName: '',
        disposeUserPhone: '',
        isDelete: '',
      },
    ],
    variable_yuanqushijianliebiaodefanhui: {},
    variable_vModelOfVanDropdownItem289: '',
    variable_vModelOfVanDropdownItem286: '',
    variable_suoyoushijianfenleidefanhui: {},
    variable_optionsOfVanDropdownItem286: [{ text: '', value: '' }],
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

  _method_onTapOfXView451: function (event) {
    this.method_onTapOfXView451(event.currentTarget.dataset.variableVforOfXView451ItemId);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXButton479: function () {
    const _this = this;
  },
  method_onTapOfXView451: async function (variableVforOfXView451ItemId) {
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
          id: variableVforOfXView451ItemId,
        },
        '/gui/pages/Page154354sal2/index',
      ),
    });
  },
  method_onScrolltolowerOfXScrollView6: function () {
    const _this = this;
  },
  method_yuanqushijian: async function () {
    const _this = this;

    await this.method_yuanqushijianliebiao();
    this.data['variable_vforOfXView451'] = [];
    for (
      let itemcount = 0;
      itemcount < this.data['variable_yuanqushijianliebiaodefanhui']['data']['data']['list'].length;
      itemcount++
    ) {
      const item = this.data['variable_yuanqushijianliebiaodefanhui']['data']['data']['list'][itemcount];
      this.data['variable_vforOfXView451'].push(item);
    }

    this.setData({
      ['variable_vforOfXView451']: this.data['variable_vforOfXView451'],
    });
  },
  method_yuanqushijianliebiao: async function () {
    const _this = this;

    this.data['variable_yuanqushijianliebiaodefanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkIncident/getParkIncidentList',

          data: {
            areaId: '',
            disposeState: this.data['variable_vModelOfVanDropdownItem289'],
            disposeUserId: '',
            endTime: '',
            groupId: this.data['variable_vModelOfVanDropdownItem286'],
            id: '',
            incidentCode: '',
            isDispose: 0,
            pageNum: 1,
            pageSize: 99999,
            startTime: '',
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
    console.log('园区事件列表的返回', this.data['variable_yuanqushijianliebiaodefanhui']);
  },
  method_shijianfenlei: async function () {
    const _this = this;

    await this.method_suoyoushijianfenlei();
    this.data['variable_optionsOfVanDropdownItem286'] = [
      {
        text: '全部',
        value: '',
      },
    ];
    for (
      let itemcount = 0;
      itemcount < this.data['variable_suoyoushijianfenleidefanhui']['data']['data'].length;
      itemcount++
    ) {
      const item = this.data['variable_suoyoushijianfenleidefanhui']['data']['data'][itemcount];
      this.data['variable_optionsOfVanDropdownItem286'].push({
        text: item['groupName'],
        value: item['id'],
      });
    }

    this.setData({
      ['variable_optionsOfVanDropdownItem286']: this.data['variable_optionsOfVanDropdownItem286'],
    });
  },
  method_suoyoushijianfenlei: async function () {
    const _this = this;

    this.data['variable_suoyoushijianfenleidefanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkIncident/getAllIncidentGroupList',

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
    console.log('所有事件分类的返回', this.data['variable_suoyoushijianfenleidefanhui']);
  },
  method_chushihua: function () {
    const _this = this;

    this.method_shijianfenlei();
    this.method_yuanqushijian();
  },
});
