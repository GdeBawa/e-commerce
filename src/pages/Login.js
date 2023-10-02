import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { Loading } from "../components";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userState, login } = useUserContext();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    if (userState.userId) {
      navigate("/");
    }
  });

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className="w-full ">
          <img
            className="mx-auto block my-auto h-24"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900 capitalize">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* user error check menggunakan ternary operator*/}
        {userState.error ? (
          <div
            className="bg-orange-100 border-1-4 border-orange-500 text-orang-700 p-4"
            role="alert"
          >
            {userState.error.message}
          </div>
        ) : null}
        {userState.loading && <Loading />}
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={submitHandler}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                placeholder="Type your email address here"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 underline capitalize"
                >
                  forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                placeholder="Type your password here"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 capitalize"
            >
              sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            <span className="ml-1">Start a 14 day free trial</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
