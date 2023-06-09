import { ItemType } from '../App'
import Description from './Description'
import Image from './Image'
import Number from './Number'

type Props = { item: ItemType }

function Item({ item }: Props) {
    if (item.id === 9999) return null

    return (
        <div className={'item ' + item.id}>
            <a id={item.id.toString()}></a>
            <Number number={item.id} />
            <h3 className='title'>
                <a href={item.url} className='link' target='_blank'>
                    {item.title}
                    {item.video && <span className='video'></span>}
                </a>
            </h3>
            <div className='images'>
                {item.images.map((imageURL, index) => {
                    return <Image key={index} url={imageURL} />
                })}
            </div>
            {/* <div className='price'>{item.price + ' p'}</div> */}
            <div className='price'>
                {item.price.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'RUB',
                    minimumFractionDigits: 0,
                })}
            </div>
            <Description text={item.description} />
        </div>
    )
}

export default Item
