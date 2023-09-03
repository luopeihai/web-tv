import { AiOutlineStar } from "react-icons/ai";
import "./index.scss"

interface RatingProps {
    average?: number
}

/**
 * rating star
 */
const Rating = ({ average = 0 }: RatingProps) => <div className="rating">
    <AiOutlineStar />
    <span>{average}</span>
</div>

export default Rating