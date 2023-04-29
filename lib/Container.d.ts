/// <reference types="react" />
type Props = React.PropsWithChildren<{
    contained: boolean;
}>;
export default function Container({ contained, children }: Props): JSX.Element;
export {};
