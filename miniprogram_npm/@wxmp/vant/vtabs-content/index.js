"use strict";
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        tabIndex: {
            type: Number,
            value: 0
        }
    },
    relations: {
        '../vtabs/index': {
            type: 'parent', // 关联的目标节点应为父节点
        }
    },
    methods: {
        calcHeight: function (callback) {
            var query = this.createSelectorQuery();
            query.select(".van-vtabs-content__item").boundingClientRect(function (rect) {
                callback && callback(rect);
            }).exec();
        },
    }
});
