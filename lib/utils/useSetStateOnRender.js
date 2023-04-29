"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useSetStateOnRender(initialState) {
    const [state, setState] = (0, react_1.useState)(initialState);
    const SetState = (0, react_1.useCallback)(function SetState({ state = initialState, }) {
        (0, react_1.useLayoutEffect)(() => setState(state), [state, setState]);
        return null;
    }, []);
    return [state, SetState];
}
exports.default = useSetStateOnRender;
