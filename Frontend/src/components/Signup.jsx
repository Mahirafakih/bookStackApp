import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signed up Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users:", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error:" + err.response.data.message);
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center dark:bg-slate-800">
        <div className=" w-[600px] ">
          <div className="modal-box text-black">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl">Signup</h3>
              <div className="mt-4 space-y-2">
                <span className="text-lg font-medium">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-96 px-3 py-2 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span className="text-lg font-medium">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-96 px-3 py-2 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span className="text-lg font-medium">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-96 px-3 py-2 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="text-center justify-around mt-4">
                <button className="bg-pink-500 text-white w-96 font-semibold text-xl rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="mt-2 text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                </p>
              </div>
              <Login />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
