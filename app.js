import qs from 'qs';
const GUI_GLOBAL_DATA = {
  gui_global_data: {
    // 全局变量和方法
    shifouyaotiaozhuandaoshouquanyemian: false,
    zhiwei: "",
    suoshubumen: "",
    jigoumingcheng: "",
    jigouID: "",
    yonghuming: "",
    jigouorgCode: "",
    quanjudizhi: "http://36.152.205.254:52007/",
    shifoushouquandenglu: false,
    token: "",
    quanjuIPdizhi: () => {
      const _this = this;

      return 'http://36.152.205.254:52007';
    }
  },
  qs
};
App({ ...GUI_GLOBAL_DATA
});