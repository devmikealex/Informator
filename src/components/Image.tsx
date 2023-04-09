type Props = { url: string }

function Image(props: Props) {
    return (
        <div className='image'>
            <a href={props.url} target='_blank'>
                <img src={props.url} alt='' />
            </a>
        </div>
    )
}

export default Image
