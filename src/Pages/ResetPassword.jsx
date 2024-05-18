import React from "react";
import icon from "../assets/images/SurveyBuilderIcon.png";
import Reset from "../svg components/Reset";
import Email from "../Icons-svg/Email";

function ResetPassword() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Panel */}
      <div className="sm:w-1/2 bg-white flex justify-center items-center mb-80">
        <div className="w-[480px] h-32  ">
          <h1 className="text-2xl font-medium  font-Lato">
            Reset Your Password
          </h1>
          <p className="font-Lato text-xs mt-4">
            Enter the email address associated with your account and we{" "}
            <br></br> will send you a link to reset your password
          </p>
          <p className="font-Lato font-medium text-sm mt-4">Email:</p>
          <form>
            <div className="relative">
              <div className="absolute mt-4 ml-3">
                <Email />
                </div>
              </div>
              <input
                type="email"
                className="w-[80%] h-10 border-[2px] border-[#CEE1FC] rounded-lg mt-2 text-xs px-9"
                placeholder="Enter your business email"
              ></input>
            

            <button className="w-[50%] ml-16  h-10 bg-[#3498DB] text-white rounded-lg mt-11">
              Continue
            </button>
            
            <p className="text-xs font-medium text-[#3498DB] mt-9 ml-36">
              Back to Sign in
            </p>
          </form>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-1/2 bg-custom-gradient relative">
        <div className="h-full flex flex-col justify-center items-center sm:items-start sm:flex-row">
          <div className="grid grid-cols-1 md:grid-cols-1  items-center w-full sm:w-auto sm:ml-11   relative">
            {/* Image */}
            <div className="justify-self-center absolute  ">
              <img
                src={icon}
                alt="Description of image"
                className="w-full sm:w-auto h-[101px] sm:h-[121px] mb-[350px] "
              />
            </div>

            {/* Reset Button */}
            <div className="justify-self-center mt-40  sm:mt-44">
              <Reset className="w-full md:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
