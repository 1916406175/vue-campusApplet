import dayjs from 'dayjs';

Page({
  data: {
    comp1162_options: [
      { text: '全部', value: '-1' },
      { text: '对接中', value: '0' },
      { text: '建设中', value: '1' },
      { id: 1, createdTime: 1668504858884, text: '项目结束', value: '2' },
      { id: 2, createdTime: 1668504858998, value: '3', text: '项目终止' },
    ],
    comp1201_value: [0],
    comp1204_range: [['全部', '对接中', '建设中', '项目结束', '项目终止']],
    comp1204_value: [0],
    zhiwei: '',
    suoshubumen: '',
    jigoumingcheng: '',
    jigouID: '',
    yonghuming: '',
    jigouorgCode: '',
    quanjudizhi: 'http://36.152.205.254:52007/',
    shifoushouquandenglu: false,
    token: '',
    variable_xiangmuzhuangtai: 0,
    variable_huoquwodexiangmuAPIfanhui: {},
    variable_xiangmuleixingid: '',
    variable_wodexiangmuliebiaoshuzu: [
      {
        id: '',
        projectCode: '',
        projectName: '',
        projectGroupId: '',
        projectGroupName: '',
        relationMessage: '',
        relationName: '',
        relationPhone: '',
        createTime: '',
        applyState: 0,
        applyState_text: '',
        applyState_color: '',
        cause: '',
        cause_boolean: false,
        projectStatus: 0,
        projectStatus_text: '',
        projectStatus_color: '',
      },
    ],
    variable_vifOfXView1235: false,
    variable_rangeOfXPicker1201: [['']],
    variable_dataSyncOfvandropdownitem: '',
    variable_xiangmuliebiaoshuzu: [
      {
        id: '',
        projectCode: '',
        projectName: '',
        projectGroupId: '',
        projectGroupName: '',
        relationMessage: '',
        relationName: '',
        relationPhone: '',
        createTime: '',
        applicantState: 0,
        applicantState_text: '',
        applicantState_color: '',
      },
    ],
    variable_huoquxiangmuleixingAPIfanhui: {},
    variable_optionsOfVanDropdownItem1122: [{ text: '', value: '' }],
    variable_huoquyuanquxiangmuliebiaoAPIfanhui: {},
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

  _method_onChangeOfVanDropdownItem1126: function (event) {
    this.method_onChangeOfVanDropdownItem1126(event);
  },
  _method_onTapOfXView920: function (event) {
    this.method_onTapOfXView920(event.currentTarget.dataset.variableXiangmuliebiaoshuzuItem);
  },
  _method_onChangeOfXPicker1201: function (event) {
    this.method_onChangeOfXPicker1201(event);
  },
  _method_onChangeOfXPicker1204: function (event) {
    this.method_onChangeOfXPicker1204(event);
  },
  _method_onTapOfXView1207: function (event) {
    this.method_onTapOfXView1207(event.currentTarget.dataset.variableWodexiangmuliebiaoshuzuItem);
  },
  _method_onChangeOfMpTabs3: function (event) {
    this.method_onChangeOfMpTabs3(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_huoquwodexiangmuliebiao: async function () {
    const _this = this;

    let variable_linshixiangmuleixingming = '';
    let variable_linshizhuangtaiwenben = '';
    let variable_linshizhuangtaiyanse = '';
    let variable_linshixiangmuzhuangtaiwenben = '';
    let variable_linshixiangmuzhuangtaiyanse = '';
    let variable_linshijujueyuanyinxianshi = '';
    let variable_linshixiangmuzhuangtai = '';
    let variable_linshileixingid = '';
    this.data['variable_wodexiangmuliebiaoshuzu'] = [];
    if (this.data['variable_xiangmuleixingid'] == '0') {
      variable_linshileixingid = '';
    } else {
      variable_linshileixingid = this.data['variable_xiangmuleixingid'];
    }
    if (this.data['variable_xiangmuzhuangtai'] == -1) {
      variable_linshixiangmuzhuangtai = '';
    } else {
      variable_linshixiangmuzhuangtai = this.data['variable_xiangmuzhuangtai'];
    }
    this.data['variable_huoquwodexiangmuAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url:
            getApp().gui_global_data.quanjuIPdizhi() +
            '/park/parkProject/getOneProject?' +
            ('id=' + variable_linshileixingid) +
            ('&projectStatus=' + variable_linshixiangmuzhuangtai),

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
    if (this.data['variable_huoquyuanquxiangmuliebiaoAPIfanhui']['data']['code'] == '200') {
      if (!this.data['variable_huoquyuanquxiangmuliebiaoAPIfanhui']['data']['data']) {
        this.data['variable_vifOfXView1235'] = true;
      } else {
        this.data['variable_vifOfXView1235'] = false;
        for (
          let itemcount = 0;
          itemcount < this.data['variable_huoquyuanquxiangmuliebiaoAPIfanhui']['data']['data'].length;
          itemcount++
        ) {
          const item = this.data['variable_huoquyuanquxiangmuliebiaoAPIfanhui']['data']['data'][itemcount];
          for (
            let item2count = 0;
            item2count < this.data['variable_optionsOfVanDropdownItem1122'].length;
            item2count++
          ) {
            const item2 = this.data['variable_optionsOfVanDropdownItem1122'][item2count];
            if (item['projectGroupId'] == item2['value']) {
              variable_linshixiangmuleixingming = item2['text'];
              continue;
            }
          }
          if (item['applyState'] == 0) {
            variable_linshizhuangtaiwenben = '待审核';
            variable_linshizhuangtaiyanse = 'rgba(45,140,240,1)';
            variable_linshijujueyuanyinxianshi = false;
          } else if (item['applyState'] == 1) {
            variable_linshizhuangtaiwenben = '审核通过';
            variable_linshizhuangtaiyanse = 'rgba(0,181,120,1)';
            variable_linshijujueyuanyinxianshi = false;
          } else {
            variable_linshizhuangtaiwenben = '审核拒绝';
            variable_linshizhuangtaiyanse = 'rgba(255,59,48,1)';
            variable_linshijujueyuanyinxianshi = true;
          }
          if (item['projectStatus'] == 0) {
            variable_linshixiangmuzhuangtaiwenben = '对接中';
            variable_linshixiangmuzhuangtaiyanse = 'rgba(0,181,120,1)';
          } else if (item['projectStatus'] == 1) {
            variable_linshixiangmuzhuangtaiwenben = '建设中';
            variable_linshixiangmuzhuangtaiyanse = 'rgba(45,140,240,1)';
          } else if (item['projectStatus'] == 2) {
            variable_linshixiangmuzhuangtaiwenben = '项目结束';
            variable_linshixiangmuzhuangtaiyanse = 'rgba(255,59,48,1)';
          } else {
            variable_linshixiangmuzhuangtaiwenben = '项目终止';
            variable_linshixiangmuzhuangtaiyanse = 'rgba(204,204,204,1)';
          }
          this.data['variable_wodexiangmuliebiaoshuzu'].push({
            id: item['id'],
            projectCode: item['projectCode'],
            projectName: item['projectName'],
            projectGroupId: item['projectGroupId'],
            projectGroupName: variable_linshixiangmuleixingming,
            relationMessage: item['relationName'] + ' ' + item['relationPhone'],
            relationName: item['relationName'],
            relationPhone: item['relationPhone'],
            createTime: dayjs(item['createTime']).format('YYYY-MM-DD HH:mm:ss'),
            applyState: item['applyState'],
            applyState_text: variable_linshizhuangtaiwenben,
            applyState_color: variable_linshizhuangtaiyanse,
            cause: item['cause'],
            cause_boolean: variable_linshijujueyuanyinxianshi,
            projectStatus: item['projectStatus'],
            projectStatus_text: variable_linshixiangmuzhuangtaiwenben,
            projectStatus_color: variable_linshixiangmuzhuangtaiyanse,
          });
        }

        this.setData({
          ['variable_wodexiangmuliebiaoshuzu']: this.data['variable_wodexiangmuliebiaoshuzu'],
        });
      }
    }
  },
  method_onTapOfXView1207: async function (variableWodexiangmuliebiaoshuzuItem) {
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
            state: 1,
            id: variableWodexiangmuliebiaoshuzuItem['id'],
            applystate: variableWodexiangmuliebiaoshuzuItem['applyState'],
            projectStatus: variableWodexiangmuliebiaoshuzuItem['projectStatus'],
          },
        },
        '/gui/pages/Page136231sal2/index',
      ),
    });
  },
  method_onChangeOfXPicker1201: async function (event) {
    const _this = this;

    this.data['variable_xiangmuleixingid'] = this.data['variable_optionsOfVanDropdownItem1122'][
      event['detail']['value'][0]
    ]['value'];
    await this.method_huoquwodexiangmuliebiao();
  },
  method_onChangeOfXPicker1204: async function (event) {
    const _this = this;

    this.data['variable_xiangmuzhuangtai'] = event['detail']['value'][0] - 1;
    await this.method_huoquwodexiangmuliebiao();
  },
  method_onChangeOfMpTabs3: async function (event) {
    const _this = this;

    if (event['detail']['value'] == 0) {
      await this.method_huoquxiangmuleixingliebiao();
      this.data['variable_xiangmuleixingid'] = '0';
      await this.method_huoquyuanquxiangmuliebiao();
    } else {
      await this.method_huoquxiangmuleixingliebiao();
      this.data['variable_xiangmuleixingid'] = '0';
      this.data['variable_xiangmuzhuangtai'] = -1;
      await this.method_huoquwodexiangmuliebiao();
    }
  },
  method_onTapOfXView920: async function (variableXiangmuliebiaoshuzuItem) {
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
            state: 0,
            id: variableXiangmuliebiaoshuzuItem['id'],
            applicantState: variableXiangmuliebiaoshuzuItem['applicantState'],
          },
        },
        '/gui/pages/Page136231sal2/index',
      ),
    });
  },
  method_onChangeOfVanDropdownItem1126: async function (value) {
    const _this = this;

    this.data['variable_xiangmuleixingid'] = value['detail'];
    await this.method_huoquyuanquxiangmuliebiao();
  },
  method_huoquxiangmuleixingliebiao: async function () {
    const _this = this;

    this.data['variable_optionsOfVanDropdownItem1122'] = [];
    this.data['variable_rangeOfXPicker1201'][0] = [];
    this.data['variable_huoquxiangmuleixingAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data.quanjuIPdizhi() + '/park/parkProject/getGroupAll',

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
    if (this.data['variable_huoquxiangmuleixingAPIfanhui']['data']['code'] == '200') {
      this.data['variable_optionsOfVanDropdownItem1122'].push({
        value: '0',
        text: '全部',
      });
      this.data['variable_rangeOfXPicker1201'][0].push('全部');
      for (
        let itemcount = 0;
        itemcount < this.data['variable_huoquxiangmuleixingAPIfanhui']['data']['data'].length;
        itemcount++
      ) {
        const item = this.data['variable_huoquxiangmuleixingAPIfanhui']['data']['data'][itemcount];
        this.data['variable_optionsOfVanDropdownItem1122'].push({
          value: item['id'],
          text: item['groupName'],
        });
        this.data['variable_rangeOfXPicker1201'][0].push(item['groupName']);
      }

      this.setData({
        ['variable_optionsOfVanDropdownItem1122']: this.data['variable_optionsOfVanDropdownItem1122'],
        ['variable_rangeOfXPicker1201']: this.data['variable_rangeOfXPicker1201'],
      });
    }
  },
  method_chushihua: async function () {
    const _this = this;

    await this.method_huoquxiangmuleixingliebiao();
    this.data['variable_xiangmuleixingid'] = '0';
    await this.method_huoquyuanquxiangmuliebiao();
  },
  method_huoquyuanquxiangmuliebiao: async function () {
    const _this = this;

    let variable_linshixiangmuleixingmingcheng = '';
    let variable_linshishenqingzhuangtaiwenben = '';
    let variable_linshishenqingzhuangtaiyanse = '';
    let variable_linshixiangmuleixingid = '';
    this.data['variable_xiangmuliebiaoshuzu'] = [];
    if (this.data['variable_xiangmuleixingid'] == '0') {
      variable_linshixiangmuleixingid = '';
    } else {
      variable_linshixiangmuleixingid = this.data['variable_xiangmuleixingid'];
    }
    this.data['variable_huoquyuanquxiangmuliebiaoAPIfanhui'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url:
            getApp().gui_global_data.quanjuIPdizhi() +
            '/park/parkProject/getParkProject?' +
            ('id=' + variable_linshixiangmuleixingid),

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
    if (this.data['variable_huoquyuanquxiangmuliebiaoAPIfanhui']['data']['code'] == '200') {
      if (!this.data['variable_huoquyuanquxiangmuliebiaoAPIfanhui']['data']['data']) {
        this.data['variable_vifOfXView1235'] = true;
      } else {
        this.data['variable_vifOfXView1235'] = false;
        for (
          let itemcount = 0;
          itemcount < this.data['variable_huoquyuanquxiangmuliebiaoAPIfanhui']['data']['data'].length;
          itemcount++
        ) {
          const item = this.data['variable_huoquyuanquxiangmuliebiaoAPIfanhui']['data']['data'][itemcount];
          for (
            let item2count = 0;
            item2count < this.data['variable_optionsOfVanDropdownItem1122'].length;
            item2count++
          ) {
            const item2 = this.data['variable_optionsOfVanDropdownItem1122'][item2count];
            if (item['projectGroupId'] == item2['value']) {
              variable_linshixiangmuleixingmingcheng = item2['text'];
              continue;
            }
          }
          if (item['applicantState'] == 0) {
            variable_linshishenqingzhuangtaiwenben = '已申请';
            variable_linshishenqingzhuangtaiyanse = 'rgba(45,140,240,1)';
          } else {
            variable_linshishenqingzhuangtaiwenben = '未申请';
            variable_linshishenqingzhuangtaiyanse = 'rgba(204,204,204,1)';
          }
          this.data['variable_xiangmuliebiaoshuzu'].push({
            id: item['id'],
            projectCode: item['projectCode'],
            projectName: item['projectName'],
            projectGroupId: item['projectGroupId'],
            projectGroupName: variable_linshixiangmuleixingmingcheng,
            relationMessage: item['relationName'] + ' ' + item['relationPhone'],
            relationName: item['relationName'],
            relationPhone: item['relationPhone'],
            createTime: dayjs(item['createTime']).format('YYYY-MM-DD HH:mm:ss'),
            applicantState: item['applicantState'],
            applicantState_text: variable_linshishenqingzhuangtaiwenben,
            applicantState_color: variable_linshishenqingzhuangtaiyanse,
          });
        }

        this.setData({
          ['variable_xiangmuliebiaoshuzu']: this.data['variable_xiangmuliebiaoshuzu'],
          ['variable_vifOfXView1235']: this.data['variable_vifOfXView1235'],
        });
      }
    }
  },
});
