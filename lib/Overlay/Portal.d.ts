/// <reference types="react" />
import Backdrop from "./Backdrop";
declare const MaxSpace: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & {
    isFullscreen: boolean;
}, {}, {}>;
export declare const defaults: {
    Backdrop: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    fullscreenContainer: HTMLElement;
    OverlayPortal: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
        theme?: import("@emotion/react").Theme | undefined;
    } & {
        isFullscreen: boolean;
    }, {}, {}>;
};
interface Props {
    Backdrop?: typeof Backdrop;
    children?: React.ComponentProps<typeof Backdrop>["children"];
    container?: string | HTMLElement;
    fullscreenContainer?: string | HTMLElement;
    OverlayPortal?: typeof MaxSpace;
}
declare const Portal: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export default Portal;
