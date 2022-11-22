"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var button_1 = require("../mixins/button");
(0, component_1.VantComponent)({
    mixins: [button_1.button],
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        description: String,
        round: {
            type: Boolean,
            value: true,
        },
        zIndex: {
            type: Number,
            value: 100,
        },
        actions: {
            type: Array,
            value: [],
        },
        overlay: {
            type: Boolean,
            value: true,
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true,
        },
        closeOnClickAction: {
            type: Boolean,
            value: true,
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true,
        },
        showTitle: {
            // 是否显示标题
            type: Boolean,
            value: true
        },
        showDefaultSlot: {
            // 是否显示默认slot
            type: Boolean,
            value: true
        },
        showCancel: {
            // 是否显示取消按钮
            type: Boolean,
            value: true
        },
    },
    methods: {
        onSelect: function (event) {
            var _this = this;
            var index = event.currentTarget.dataset.index;
            var _a = this.data, actions = _a.actions, closeOnClickAction = _a.closeOnClickAction, canIUseGetUserProfile = _a.canIUseGetUserProfile;
            var item = actions[index];
            if (item) {
                this.$emit('select', __assign(__assign({}, item), { index: index }));
                if (closeOnClickAction) {
                    this.onClose();
                }
                if (item.openType === 'getUserInfo' && canIUseGetUserProfile) {
                    wx.getUserProfile({
                        desc: item.getUserProfileDesc || '  ',
                        complete: function (userProfile) {
                            _this.$emit('getuserinfo', userProfile);
                        },
                    });
                }
            }
        },
        onCancel: function () {
            this.$emit('cancel');
            this.$emit('close');
        },
        onClose: function () {
            this.$emit('close');
        },
        onClickOverlay: function () {
            this.$emit('click-overlay');
            this.onClose();
        },
    },
});
