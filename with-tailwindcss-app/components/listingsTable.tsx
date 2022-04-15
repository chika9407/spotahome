const ListingsTable = ({ listings }) => {
  return (
    <div>
      <table className="w-full divide-y border-t overflow-x-hidden">
      <thead className="px-4 ">
        <tr>
          <th className="px-5 py-3 cursor-pointer hover:underline text-center">
            Title
          </th>
          <th className= "cursor-pointer hover:underline text-center">
            Link
          </th>
          <th>
            Address
          </th>
          <th>
            City
          </th>
          <th>
            Image
          </th>
        </tr>
      </thead>
      <tbody>
        {listings.map((listing) => {
        <tr className="border-t">
          <td>
            {listing.title}
          </td>
          <td>
            {listing.link}
          </td>
          <td>
            {listing.address}
          </td>
          <td>
            {listing.city}
          </td>
          <td>
            {listing.images?.map((image => {
              <td> {image}</td>
            }))}
          </td>
        </tr>
        })}
      </tbody>

      </table>
     
    </div>
  )
}

export default ListingsTable