import { useRef } from "react"
import "./index.scss"


interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string,
    alt?: string
}
/**
 *  default image
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