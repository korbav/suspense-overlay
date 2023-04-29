import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import styled from "@emotion/styled";
import Container from "./Container";
import Fallback from "./Fallback";
import { maxGridAreaCss } from "./Overlay/Contained";
import SuspenseOverlayCore from "./SuspenseOverlayCore";
const GridItem = styled.div(({ contained }) => contained ? maxGridAreaCss : undefined);
export const defaults = {
    ChildrenWrapper: GridItem,
    Container,
    // Omit prop `open`. The prop is set by SuspenseOverlayCore.
    Fallback: Fallback,
    // If a specific container is not given, default `contained` to `true` – the
    // fallback is contained to be inside the SuspenseOverlay.
    // If a specific container is given, default `contained` to `false` – the
    // fallback is rendered using a portal.
    contained: (props) => typeof props.container === "undefined",
};
export default function SuspenseOverlay(props) {
    const { ChildrenWrapper = defaults.ChildrenWrapper, Container = defaults.Container, Fallback = defaults.Fallback, children, contained = defaults.contained(props), fallback, ...otherProps } = props;
    const forwardProps = { contained, ...otherProps };
    return (_jsx(Container, { ...forwardProps, children: _jsx(SuspenseOverlayCore, { ...otherProps, fallback: _jsx(Fallback, { ...forwardProps, children: fallback }), children: _jsx(ChildrenWrapper, { ...forwardProps, children: children }) }) }));
}
export { SuspenseOverlayCore };
//# sourceMappingURL=main.js.map