import { useState, useEffect, ReactNode, useRef } from "react"
import "./index.scss"

interface ITVList {
    pageSize?: number;
    data: any[];
    renderItem: (item: any, index: number) => ReactNode
}

const TVList = ({ data = [], renderItem, pageSize = 10 }: ITVList) => {
    const [pageIndex, setPageIndex] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [list, setList] = useState<any[]>([])
    const myRef = useRef<HTMLDivElement | null>(null);

    useEffect(function () {
        const dataLength = data.length
        const lastIndex = pageIndex === 0 ? pageSize : pageIndex * pageSize + pageSize
        setList(data.slice(0, dataLength > lastIndex ? lastIndex : dataLength))
        setLoading(false)
    }, [pageIndex, data, pageSize])


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if (scrollTop + windowHeight + 200 > scrollHeight) {
                setPageIndex((index) => index + 1)
                setLoading(true)
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <>
        <div ref={myRef} className="movie-list">
            {list.map((item, index) => renderItem(item, index))}
        </div>
        {loading && <h2 className="loading">loading...</h2>}
        {!data.length && <div className="empty"><h2>Not found data.</h2></div>}

    </>

}

export default TVList