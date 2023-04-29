import { useMemo } from "react";
const useMemoizedHTMLElement = (elementOrSelector) => useMemo(() => typeof elementOrSelector === "string"
    ? document.querySelector(elementOrSelector)
    : elementOrSelector, [elementOrSelector]);
export default useMemoizedHTMLElement;
//# sourceMappingURL=useMemoizedHTMLElement.js.map