import { useEffect, useRef, useState } from 'react'
import { useIsOverflow } from '../hooks/useIsOverflow'

type Props = { text: string }

function Description(props: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [collapsed, setCollapsed] = useState(true)
    useIsOverflow(ref, setCollapsed)

    // useEffect(() => {
    //     if (ref.current) {
    //         const hasOverflow = ref.current.scrollHeight > ref.current.clientHeight
    //         if (hasOverflow) ref.current.classList.add('collapsed')
    //         else ref.current.classList.remove('max-height')
    //     }
    // }, [])

    return (
        <div
            // className='description max-height'
            className={'description ' + (collapsed ? 'collapsed max-height' : '')}
            dangerouslySetInnerHTML={{ __html: props.text }}
            // onClick={(e) => {
            //     const a: HTMLDivElement = e.currentTarget
            //     a.classList.remove('collapsed')
            //     a.classList.remove('max-height')
            // }}
            onClick={(e) => {
                setCollapsed(false)
            }}
            ref={ref}
        ></div>
    )
}

export default Description
