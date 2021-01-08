import React, {useEffect, useState} from 'react'

const App: React.FC = () => {

    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async () => {
            const req = await fetch('http://localhost:5000/news/' + page)
            const res = await req.json()

            setNews(res)

            console.log(news)
        })()
    }, [])

    return (
        <>
            {news.map((post: {title: string, content: string, link: string}) =>
                <div key={post.title}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <a href={post.link}>Подробнее...</a>
                </div>
            )}
            <button>{page}</button>
        </>
    )
}

export default App
