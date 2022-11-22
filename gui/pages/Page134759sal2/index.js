Page({
  data: {
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

  quanjuIPdizhi: function () {
    const _this = this;

    return 'http://36.152.205.254:52007';
  },
  method_onTapOfXView59: async function () {
    const _this = this;

    if (
      JSON.parse(getApp().gui_global_data['shifoushouquandenglu']) == false &&
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
    } else {
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
        })('', '/gui/pages/Page136207sal2/index'),
      });
    }
  },
  method_onTapOfXView56: async function () {
    const _this = this;

    if (
      JSON.parse(getApp().gui_global_data['shifoushouquandenglu']) == false &&
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
    } else {
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
        })('', '/gui/pages/Page136040sal2/index'),
      });
    }
  },
  method_onTapOfXView52: async function () {
    const _this = this;

    if (
      JSON.parse(getApp().gui_global_data['shifoushouquandenglu']) == false &&
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
    } else {
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
        })('', '/gui/pages/Page135958sal2/index'),
      });
    }
  },
  method_onTapOfXView42: async function () {
    const _this = this;

    if (
      JSON.parse(getApp().gui_global_data['shifoushouquandenglu']) == false &&
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
    } else {
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
        })('', '/gui/pages/Page135470sal2/index'),
      });
    }
  },
  method_onTapOfXView39: async function () {
    const _this = this;

    if (
      JSON.parse(getApp().gui_global_data['shifoushouquandenglu']) == false &&
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
    } else {
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
        })('', '/gui/pages/Page135452sal2/index'),
      });
    }
  },
  method_onTapOfXView35: async function () {
    const _this = this;

    if (
      JSON.parse(getApp().gui_global_data['shifoushouquandenglu']) == false &&
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
    } else {
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
        })('', '/gui/pages/Page135448sal2/index'),
      });
    }
  },
});
