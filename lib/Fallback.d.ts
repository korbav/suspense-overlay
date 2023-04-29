/// <reference types="react" />
import { ClassNames } from "@emotion/react";
import { CSSTransition } from "react-transition-group";
import Overlay from "./Overlay";
export declare const defaults: {
    visibleStyles: {
        backdropFilter: string;
        opacity: number;
    };
    hiddenStyles: {
        backdropFilter: string;
        opacity: number;
    };
    timeout: number;
    cssTransitionProps(props: Props, css: Parameters<React.ComponentProps<typeof ClassNames>["children"]>[0]["css"]): React.ComponentProps<typeof CSSTransition>;
    Overlay: import("react").ForwardRefExoticComponent<Omit<import("./Overlay").Props, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
};
interface Props extends React.ComponentProps<typeof Overlay> {
    cssTransitionProps?: typeof defaults.cssTransitionProps;
    open: boolean;
    Overlay?: typeof defaults.Overlay;
}
export default function Fallback(props: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
