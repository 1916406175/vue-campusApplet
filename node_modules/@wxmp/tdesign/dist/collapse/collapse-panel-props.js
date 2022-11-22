const props = {
    content: {
        type: String,
    },
    disabled: {
        type: Boolean,
        value: null,
    },
    expandIcon: {
        type: Boolean,
        value: true,
    },
    externalClasses: {
        type: Array,
    },
    header: {
        type: String,
    },
    headerRightContent: {
        type: String,
    },
    value: {
        type: String,
        optionalTypes: [Number],
    },
};
export default props;
