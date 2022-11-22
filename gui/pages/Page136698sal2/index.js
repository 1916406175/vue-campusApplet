Page({
  data: {
    token:
      'Auth eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY2Nzk1NzA5NywiZXhwIjoxNjY3OTkzMDk3fQ.9qJfZEcuUCv-JvnUq8QNNyzd0tF7L6Y9xeGKe14gdWIkdsBR32_cohGZdXJwYuj48blp3CkHlm1eIYPj4MGWZA',
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
