"use strict";
Component({
    options: {
        addGlobalClass: true,
        // 指定所有 _ 开头的数据字段为纯数据字段
        pureDataPattern: /^_/,
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        vtabs: { type: Array, value: [] },
        tabBarClass: { type: String, value: '' },
        activeClass: { type: String, value: '' },
        tabLineColor: { type: String, value: '#ff0000' },
        tabInactiveTextColor: { type: String, value: '#000000' },
        tabActiveTextColor: { type: String, value: '#ff0000' },
        tabInactiveBgColor: { type: String, value: '#eeeeee' },
        tabActiveBgColor: { type: String, value: '#ffffff' },
        activeTab: { type: Number, value: 0 },
        animation: { type: Boolean, value: true },
        leftWidth: { type: Number, value: 110 },
    },
    data: {
        currentView: 0,
        contentScrollTop: 0,
        _heightRecords: [],
        _contentHeight: {},
        _contentTarget: []
    },
    observers: {
        activeTab: function (activeTab) {
            this.scrollTabBar(activeTab);
        }
    },
    relations: {
        '../vtabs-content/index': {
            type: 'child',
            linked: function (target) {
                // @ts-ignore
                this.data._contentTarget.push(target);
            },
            unlinked: function (target) {
                delete this.data._contentHeight[target.data.tabIndex];
            }
        }
    },
    lifetimes: {
        attached: function () {
        },
        ready: function () {
            this.calcChildrenHeight();
        }
    },
    methods: {
        calcChildrenHeight: function () {
            var _this = this;
            var _loop_1 = function (index) {
                var target = this_1.data._contentTarget[index];
                if (target) {
                    // @ts-ignore
                    target.calcHeight(function (rect) {
                        // @ts-ignore
                        _this.data._contentHeight[target.data.tabIndex] = rect.height;
                        // @ts-ignore
                        if (_this._calcHeightTimer) {
                            // @ts-ignore
                            clearTimeout(_this._calcHeightTimer);
                        }
                        // @ts-ignore
                        _this._calcHeightTimer = setTimeout(function () { _this.calcHeight(); }, 100);
                    });
                }
            };
            var this_1 = this;
            for (var index = 0; index < this.data._contentTarget.length; index++) {
                _loop_1(index);
            }
        },
        calcHeight: function () {
            var length = this.data.vtabs.length;
            var _contentHeight = this.data._contentHeight;
            var _heightRecords = [];
            var temp = 0;
            for (var i = 0; i < length; i++) {
                // @ts-ignore
                _heightRecords[i] = temp + (_contentHeight[i] || 0);
                temp = _heightRecords[i];
            }
            this.data._heightRecords = _heightRecords;
            // console.log('_heightRecords', _heightRecords)
        },
        scrollTabBar: function (index) {
            var len = this.data.vtabs.length;
            if (len === 0)
                return;
            var currentView = index < 6 ? 0 : index - 5;
            if (currentView >= len)
                currentView = len - 1;
            this.setData({ currentView: currentView });
        },
        handleTabClick: function (e) {
            var _heightRecords = this.data._heightRecords;
            var index = e.currentTarget.dataset.index;
            var contentScrollTop = _heightRecords[index - 1] || 0;
            this.triggerEvent('tabclick', { index: index });
            this.setData({
                activeTab: index,
                contentScrollTop: contentScrollTop
            });
        },
        handleContentScroll: function (e) {
            var _heightRecords = this.data._heightRecords;
            if (_heightRecords.length === 0)
                return;
            var length = this.data.vtabs.length;
            var scrollTop = e.detail.scrollTop;
            var index = 0;
            if (scrollTop >= _heightRecords[0]) {
                for (var i = 1; i < length; i++) {
                    if (scrollTop >= _heightRecords[i - 1] && scrollTop < _heightRecords[i]) {
                        index = i;
                        break;
                    }
                }
            }
            if (index !== this.data.activeTab) {
                this.triggerEvent('change', { index: index });
                this.setData({ activeTab: index });
            }
        }
    }
});
