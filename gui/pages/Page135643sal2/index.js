Page({
  data: {
    comp357_options: [
      { text: '全部事件', value: '0' },
      { text: '作物异常', value: '1' },
    ],
    comp360_options: [
      { text: '全部状态', value: '0' },
      { text: '待处理', value: '1' },
      { text: '已处理', value: '2' },
    ],
    comp364_options: [
      { text: '全部安排', value: '0' },
      { text: '已安排', value: '1' },
      { text: '未安排', value: '2' },
    ],
    shifoushouquandenglu: false,
    token:
      'Auth eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY2ODA0MzE4NSwiZXhwIjoxNjY4MDc5MTg1fQ.nLqK-yc-gKTa0jfLBRmh2bzWaya9xCjXzy-gPC4DuH2TK3jPChHSfO-BnalFQ8A2GjEJIIowcH814E-jnzUbNw',
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
