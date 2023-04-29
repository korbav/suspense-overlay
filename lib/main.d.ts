import { Suspense } from "react";
import Container from "./Container";
import Fallback from "./Fallback";
import SuspenseOverlayCore from "./SuspenseOverlayCore";
export declare const defaults: {
    ChildrenWrapper: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & {
        contained: boolean;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    Container: typeof Container;
    Fallback: (props: Omit<React.ComponentProps<typeof Fallback>, "open">) => ReturnType<typeof Fallback>;
    contained: (props: Props) => boolean;
};
interface Props extends React.ComponentProps<typeof Suspense>, Omit<React.ComponentProps<typeof SuspenseOverlayCore>, "children" | "fallback">, Omit<React.ComponentProps<typeof Fallback>, "contained" | "suspend" | "open" | "children"> {
    ChildrenWrapper?: typeof defaults.ChildrenWrapper;
    Container?: typeof defaults.Container;
    Fallback?: typeof defaults.Fallback;
    contained?: boolean;
}
export default function SuspenseOverlay(props: Props): JSX.Element;
export { SuspenseOverlayCore };
