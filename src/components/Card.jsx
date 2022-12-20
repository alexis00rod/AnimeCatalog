import { Link } from "react-router-dom"

export const Card = ({content}) => {
    return (
        <Link to={`/${content._id}`} className="card">
            <img src={content.image} alt={content.title} className="card-img" />
            <div className="card-main">
                <h4 className="text-slate-100 font-semibold">{content.title}</h4>
            </div>
        </Link>
    )
}