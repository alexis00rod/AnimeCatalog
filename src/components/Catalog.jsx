import { Card } from "./index"

export const Catalog = ({catalog}) => {
  return (
    <div className='px-1 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
      {catalog.map(element => <Card key={element._id} content={element} />)}
    </div>
  )
}
