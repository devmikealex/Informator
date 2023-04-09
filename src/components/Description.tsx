import { useEffect, useRef } from 'react'

type Props = { text: string }

function Description(props: Props) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            const hasOverflow = ref.current.scrollHeight > ref.current.clientHeight
            if (hasOverflow) ref.current.classList.add('collapsed')
            else ref.current.classList.remove('max-height')
        }
    }, [])

    return (
        <div
            className='description max-height'
            dangerouslySetInnerHTML={{ __html: props.text }}
            onClick={(e) => {
                const a: HTMLDivElement = e.currentTarget
                a.classList.remove('collapsed')
                a.classList.remove('max-height')
            }}
            ref={ref}
        ></div>
    )
}

export default Description
