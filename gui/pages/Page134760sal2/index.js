Page({
  data: {
    comp238_options: [
      { text: '全部事项', value: '' },
      { text: '访客预约', value: '1' },
      { id: 1, createdTime: 1666166617922, text: '机构管理', value: '2' },
      { id: 2, createdTime: 1666166623748, text: '园区项目', value: '3' },
      { id: 3, createdTime: 1666166632749, text: '园区事件', value: '4' },
    ],
    comp241_options: [
      { text: '全部状态', value: '' },
      { text: '待处理', value: '0' },
      { text: '已处理', value: '1' },
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
    variable_vifOfXView23: '待审核',
    variable_yitongguodetiaojianxianshi: '已通过',
    variable_vforOfXView186: [
      {
        type: 0,
        businessId: '',
        businessType: 0,
        businessName: '',
        state: 0,
        stateStr: '',
        applyDate: '',
        orgTypeName: '',
        reason: '',
        licenseNo: '',
        orgName: '',
        userName: '',
        contact: '',
        visitorNumber: 0,
        arriveTime: '',
        projectCode: '',
        projectName: '',
      },
    ],
    variable_vifOfXView195: '已拒绝',
    variable_pageSize: 10,
    variable_pageNum: 1,
    variable_daibanshixiangfenyedefanhui: {},
    variable_vModelOfVanDropdownItem241: '',
    variable_vifOfXView186: true,
    variable_vModelOfVanDropdownItem238: '',
    variable_vifOfXView152: true,
    variable_vifOfXView226: false,
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

  _method_onChangeOfVanDropdownItem238_1: function (event) {
    this.method_onChangeOfVanDropdownItem238_1(event);
  },
  _method_onChangeOfVanDropdownItem241_1: function (event) {
    this.method_onChangeOfVanDropdownItem241_1(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXButton45: function () {
    const _this = this;

    this.data['variable_vifOfXView226'] = true;
  },
  method_tianjiaxiang: function () {
    const _this = this;

    for (
      let itemcount = 0;
      itemcount < this.data['variable_daibanshixiangfenyedefanhui']['data']['data']['records'].length;
      itemcount++
    ) {
      const item = this.data['variable_daibanshixiangfenyedefanhui']['data']['data']['records'][itemcount];
      this.data['variable_vforOfXView186'].push(item);
    }

    this.setData({
      ['variable_vforOfXView186']: this.data['variable_vforOfXView186'],
    });
  },
  method_onChangeOfVanDropdownItem241_1: function (value) {
    const _this = this;

    this.method_xuanrandaibanxunhuan();
  },
  method_onChangeOfVanDropdownItem238_1: function (value) {
    const _this = this;

    this.method_xuanrandaibanxunhuan();
  },
  method_xuanrandaibanxunhuan: async function () {
    const _this = this;

    await this.method_daibanshixiangfenye();
    this.data['variable_vforOfXView186'] = [];
    this.method_tianjiaxiang();
  },
  method_onScrolltolowerOfXScrollView6: async function () {
    const _this = this;

    this.data['variable_pageNum'] = this.data['variable_pageNum'] + 1;
    await this.method_daibanshixiangfenye();
    this.method_tianjiaxiang();
  },
  method_daibanshixiangfenye: async function () {
    const _this = this;

    this.data['variable_daibanshixiangfenyedefanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkAgendaData/pageAll',

          data: {
            pageNum: this.data['variable_pageNum'],
            pageSize: this.data['variable_pageSize'],
            query: {
              businessId: '',
              businessType: this.data['variable_vModelOfVanDropdownItem238'],
              createTime: '',
              orgCode: '',
              state: this.data['variable_vModelOfVanDropdownItem241'],
              type: '',
              userName: '',
            },
          },
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
  },
  method_chushihua: async function () {
    const _this = this;

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
    }
    this.method_xuanrandaibanxunhuan();
  },
  method_onTapOfXView234: function () {
    const _this = this;

    this.method_onTapOfXView232();
  },
  method_onTapOfXView232: function () {
    const _this = this;

    this.data['variable_vifOfXView226'] = false;
    this.setData({
      ['variable_vifOfXView226']: this.data['variable_vifOfXView226'],
    });
  },
  method_onTapOfXButton150: function () {
    const _this = this;

    this.data['variable_vifOfXView226'] = true;
    this.setData({
      ['variable_vifOfXView226']: this.data['variable_vifOfXView226'],
    });
  },
});
