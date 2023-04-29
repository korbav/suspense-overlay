import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { cloneElement, Suspense, useLayoutEffect, useRef } from "react";
import useSetStateOnRender from "./utils/useSetStateOnRender";
export default function SuspenseOverlayCore({ children, fallback, inProp = "open", }) {
    const [suspend, SetSuspend] = useSetStateOnRender(false);
    const childrenRef = useRef();
    const displayRef = useRef();
    useLayoutEffect(() => {
        if (suspend && childrenRef.current) {
            if (displayRef.current) {
                childrenRef.current.style.setProperty("display", displayRef.current);
            }
            else {
                childrenRef.current.style.removeProperty("display");
            }
        }
    }, [suspend, childrenRef]);
    return (_jsxs(_Fragment, { children: [_jsx(Suspense, { fallback: _jsx(SetSuspend, { state: true }), children: _jsxs(_Fragment, { children: [cloneElement(children, {
                            ref: (elem) => {
                                // Don't lose the value on suspend. Update only if we get a new element.
                                if (elem) {
                                    childrenRef.current = elem;
                                    displayRef.current = elem.style.display;
                                }
                            },
                        }), _jsx(SetSuspend, {})] }) }), cloneElement(fallback, { [inProp]: suspend })] }));
}
//# sourceMappingURL=SuspenseOverlayCore.js.map