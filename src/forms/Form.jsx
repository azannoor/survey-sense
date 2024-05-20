import React, { useState } from "react";
import CustomDropdown from "../components/CustomDropdown";

const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "Data Science",
    "Machine Learning",
    "Cyber Security",
    "UI/UX Design",
    "Cloud Computing",
    "Game Development",
    "Blockchain Development",
    "Internet of Things (IoT)",
    "Augmented Reality (AR) Development",
    "Virtual Reality (VR) Development",
    "DevOps",
    "Artificial Intelligence (AI)",
    "Big Data",
    "E-commerce",
    "Healthcare IT",
    "Finance Technology (Fintech)",
    "EdTech",
  ];
  

const languages = ["JavaScript", "Python", "Java", "C++", "Go", "Ruby"];

const Form = () => {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Survey Title:", surveyTitle);
    console.log("Selected Project Type:", selectedProjectType);
    console.log("Selected Language:", selectedLanguage);
  };

  return (
    <div className="h-screen bg-white">
      {/* Static header */}
      <div className="h-24 bg-custom-gradient flex items-center justify-center text-black">
        Header Content Here
      </div>

      {/* Form */}
      <div className="flex mt-3 ">
        <form
          className="ml-[50px] mt-[50px] md:ml-[120px] md:mt-[80px] w-full max-w-[800px]" 
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-medium mb-4 text-primary">
            Create New Survey
          </h1>
          <p className="text-paragraph text-sm">
            Enter the details of your project.
          </p>

          <div className="mt-9 mb-4">
            <label
              htmlFor="surveyTitle"
              className="block text-gray-700 mb-2 font-medium"
            >
              Survey Title:
            </label>
            <input
              type="text"
              
              placeholder="Enter survey name"
              className="block md:w-full px-4 py-2 border-[1.5px] border-[#CEE1FC] rounded-lg focus:outline-none"
              value={surveyTitle}
              onChange={(e) => setSurveyTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="projectType"
              className="block text-gray-700 mb-2 font-medium"
            >
              Select or search your project type
            </label>
            <CustomDropdown
              options={projectTypes}
              value={selectedProjectType}
              onChange={(value) => setSelectedProjectType(value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="language"
              className="block text-gray-700 mb-2 font-medium"
            >
              Select or search your language
            </label>
            <CustomDropdown
              options={languages}
              value={selectedLanguage}
              onChange={(value) => setSelectedLanguage(value)}
            />
          </div>

          <div className="flex justify-center"> {/* Center the button horizontally */}
            <button
              type="submit"
              className="w-40 bg-primary font-Lato text-white py-2  rounded-lg mt-20"
            >
              Create Survey
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
