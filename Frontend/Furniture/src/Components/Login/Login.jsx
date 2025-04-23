// import React from 'react'
// import img1 from "./../../assets/login.jpg"
// import { NavLink } from 'react-router-dom'

// export default function Login() {
//   return (
//    <>
//    <div className="container mx-auto">
//     <div className="lg:flex p-10">
//       <div className="Login lg:w-1/2">
// <form className="max-w-sm mx-auto lg:p-0 p-10">
//   <h1 className=' font-bold text-2xl mt-10'>WELCOME</h1>
//   <p className='text-lg font-thin mt-4'>Enter your Credentails to access your account</p>
//   <div className="mb-5 mt-10">
//     <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
//     <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exmaple@gmail.com" required />
//   </div>
//   <div className="mb-5">
//     <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//     <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required   placeholder='*******'/>
//     <NavLink to='/forgetpassword' className="text-sm text-green-700 ms-1"> Forget Password</NavLink>
//   </div>
//   <div className="flex items-start mb-5">
//     <div className="flex items-center h-5">
//       <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
//     </div>
//     <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember for 30 days</label>
//   </div>
//   <button type="submit" className="w-full text-white main_color p-2 border rounded-lg">Submit</button>
//   <div className="flex mt-4">
//     <p>Don't have an account?</p>
//     <NavLink to="/signUp" className="Nav_link font-semibold ms-1 text-green-500 rounded-sm">Sign Up</NavLink>
//   </div>
// </form>

//       </div>
//       <div className="hidden lg:block lg:w-1/2 ">
//       <img src={img1} alt="Login img" className='img_login'/>
//       </div>

//     </div>
//    </div>
//    </>
//   )
// }
import React from 'react';
import img1 from "./../../assets/login.jpg";
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/signin', values);
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          setStatus({ success: response.data.message });
          navigate('/'); 
        } else {
          setStatus({ error: "Login failed" });
        }
      } catch (error) {
        setStatus({ error: error.response?.data?.message || "Something went wrong" });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="lg:flex p-10">
          <div className="Login lg:w-1/2">
            <form className="max-w-sm mx-auto lg:p-0 p-10" onSubmit={formik.handleSubmit}>
              <h1 className='font-bold text-2xl mt-10'>WELCOME</h1>
              <p className='text-lg font-thin mt-4'>Enter your credentials to access your account</p>

              <div className="mb-5 mt-10">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps('email')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="example@gmail.com"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input
                  type="password"
                  id="password"
                  {...formik.getFieldProps('password')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="*******"
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )}
                <NavLink to='/forgetpassword' className="text-sm text-green-700 ms-1"> Forget Password</NavLink>
              </div>


              <button
                type="submit"
               className="w-full text-white main_color p-2 border rounded-lg disabled:opacity-50"
                disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
>
  {formik.isSubmitting ? "Logging in..." : "Login"}
</button>


              {formik.status?.success && (
                <p className="text-green-500 mt-2">{formik.status.success}</p>
              )}
              {formik.status?.error && (
                <p className="text-red-500 mt-2">{formik.status.error}</p>
              )}

            </form>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <img src={img1} alt="Login" className='img_login' />
          </div>
        </div>
      </div>
    </>
  );
}
