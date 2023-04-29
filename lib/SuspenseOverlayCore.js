"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useSetStateOnRender_1 = __importDefault(require("./utils/useSetStateOnRender"));
function SuspenseOverlayCore({ children, fallback, inProp = "open", }) {
    const [suspend, SetSuspend] = (0, useSetStateOnRender_1.default)(false);
    const childrenRef = (0, react_1.useRef)();
    const displayRef = (0, react_1.useRef)();
    (0, react_1.useLayoutEffect)(() => {
        if (suspend && childrenRef.current) {
            if (displayRef.current) {
                childrenRef.current.style.setProperty("display", displayRef.current);
            }
            else {
                childrenRef.current.style.removeProperty("display");
            }
        }
    }, [suspend, childrenRef]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(SetSuspend, { state: true }), children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, react_1.cloneElement)(children, {
                            ref: (elem) => {
                                // Don't lose the value on suspend. Update only if we get a new element.
                                if (elem) {
                                    childrenRef.current = elem;
                                    displayRef.current = elem.style.display;
                                }
                            },
                        }), (0, jsx_runtime_1.jsx)(SetSuspend, {})] }) }), (0, react_1.cloneElement)(fallback, { [inProp]: suspend })] }));
}
exports.default = SuspenseOverlayCore;
