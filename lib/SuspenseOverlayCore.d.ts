import { Suspense } from "react";
export interface SuspenseOverlayCoreProps extends React.ComponentProps<typeof Suspense> {
    children: React.ReactElement;
    fallback: React.ReactElement;
    inProp?: string;
}
export default function SuspenseOverlayCore({ children, fallback, inProp, }: SuspenseOverlayCoreProps): import("@emotion/react/jsx-runtime").JSX.Element;
