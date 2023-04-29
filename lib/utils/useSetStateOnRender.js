import { useCallback, useLayoutEffect, useState } from "react";
export default function useSetStateOnRender(initialState) {
    const [state, setState] = useState(initialState);
    const SetState = useCallback(function SetState({ state = initialState, }) {
        useLayoutEffect(() => setState(state), [state, setState]);
        return null;
    }, []);
    return [state, SetState];
}
//# sourceMappingURL=useSetStateOnRender.js.map