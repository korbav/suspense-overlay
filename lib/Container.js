"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Grid_1 = __importDefault(require("./Grid"));
function Container({ contained, children }) {
    return contained ? (0, jsx_runtime_1.jsx)(Grid_1.default, { children: children }) : children;
}
exports.default = Container;
