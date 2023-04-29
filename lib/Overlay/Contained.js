import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef } from "react";
import Backdrop from "./Backdrop";
export const maxGridAreaCss = css({
    gridArea: "1 / 1",
});
const BackdropGridItem = styled(Backdrop)(maxGridAreaCss);
export const defaults = {
    Backdrop: BackdropGridItem,
};
const Contained = forwardRef(function Contained({ Backdrop = defaults.Backdrop, ...otherProps }, ref) {
    return _jsx(Backdrop, { ref: ref, ...otherProps });
});
export default Contained;
//# sourceMappingURL=Contained.js.map