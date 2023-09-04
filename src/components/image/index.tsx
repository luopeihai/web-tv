import { useRef } from "react"
import "./index.scss"


interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string,
    alt?: string
}
/**
 *  default image
 *  处理image break 后默认填图
 */
const Image = ({ src = "", alt = "", ...rest }: ImageProps) => {

    const imageRef = useRef<HTMLImageElement>(null);

    function handleError() {
        const imgDom = imageRef.current
        if (imgDom) imgDom.classList.add("error")
    }

    return <img ref={imageRef} src={src} alt={alt} loading="lazy" {...rest} onError={handleError} />
}

export default Image