"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const Grid_1 = __importDefault(require("../Grid"));
const useMemoizedHTMLElement_1 = __importDefault(require("../utils/useMemoizedHTMLElement"));
const Backdrop_1 = __importDefault(require("./Backdrop"));
const MaxSpace = (0, styled_1.default)(Grid_1.default)(({ isFullscreen }) => ({
    position: isFullscreen ? "fixed" : "absolute",
    inset: 0,
}));
exports.defaults = {
    Backdrop: Backdrop_1.default,
    fullscreenContainer: document.body,
    OverlayPortal: MaxSpace,
};
const Portal = (0, react_1.forwardRef)(function Portal({ Backdrop = exports.defaults.Backdrop, children, container, fullscreenContainer = exports.defaults.fullscreenContainer, OverlayPortal = exports.defaults.OverlayPortal, }, ref) {
    fullscreenContainer = (0, useMemoizedHTMLElement_1.default)(fullscreenContainer);
    container ??= fullscreenContainer;
    container = (0, useMemoizedHTMLElement_1.default)(container);
    const isFullscreen = container === fullscreenContainer;
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(OverlayPortal, { ref: ref, isFullscreen: isFullscreen, children: (0, jsx_runtime_1.jsx)(Backdrop, { children: children }) }), container);
});
exports.default = Portal;
