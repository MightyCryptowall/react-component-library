import { rest } from 'msw'
import * as React from 'react'
import { renderHook, waitFor } from '@testing-library/react'
// import { server } from '../setupTests'
import { createWrapper } from '../utils'
import useRickAndMorty from './useRickAndMorty'

describe('query hook', () => {
    test('successful query hook', async () => {
        const { result } = renderHook(() => useRickAndMorty(), {
            wrapper: createWrapper()
        })

        console.log(result.current);
        await waitFor(() => expect(result.current.isSuccess).toBe(true))

        expect(result.current.data?.info.count).toBe(826)
    })

    // test('failure query hook', async () => {
    //     // server.use(
    //     //     rest.get('*', (req, res, ctx) => {
    //     //         return res(ctx.status(500))
    //     //     })
    //     // )

    //     const { result } = renderHook(() => useRickAndMorty(), {
    //         wrapper: createWrapper()
    //     })

    //     await waitFor(() => expect(result.current.isError).toBe(true))

    //     expect(result.current.error).toBeDefined()
    // })
})