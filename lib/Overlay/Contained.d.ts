/// <reference types="react" />
import Backdrop from "./Backdrop";
export declare const maxGridAreaCss: import("@emotion/utils").SerializedStyles;
export declare const defaults: {
    Backdrop: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
        theme?: import("@emotion/react").Theme | undefined;
    }, {}, {}>;
};
interface Props extends React.ComponentProps<typeof Backdrop> {
    Backdrop?: typeof Backdrop;
}
declare const Contained: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Contained;
