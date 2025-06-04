import ResumeContext from "./ResumeContext";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumeState = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => {
      setLoading(true);
    },
    onAfterPrint: () => {
      setLoading(false);
    },
  });

  const initialData = {
    personalData: {
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNI3kQLeYMnpy05PhEiuzS1rtRmNVL7VKvwcE4ACmQSQT1rRmUO5mHLyjH-mGHq0ueUQY&usqp=CAU",
      name: "Your Name",
      summary:
"This is placeholder text used to demonstrate the layout of content on a page. It doesn't have actual meaning, but gives an impression of how real text will appear in the final design. By using this, designers can focus on visual elements without being distracted by readable content."      profile: "Work Profile",
      address: "Address Line",
      phone: "Phone Number",
      email: "Email Address",
      skill: "Your, Skills, are, shown, here",
    },
    projectData: {
      projectTitles: { pTitle1: "Project Title 1" },
      projectDesc: { pDescription1: "Project Description 1" },
    },
    educationData: {
      educationTitles: { eTitle1: "Education Title 1" },
      educationDesc: { eDescription1: "Education Description 1" },
    },
    workData: {
      workTitles: { wTitle1: "Work Title 1" },
      workDesc: { wDescription1: "Work Description 1" },
    },
    awardData: {
      awards:
        "Certificate of Appreciation - 2023, Certificate of Appreciation - 2024",
    },
  };

  const [themeData, setThemeData] = useState(initialData);
  const [checkProj, setCheckProj] = useState(false);
  const [checkWork, setCheckWork] = useState(false);
  const [checkAward, setCheckAward] = useState(false);
  const [loading, setLoading] = useState(false);
  //Change bellow two state for create any new Theme
  const [showComponent, setShowComponent] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("Theme1");
  const [selectBtn, setSelectBtn] = useState(true);

  return (
    <ResumeContext.Provider
      value={{
        initialData,
        selectBtn,
        setSelectBtn,
        checkAward,
        setCheckAward,
        componentRef,
        handlePrint,
        currentTheme,
        setCurrentTheme,
        showComponent,
        setShowComponent,
        loading,
        setLoading,
        themeData,
        setThemeData,
        checkProj,
        checkWork,
        setCheckProj,
        setCheckWork,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;
