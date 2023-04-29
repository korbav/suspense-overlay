"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useMemoizedHTMLElement = (elementOrSelector) => (0, react_1.useMemo)(() => typeof elementOrSelector === "string"
    ? document.querySelector(elementOrSelector)
    : elementOrSelector, [elementOrSelector]);
exports.default = useMemoizedHTMLElement;
