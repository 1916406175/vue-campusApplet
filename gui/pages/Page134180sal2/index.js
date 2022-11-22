Page({
  data: {
    comp34_range: [['全部', '访客预约', '企业入驻', '园区入驻']],
    comp34_value: [0],
    comp41_range: [['全部', '已处理', '未处理']],
    comp41_value: [0],
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
  },
});
