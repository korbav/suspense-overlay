"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = exports.maxGridAreaCss = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const react_2 = require("react");
const Backdrop_1 = __importDefault(require("./Backdrop"));
exports.maxGridAreaCss = (0, react_1.css)({
    gridArea: "1 / 1",
});
const BackdropGridItem = (0, styled_1.default)(Backdrop_1.default)(exports.maxGridAreaCss);
exports.defaults = {
    Backdrop: BackdropGridItem,
};
const Contained = (0, react_2.forwardRef)(function Contained({ Backdrop = exports.defaults.Backdrop, ...otherProps }, ref) {
    return (0, jsx_runtime_1.jsx)(Backdrop, { ref: ref, ...otherProps });
});
exports.default = Contained;
