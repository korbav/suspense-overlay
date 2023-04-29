import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import Grid from "./Grid";
export default function Container({ contained, children }) {
    return contained ? _jsx(Grid, { children: children }) : children;
}
//# sourceMappingURL=Container.js.map