"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Contained_1 = __importDefault(require("./Contained"));
const Portal_1 = __importDefault(require("./Portal"));
const Overlay = (0, react_1.forwardRef)(function Overlay({ contained, ...otherProps }, ref) {
    const Component = contained ? Contained_1.default : Portal_1.default;
    return (0, jsx_runtime_1.jsx)(Component, { ref: ref, ...otherProps });
});
exports.default = Overlay;
