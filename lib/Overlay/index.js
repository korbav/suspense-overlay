import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { forwardRef } from "react";
import Contained from "./Contained";
import Portal from "./Portal";
const Overlay = forwardRef(function Overlay({ contained, ...otherProps }, ref) {
    const Component = contained ? Contained : Portal;
    return _jsx(Component, { ref: ref, ...otherProps });
});
export default Overlay;
//# sourceMappingURL=index.js.map