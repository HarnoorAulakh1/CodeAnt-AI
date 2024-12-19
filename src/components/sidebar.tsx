import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";
const data = [
  {
    img: "./home.png",
    text: "Repositories",
    onClick: "./repositories",
  },
  {
    img: "./code.png",
    text: "AI Code Review",
    onClick: "./code-review",
  },
  {
    img: "./cloud.png",
    text: "Cloud Security",
    onClick: "./cloud-security",
  },
  {
    img: "./book.png",
    text: "How to use",
    onClick: "./how-to-use",
  },
  {
    img: "./gear.png",
    text: "Setings",
    onClick: "./settings",
  },
];

function Sidebar() {
  const [state, set] = useState("5rem");
  return (
    <div
      className={`pl-2 pt-5 flex flex-col md:justify-between md:items-start overflow-hidden transition-all duration-200 ease-linear h-[${state}] md:h-[100vh] w-full md:w-[18%] `}
    >
      <div className="flex flex-col gap-4 md:gap-8 items-center mr-2 w-full md:hidden">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
            <img src="./Group 37110.png" alt="" />
            <p>Co deAnt AI</p>
          </div>
          <button
            onClick={() =>
              set((x) => {
                return x == "5rem" ? "30rem" : "5rem";
              })
            }
            className="w-10 h-10"
          >
            <img src={state == "5rem" ? "./bars.png" : "./close.png"} alt="" />
          </button>
        </div>
        <select className="w-[90%] mt-2 md:w-[12rem] text-xl border-[1px] border-gray-300 rounded-lg p-2">
          <option value="UtkarshDhairy">UtkarshDhairy</option>
          <option value="Aulakh">Aulakh</option>
          <option value="Grewal">Grewal</option>
          <option value="Randhawa">Randhawa</option>
        </select>
        <div className="flex flex-col md:w-max w-full gap-5 md:gap-4 mt-8">
          {data.map((item) => (
            <Tab img={item.img} text={item.text} onClick={item.onClick} />
          ))}
        </div>
      </div>
      <div className="md:flex flex-col gap-8 justify-start mr-2 hidden">
        <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
          <img src="./Group 37110.png" alt="" />
          <p>CodeAnt AI</p>
        </div>
        <select className="w-[12rem] text-xl border-[1px] border-gray-300 rounded-lg p-2">
          <option value="UtkarshDhairy">UtkarshDhairy</option>
          <option value="Aulakh">Aulakh</option>
          <option value="Grewal">Grewal</option>
          <option value="Randhawa">Randhawa</option>
        </select>
        <div className="flex flex-col gap-4 mt-8">
          {data.map((item) => (
            <Tab img={item.img} text={item.text} onClick={item.onClick} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8 ">
        <Tab img="./report.png" text="report" onClick="" />
        <Tab img="./logout.png" text="logout" onClick="" />
      </div>
    </div>
  );
}

function Tab({
  img,
  text,
  onClick,
}: {
  img: string;
  text: string;
  onClick: string;
}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(onClick)}
      className={`border-0 flex flex-row items-center justify-start pl-5 pr-8 ${
        text === "Repositories" ? "bg-[#1470ef] text-white" : ""
      } gap-4 p-2 rounded-lg cursor-pointer`}
    >
      <img className="" src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default Sidebar;
