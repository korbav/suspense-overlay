import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import styled from "@emotion/styled";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import Grid from "../Grid";
import useMemoizedHTMLElement from "../utils/useMemoizedHTMLElement";
import Backdrop from "./Backdrop";
const MaxSpace = styled(Grid)(({ isFullscreen }) => ({
    position: isFullscreen ? "fixed" : "absolute",
    inset: 0,
}));
export const defaults = {
    Backdrop,
    fullscreenContainer: document.body,
    OverlayPortal: MaxSpace,
};
const Portal = forwardRef(function Portal({ Backdrop = defaults.Backdrop, children, container, fullscreenContainer = defaults.fullscreenContainer, OverlayPortal = defaults.OverlayPortal, }, ref) {
    fullscreenContainer = useMemoizedHTMLElement(fullscreenContainer);
    container !== null && container !== void 0 ? container : (container = fullscreenContainer);
    container = useMemoizedHTMLElement(container);
    const isFullscreen = container === fullscreenContainer;
    return createPortal(_jsx(OverlayPortal, { ref: ref, isFullscreen: isFullscreen, children: _jsx(Backdrop, { children: children }) }), container);
});
export default Portal;
//# sourceMappingURL=Portal.js.map