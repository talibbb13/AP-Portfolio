import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaUser, FaComment } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [hover, setHover] = useState(false);
  const message = watch("message", "");
  const [reCaptchaSuccess, setReCaptchaSuccess] = useState(false);
  const recaptchaRef = useRef();

  const onSubmit = async (data) => {
    if (!reCaptchaSuccess) {
      toast.warn("Please complete the reCAPTCHA first!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      const response = await axios.post(
        import.meta.env.VITE_FORMSPREE_ENDPOINT,
        data
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        reset();
        recaptchaRef.current.reset();
        setReCaptchaSuccess(false);
      } else {
        toast.error("Failed to submit the form. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const handleReCaptcha = (value) => {
    setReCaptchaSuccess(!!value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] pt-32">
      <div className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5 bg-[#0F0F0F] text-white rounded-lg p-8 shadow-lg border border-[#014D43]">
        <ToastContainer />
        <h2 className="Grotesk text-5xl font-bold mb-2 text-center -tracking-[.01em]">
          Contact me
        </h2>
        <p className="text-gray-400 mb-8 text-center Nunito">
          We'd love to hear from you! Whether you'd like to collaborate on a
          project or just say hi. Please use this form to get in touch.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative flex items-center border-b border-gray-600 py-2 transition-all duration-300 focus-within:border-[#014D43]">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="First Name *"
              {...register("firstName", { required: true })}
              className="bg-transparent w-full border-none text-white py-1 px-2 leading-tight focus:outline-none transition-all duration-300"
            />
            {errors.firstName && (
              <span className="absolute right-0 text-red-500">Required</span>
            )}
          </div>
          <div className="relative flex items-center border-b border-gray-600 py-2 transition-all duration-300 focus-within:border-[#014D43]">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Last Name *"
              {...register("lastName", { required: true })}
              className="bg-transparent w-full border-none text-white py-1 px-2 leading-tight focus:outline-none transition-all duration-300"
            />
            {errors.lastName && (
              <span className="absolute right-0 text-red-500">Required</span>
            )}
          </div>
          <div className="relative flex items-center border-b border-gray-600 py-2 transition-all duration-300 focus-within:border-[#014D43]">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="Email *"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address",
                },
              })}
              className="bg-transparent w-full border-none text-white py-1 px-2 leading-tight focus:outline-none transition-all duration-300"
            />
            {errors.email && (
              <span className="absolute right-0 text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="relative flex items-start border-b border-gray-600 py-2 transition-all duration-300 focus-within:border-[#014D43]">
            <FaComment className="text-gray-500 mr-3 mt-2" />
            <textarea
              placeholder="Message"
              {...register("message", { maxLength: 500 })}
              className="bg-transparent w-full border-none text-white py-1 px-2 leading-tight focus:outline-none h-24 resize-none transition-all duration-300"
            />
            <span className="absolute right-0 bottom-0 text-gray-500 text-sm">
              {message.length}/500
            </span>
          </div>

          <div className="reCAPTCHA flex items-start border-b border-gray-600 py-2 transition-all duration-300 focus-within:border-[#014D43]">
            <ReCAPTCHA
              sitekey="6Ldbvf0pAAAAANGWU2vTK7r4PS3OLEG2qAAq54mc"
              onChange={handleReCaptcha}
              theme="dark"
              ref={recaptchaRef}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-white font-bold rounded-lg shadow-md transition-all duration-300 relative overflow-hidden ${
              hover
                ? "bg-[#014D43] text-black"
                : "bg-[#0F0F0F] text-white border border-[#014D43]"
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span
              className={`absolute inset-0 transform bg-[#014D43] transition-transform duration-300 ease-in-out ${
                hover ? "translate-y-0 scale-100" : "translate-y-full scale-y-0"
              }`}
              style={{
                clipPath: "ellipse(150% 100% at 50% 100%)",
              }}
            ></span>
            <span className="relative z-10">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
