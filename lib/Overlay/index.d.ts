/// <reference types="react" />
import Contained from "./Contained";
import Portal from "./Portal";
export interface Props extends React.ComponentProps<typeof Contained>, React.ComponentProps<typeof Portal> {
    contained: boolean;
}
declare const Overlay: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Overlay;
