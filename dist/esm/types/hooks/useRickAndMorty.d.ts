declare const useRickAndMorty: () => import("@tanstack/react-query").UseQueryResult<{
    info: {
        count: number;
    };
}, unknown>;
export default useRickAndMorty;
