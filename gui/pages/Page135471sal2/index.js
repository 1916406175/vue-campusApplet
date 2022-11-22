import dayjs from 'dayjs';

Page({
  data: {
    comp289_options: [
      { text: '全部状态', value: '' },
      { text: '待处理', value: '1' },
      { text: '已处理', value: '0' },
    ],
    zhiwei: '',
    suoshubumen: '',
    jigoumingcheng: '',
    jigouID: '',
    yonghuming: '',
    jigouorgCode: '',
    quanjudizhi: 'http://36.152.205.254:52007/',
    shifoushouquandenglu: false,
    token: '',
    variable_vModelOfVanDropdownItem289: '',
    variable_shijianleixingid: '',
    variable_vifOfXView123: false,
    variable_shangbaoshijianshuzu_1: [
      { title: '', 处理状态: '', 编号: '', 区域: '', 描述: '', 时间: '', display: true },
    ],
    variable_shijianfenleishuzu: [{ text: '', value: '' }],
    variable_suoyoushijianfenleiAPIdefanhuijieguo: {},
    variable_shijianshangbaoAPIdefanhuijieguo: '',
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

  _method_qiehuanshangbaoshijianleixing: function (event) {
    this.method_qiehuanshangbaoshijianleixing(event);
  },
  _method_onChangeOfVanDropdownItem289: function (event) {
    this.method_onChangeOfVanDropdownItem289(event);
  },
  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onChangeOfVanDropdownItem289: async function (value) {
    const _this = this;

    await this.method_huoqushijianliebiao();
  },
  method_qiehuanshangbaoshijianleixing: async function (value) {
    const _this = this;

    await this.method_huoqusuoyoushijianfenlei();
    if (this.data['variable_shijianleixingid'] == '0') {
      this.data['variable_shijianleixingid'] = '';
    }
    await this.method_huoqushijianliebiao();
  },
  method_chushihua: async function () {
    const _this = this;

    await this.method_huoqusuoyoushijianfenlei();
    this.data['variable_shijianleixingid'] = '';
    this.data['variable_vModelOfVanDropdownItem289'] = '';
    await this.method_huoqushijianliebiao();
  },
  method_huoqusuoyoushijianfenlei: async function () {
    const _this = this;

    this.data['variable_shijianfenleishuzu'] = [];
    this.data['variable_shijianfenleishuzu'].push({
      text: '全部事件',
      value: '0',
    });
    this.data['variable_suoyoushijianfenleiAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + 'park/parkIncident/getAllIncidentGroupList',

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
    console.log('打印所有事件分类API', this.data['variable_suoyoushijianfenleiAPIdefanhuijieguo']);
    if (this.data['variable_suoyoushijianfenleiAPIdefanhuijieguo']['data']['success'] == true) {
      for (
        let itemcount = 0;
        itemcount < this.data['variable_suoyoushijianfenleiAPIdefanhuijieguo']['data']['data'].length;
        itemcount++
      ) {
        const item = this.data['variable_suoyoushijianfenleiAPIdefanhuijieguo']['data']['data'][itemcount];
        this.data['variable_shijianfenleishuzu'].push({
          text: item['groupName'],
          value: item['id'],
        });
      }

      this.setData({
        ['variable_shijianfenleishuzu']: this.data['variable_shijianfenleishuzu'],
      });
    } else {
      await wx.showToast({
        title: this.data['variable_suoyoushijianfenleiAPIdefanhuijieguo']['data']['desc'],
        icon: 'none',

        duration: 1000,
        mask: false,
      });
    }
  },
  method_huoqushijianliebiao: async function () {
    const _this = this;

    let variable_linshichulizhuangtai = '';
    this.data['variable_shangbaoshijianshuzu_1'] = [];
    this.data['variable_shijianshangbaoAPIdefanhuijieguo'] = await (async () => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: getApp().gui_global_data['quanjudizhi'] + 'park/parkIncident/getParkIncidentList',

          data: {
            disposeState: this.data['variable_vModelOfVanDropdownItem289'],
            groupId: this.data['variable_shijianleixingid'],
            pageNum: 1,
            pageSize: 99999,
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
    console.log('打印时间上报API返回', this.data['variable_shijianshangbaoAPIdefanhuijieguo']);
    if (this.data['variable_shijianshangbaoAPIdefanhuijieguo']['data']['success'] == true) {
      for (
        let itemcount = 0;
        itemcount < this.data['variable_shijianshangbaoAPIdefanhuijieguo']['data']['data']['list'].length;
        itemcount++
      ) {
        const item = this.data['variable_shijianshangbaoAPIdefanhuijieguo']['data']['data']['list'][itemcount];
        if (item['disposeState'] == 0) {
          variable_linshichulizhuangtai = true;
        } else {
          variable_linshichulizhuangtai = false;
        }
        this.data['variable_shangbaoshijianshuzu_1'].push({
          areaId: item['areaId'],
          title: item['groupName'],
          时间: dayjs(item['createTime']).format('YYYY-MM-DD'),
          编号: item['incidentCode'],
          区域: item['areaName'],
          描述: item['disposeDescribe'],
          display: variable_linshichulizhuangtai,
        });
      }
    } else {
      await wx.showToast({
        title: this.data['variable_shijianshangbaoAPIdefanhuijieguo']['data']['desc'],
        icon: 'none',

        duration: 1000,
        mask: false,
      });
    }
    console.log('打印数组', this.data['variable_shangbaoshijianshuzu_1']);
    this.setData({
      ['variable_shangbaoshijianshuzu_1']: this.data['variable_shangbaoshijianshuzu_1'],
    });
  },
});
