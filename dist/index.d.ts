/// <reference types="react" />
import * as _tanstack_react_query from '@tanstack/react-query';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare const useRickAndMorty: () => _tanstack_react_query.UseQueryResult<{
    info: {
        count: number;
    };
}, unknown>;

export { Button, useRickAndMorty };
