// React Hook: Check if Overflow
// https://www.robinwieruch.de/react-custom-hook-check-if-overflow/

import { useLayoutEffect, useState } from 'react'

export const useIsOverflow = (ref: React.RefObject<HTMLElement>, callback?: Function) => {
    const [isOverflow, setIsOverflow] = useState(true)

    useLayoutEffect(() => {
        const { current } = ref

        if (current) {
            const hasOverflow = current.scrollHeight > current.clientHeight
            setIsOverflow(hasOverflow)
            if (callback) callback(hasOverflow)
        }
    }, [callback, ref])

    return isOverflow
}
