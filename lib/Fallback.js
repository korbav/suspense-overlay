"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@emotion/react");
const react_2 = require("react");
const react_transition_group_1 = require("react-transition-group");
const Overlay_1 = __importDefault(require("./Overlay"));
exports.defaults = {
    visibleStyles: {
        backdropFilter: "blur(4px)",
        opacity: 1,
    },
    hiddenStyles: {
        backdropFilter: "blur(0px)",
        opacity: 0,
    },
    timeout: 225,
    cssTransitionProps(props, css) {
        return {
            in: props.open,
            timeout: this.timeout,
            unmountOnExit: true,
            classNames: {
                enter: css(this.hiddenStyles),
                enterActive: css({
                    ...this.visibleStyles,
                    transition: `all ${this.timeout}ms`,
                }),
                enterDone: css(this.visibleStyles),
                exit: css(this.visibleStyles),
                exitActive: css({
                    ...this.hiddenStyles,
                    transition: `all ${this.timeout}ms`,
                }),
            },
        };
    },
    Overlay: Overlay_1.default,
};
function Fallback(props) {
    props = {
        ...exports.defaults,
        ...props,
    };
    const { Overlay, cssTransitionProps, ...otherProps } = props;
    const Overlay_ = Overlay;
    const nodeRef = (0, react_2.useRef)(null);
    return ((0, jsx_runtime_1.jsx)(react_1.ClassNames, { children: ({ css }) => ((0, jsx_runtime_1.jsx)(react_transition_group_1.CSSTransition, { nodeRef: nodeRef, ...props.cssTransitionProps(props, css), children: (0, jsx_runtime_1.jsx)(Overlay_, { ref: nodeRef, ...otherProps }) })) }));
}
exports.default = Fallback;
