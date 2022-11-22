"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("../mixins/link");
var component_1 = require("../common/component");
(0, component_1.VantComponent)({
    classes: [
        'title-class',
        'label-class',
        'value-class',
        'right-icon-class',
        'hover-class',
    ],
    mixins: [link_1.link],
    props: {
        title: null,
        value: null,
        icon: String,
        size: String,
        label: String,
        center: Boolean,
        isLink: Boolean,
        required: Boolean,
        clickable: Boolean,
        titleWidth: String,
        customStyle: String,
        arrowDirection: String,
        useLabelSlot: Boolean,
        border: {
            type: Boolean,
            value: true,
        },
        titleStyle: String,
        iconSize: {
            type: Number,
            value: 22
        },
        iconSlot: {
            type: Boolean,
            value: false
        },
        showIcon: {
            type: Boolean,
            value: true
        },
        titleSlot: {
            type: Boolean,
            value: false,
        },
        valueSlot: {
            type: Boolean,
            value: false,
        },
        bodyFull: {
            type: Boolean,
            value: true,
        },
    },
    methods: {
        onClick: function (event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        },
    },
});
