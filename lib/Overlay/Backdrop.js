"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Backdrop = styled_1.default.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
exports.default = Backdrop;
