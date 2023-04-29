"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuspenseOverlayCore = exports.defaults = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const Container_1 = __importDefault(require("./Container"));
const Fallback_1 = __importDefault(require("./Fallback"));
const Contained_1 = require("./Overlay/Contained");
const SuspenseOverlayCore_1 = __importDefault(require("./SuspenseOverlayCore"));
exports.SuspenseOverlayCore = SuspenseOverlayCore_1.default;
const GridItem = styled_1.default.div(({ contained }) => contained ? Contained_1.maxGridAreaCss : undefined);
exports.defaults = {
    ChildrenWrapper: GridItem,
    Container: Container_1.default,
    // Omit prop `open`. The prop is set by SuspenseOverlayCore.
    Fallback: Fallback_1.default,
    // If a specific container is not given, default `contained` to `true` – the
    // fallback is contained to be inside the SuspenseOverlay.
    // If a specific container is given, default `contained` to `false` – the
    // fallback is rendered using a portal.
    contained: (props) => typeof props.container === "undefined",
};
function SuspenseOverlay(props) {
    const { ChildrenWrapper = exports.defaults.ChildrenWrapper, Container = exports.defaults.Container, Fallback = exports.defaults.Fallback, children, contained = exports.defaults.contained(props), fallback, ...otherProps } = props;
    const forwardProps = { contained, ...otherProps };
    return ((0, jsx_runtime_1.jsx)(Container, { ...forwardProps, children: (0, jsx_runtime_1.jsx)(SuspenseOverlayCore_1.default, { ...otherProps, fallback: (0, jsx_runtime_1.jsx)(Fallback, { ...forwardProps, children: fallback }), children: (0, jsx_runtime_1.jsx)(ChildrenWrapper, { ...forwardProps, children: children }) }) }));
}
exports.default = SuspenseOverlay;
