import * as React from "react";
import { useHistory } from "react-router-dom";

function Login({ doAuth }) {
  const [form, setForm] = React.useState({
    username: null,
    password: null,
  });
  const { push } = useHistory();
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form className='w-full md:w-1/3 bg-white rounded-lg'>
        <div className='flex font-bold justify-center mt-6'>
          <img
            className='h-20 w-20'
            src='https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg'
          />
        </div>
        <h2 className='text-3xl text-center text-gray-700 mb-4'>Login</h2>
        <div className='px-12 pb-10'>
          <div className='w-full mb-2'>
            <div className='flex items-center'>
              <input
                type='text'
                placeholder='Username'
                onChange={(e) =>
                  setForm({
                    ...form,
                    username: e.target.value,
                  })
                }
                className='-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none'
              />
            </div>
          </div>
          <div className='w-full mb-2'>
            <div className='flex items-center'>
              <input
                type='password'
                placeholder='Password'
                className='-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none'
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                doAuth(form, push);
              }}
              className='w-full py-2  mr-10 rounded-full bg-green-600 text-gray-100  focus:outline-none'>
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
