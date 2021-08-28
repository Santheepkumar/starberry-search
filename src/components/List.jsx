import * as React from "react";
import { useHistory } from "react-router-dom";

const icon = (
  <svg
    className='ml-5 mt-1 w-4 h-4'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M19 9l-7 7-7-7'></path>
  </svg>
);
const headerList = [
  {
    label: "All bedrooms",
    icon,
  },
  {
    label: "Any Neighbourhood",
    icon,
  },
  {
    label: "Min Price",
    icon,
  },
  {
    label: "Max Price",
    icon,
  },
  {
    label: "Sort by",
    icon,
  },
  {
    label: "50 Results",
  },
];

function List() {
  const [list, setList] = React.useState({
    status: "",
    data: [],
  });
  const [dataLimit, setDataLimit] = React.useState(6);
  const history = useHistory();

  React.useEffect(() => {
    setList({
      status: "loadMore",
      data: [...list.data],
    });
    fetch(
      `https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=${dataLimit}`
    )
      .then((response) => response.json())
      .then((data) =>
        setList({
          data,
        })
      )
      .catch((err) => console.log("Error list fetch failed"));
  }, [dataLimit]);

  return (
    <>
      <Header />
      <div className='flex flex-wrap mt-4 mx-6'>
        {list.data.map((eachData) => (
          <div className='w-1/3' key={eachData._id}>
            <div className='mx-4 my-4 relative'>
              <div className='absolute right-0 mx-2 my-2 border border-black rounded-full bg-black opacity-50 p-1'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='white'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokWidth='2'
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path>
                </svg>
              </div>
              <div
                className='cursor-pointer'
                onClick={() =>
                  history.push({
                    pathname: "/detail",
                    state: eachData,
                  })
                }>
                <img
                  alt=''
                  className='object-cover h-72 w-full'
                  src={eachData.Images?.[0]?.url}
                />
              </div>
              <div className='text-center mt-4'>{eachData.Title}</div>

              <div className='text-center text-sm mt-2'>
                {/* <div
                  className='content'
                  dangerouslySetInnerHTML={{ __html: eachData.Description }}></div>
              </div> */}
                1 bedroom appartment for sale
              </div>
              <div className='text-center text-sm mt-3 font-bold'>
                {eachData.Price} €
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mb-4'>
        <button
          className='text-white border text-sm bg-blue-600 p-1 px-2 rounded-md'
          onClick={() => setDataLimit(dataLimit + 6)}>
          {list.status === "loadMore" ? "Wait..." : "More >>"}
        </button>
      </div>
    </>
  );
}

function Header() {
  return (
    <div>
      <h1 className='mt-2 text-center text-3xl text-gray-700 border p-4 bg-gray-200'>
        Header Section
      </h1>
      <h2 className='text-center text-lg font-medium my-6'>
        Property for Sales
      </h2>

      <div className='p-4 mx-4 flex justify-between border-t border-b mt-2'>
        {headerList.map(({ label, icon }) => (
          <div className='flex text-sm' key={label}>
            <span> {label} </span>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
export default List;
