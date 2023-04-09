import { useEffect, useState } from 'react'
import Item from './components/Item'

export interface ItemType {
    title: string
    url: string
    video: boolean
    price: number
    images: string[]
    description: string
    id: number
}

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch('./data.json')
            let jsonData
            if (response.status === 200) {
                jsonData = await response.json()
                setData(jsonData)
                console.log('fetch DATA:', jsonData)
            }
        }
        getData()
    }, [])

    return (
        <div className='App'>
            <h1>Конструкторы - {data.length}</h1>
            {data.map((item: ItemType) => {
                return <Item key={item.id} item={item} />
                // return <div>{item.title}</div>
            })}
        </div>
    )
}

export default App
