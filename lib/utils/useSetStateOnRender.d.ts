export default function useSetStateOnRender<T>(initialState: T): [T, ({ state, }: {
    state?: T | undefined;
}) => null];
