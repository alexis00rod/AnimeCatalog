import { Link } from "react-router-dom"

export const Card = ({content}) => {
    return (
        <article>
            <Link to={`/${content._id}`} className="relative h-full flex flex-col rounded-lg overflow-hidden cursor-pointer">
                <span className="absolute top-2 right-2 px-2 w-max h-8 flex flex-row items-center justify-center text-sm text-white font-semibold bg-teal-500 rounded-md">{content.type}</span>
                <img src={content.image} alt={content.title} className="w-full h-full object-cover" />
                <div className="px-2 py-1 absolute bottom-0 w-full flex flex-row items-center justify-start bg-black/75">
                    <h3 className="px-1 py-1 w-full text-white font-bold">{content.title}</h3>
                </div>
            </Link>
        </article>
    )
}