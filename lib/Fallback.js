import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { ClassNames } from "@emotion/react";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Overlay from "./Overlay";
export const defaults = {
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
    Overlay,
};
export default function Fallback(props) {
    props = {
        ...defaults,
        ...props,
    };
    const { Overlay, cssTransitionProps, ...otherProps } = props;
    const Overlay_ = Overlay;
    const nodeRef = useRef(null);
    return (_jsx(ClassNames, { children: ({ css }) => (_jsx(CSSTransition, { nodeRef: nodeRef, ...props.cssTransitionProps(props, css), children: _jsx(Overlay_, { ref: nodeRef, ...otherProps }) })) }));
}
//# sourceMappingURL=Fallback.js.map