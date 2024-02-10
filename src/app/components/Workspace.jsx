"use client"
import Modal from "./Modal";
import WorkspaceAdd from "./WorkspaceAdd";
import WorkspaceCard from "./WorkspaceCard";
import { useRef, useState } from "react"

const Workspace = () => {
  const [WORKS, setWORKS] = useState([
    {
      type: "new",
      title: "Calculo",
      description: "Something description",
      tags: ["Limites", "Derivadas"],
      subtask: []
    },
    {
      type: "new",
      title: "Español",
      description: "Something description",
      tags: ["Presente simple", "Preterito"],
      subtask: []
    },
    {
      type: "complete",
      title: "Programacion",
      description: "Something description",
      tags: ["Polimorfismo", "Condiciones"],
      subtask: ["Aprender algoritmia", "Aprender c++", "Aprender clases"]
    }
  ])
  const [typeBoard, setTypeBoard] = useState("new");
  const modal = useRef();

  const openModal = (type) => {
    setTypeBoard(type);
    modal.current.show();
  } 

  return (
    <>
      <Modal modal={modal} WORKS={WORKS} setWORKS={setWORKS} typeBoard={typeBoard} />
      <section className="flex text-white gap-5">
        <div className="w-[325px] flex flex-col gap-2 flex-wrap">
          <h2 className="text-sky-500 whitespace-nowrap py-2 px-3 mb-1 rounded-xl flex items-center text-xl font-medium	 gap-2">
            <img className="invert w-8 h-8" src="/new-rq.svg" alt="" />
            New Request <span className="text-gray-600">3</span>
          </h2>
          <WorkspaceAdd openModal={openModal} type="new" />
          { WORKS.filter(work => work.type==="new").map((work,index) => (
              <WorkspaceCard work={work} key={index} />
          ))}
        </div>
        <div className="w-[325px] flex flex-col gap-2">
          <h2 className="text-amber-500 whitespace-nowrap py-2 px-3 mb-1 rounded-xl flex items-center text-xl font-medium	 gap-2">
            <img className="invert w-8 h-8" src="/progress.svg" alt="" />
            In Progress <span className="text-gray-600">8</span>
          </h2>
          <WorkspaceAdd openModal={openModal} type="progress" />
          { WORKS.filter(work => work.type==="progress").map((work,index) => (
              <WorkspaceCard work={work} key={index} />
          ))}
        </div>
        <div className="w-[325px] flex flex-col gap-2">
          <h2 className="text-green-500 whitespace-nowrap py-2 px-3 mb-1 rounded-xl flex items-center text-xl font-medium	 gap-2">
            <img className="invert w-8 h-8" src="/complete.svg" alt="" />
            Complete <span className="text-gray-600">5</span>
          </h2>
          <WorkspaceAdd openModal={openModal} type="complete" />
          { WORKS.filter(work => work.type==="complete").map((work,index) => (
              <WorkspaceCard work={work} key={index} />
          ))}
        </div>
        <div className="w-[325px] flex flex-col gap-2">
          <h2 className="text-violet-500 whitespace-nowrap py-2 px-3 mb-1 rounded-xl flex items-center text-xl font-medium	 gap-2">
            <img className="invert w-8 h-8" src="/archive.svg" alt="" />
            Archive <span className="text-gray-600">11</span>
          </h2>
          <WorkspaceAdd openModal={openModal} type="archive" />
          { WORKS.filter(work => work.type==="archive").map((work,index) => (
              <WorkspaceCard work={work} key={index} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Workspace