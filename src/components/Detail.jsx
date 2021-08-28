import React from "react";

function Detail(props) {
  const details = props.location.state;
  return (
    <div className='max-w-5xl mx-auto'>
      <h1 class='mt-2 mb-2 text-center text-3xl text-gray-700 border p-4 bg-gray-200'>
        Header Section
      </h1>
      <div className='flex justify-between'>
        <div className='w-7/12 grid grid-cols-2'>
          {details.Images.map((img, idx) => {
            if (idx > 2) {
              return null;
            }
            if (idx === 0) {
              return (
                <div className='col-span-2 px-2 pt-2'>
                  <img
                    className='object-cover h-full w-full'
                    src={img.url}
                    alt=''
                  />
                </div>
              );
            }
            return (
              <div className='pl-2 py-2 pr-1'>
                <img
                  className='object-cover h-40 w-full'
                  src={img.url}
                  alt=''
                />
              </div>
            );
          })}
        </div>
        <div className='w-5/12 py-2'>
          <div className='flex justify-end space-x-2 border-b pb-4 mx-2'>
            <span>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='black'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'></path>
              </svg>
            </span>
            <span>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='black'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path>
              </svg>
            </span>
          </div>
          <div className='m-2'>
            <div className='space-y-2'>
              <div className='font-bold'>
                {details.Price} €
                <span className='pl-2 text-xs font-normal border-r pr-2'>
                  {details.Bedrooms} bed
                </span>
                <span className='text-xs font-normal ml-2'>
                  {details.Floor_Area} sqm
                </span>
              </div>
              <div>1 bedroom appartment for sale</div>
              <div className='flex text-yellow-400 underline'>
                <svg
                  className='w-4 h-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path>
                </svg>
                <span className='text-xs font-bold'>Please contact us</span>
              </div>
            </div>
            <button className='text-xs text-white bg-black w-full font-bold py-2 mt-6'>
              CONTACT AGENT
            </button>
            <div className='mt-6 pb-2 space-y-2'>
              <h3 className='border-b pb-2'>FACTS & FEATURES</h3>
              <div className='flex justify-between'>
                <span className='font-semibold text-gray-700 text-sm'>
                  Neighbourhood:
                </span>
                <span className='text-xs mt-1'>Some Neighbourhood</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-semibold text-gray-700 text-sm'>
                  Price per sqm:
                </span>
                <span className='text-xs mt-1'>{details.Price_Per_Sqm} €</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-semibold text-gray-700 text-sm'>
                  Brochure:
                </span>
                <a
                  className='text-xs mt-1 underline cursor-pointer'
                  href={details.Brochure?.[0]?.url}>
                  Download Brochure
                </a>
              </div>
              <div className='flex justify-between'>
                <span className='font-semibold text-gray-700 text-sm'>
                  Floor plan:
                </span>
                <a
                  href={details.Floor_Plans?.[0]?.url}
                  className='text-xs mt-1 underline cursor-pointer'>
                  View Floor plan
                </a>
              </div>
            </div>
            <p className='mt-8'>
              Description is too long Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
            <div className='flex mt-10'>
              <div className='rounded-full'>
                <img
                  className='w-16 h-16'
                  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                  alt=''
                />
              </div>
              <div className='space-y-1'>
                <div className='font-bold ml-6 text-sm'>
                  {details.Negotiator.Name}
                </div>
                <div className='font-normal text-gray-600 ml-6 text-xs'>
                  {details.Negotiator.Designation}
                </div>
                <div>
                  <span className='font-normal text-gray-600 ml-6 text-sm'>
                    +{details.Negotiator.Phone}
                  </span>
                  <span className='ml-2 border-l'>
                    <a
                      href={`mailto:${details.Negotiator.Email}`}
                      className='text-sm text-gray-600 ml-2 underline'>
                      Email
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
