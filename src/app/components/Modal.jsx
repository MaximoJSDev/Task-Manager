import { useRef, useState } from "react";

function Modal({modal,WORKS,setWORKS,typeBoard}) {
  const [tags, setTags] = useState([]);
  const [subtasks, setSubtasks] = useState([]);
  const formRef = useRef();
  const tagsRef = useRef();
  const subtaskRef = useRef();

  const closeModal = () => modal.current.close();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    const {title, description} = Object.fromEntries(formData);
    setWORKS([{
      type: typeBoard,
      title,
      description,
      subtask: subtasks,
      tags: tags
    },...WORKS]);
    closeModal();
    formRef.current.reset();
    setTags([]);
    setSubtasks([])
  }

  const handleKeyUp = (evt) => {
    if (evt.code !== "Space") return;
    setTags([...tags, tagsRef.current.value]);
    tagsRef.current.value = "";
  }

  const handleSubtask = (evt) => {
    setSubtasks([...subtasks, subtaskRef.current.value]);
    subtaskRef.current.value = "";
  }

  const handleClickTag = (deleteTag) => setTags(tags.filter(tag => tag !== deleteTag));
  
  return (
    <dialog ref={modal} className="min-h-[400px] w-[468px] z-10 bg-[#323940] text-white p-8 rounded-xl outiline-none">
      <form onSubmit={handleSubmit} ref={formRef}
       className="flex flex-col gap-2">
        <label className="flex flex-col font-semibold gap-3 tracking-wide">
          Title
          <input required name="title" className="bg-[#45505a] p-3 rounded-md" type="text" />
        </label>
        <label className="flex flex-col font-semibold gap-3 tracking-wide">
          Description
          <input required name="description" className="bg-[#45505a] p-3 rounded-md" type="text" />
        </label>
       <label className="flex flex-col font-semibold gap-3">
        <div>
          <span>Topics</span>&nbsp;
          <span className="font-normal opacity-60">(separate with spaces)</span>
        </div>
         <div className="bg-[#45505a] p-3 rounded-md flex flex-wrap gap-1">
           <ul className="flex gap-1">
            { tags.map((tag, index) => (
                <li onClick={() => handleClickTag(tag)} key={tag+index} className="text-black text-sm whitespace-nowrap font-bold px-2 py-1 rounded-2xl bg-slate-300">{tag}</li>
              ))
            }
           </ul>
           { tags.length < 3 ? <input onKeyUp={handleKeyUp} ref={tagsRef} name="tags" className="bg-[#45505a] rounded-md px-1 outline-1 outline-cyan-400/20" type="text" /> : "" }
         </div>
       </label>
        <label className="flex flex-col font-semibold gap-3">
          <div>
            <span>Add subtask</span>&nbsp;
            <span className="font-normal opacity-60">(Optional)</span>
          </div>
          <div className="flex pl-4 gap-3 rounded-md">
            <div id="todo" className="flex items-center gap-2">
              <input checked={false} readOnly type="checkbox" name="" id="" />
              <span></span> 
            </div>
            <div className="flex w-full">
              <input ref={subtaskRef} placeholder="New task" name="subtasks" className="grow outline-0 bg-[#45505a] p-2 rounded-l-md" type="text" />
              <button onClick={handleSubtask} type="button" className="bg-slate-500 p-2 rounded-r-md">Enter</button>
            </div>
          </div>
        </label>
        { subtasks.map((task,index) => (
            <label id="todo" className="flex items-center gap-2 px-4" key={task+index}>
              <input type="checkbox" name="" id="" />
              <span></span>
              <p className="text-base p-2">{task}</p>
            </label>
          ))
        }
        <div className="flex gap-2 mt-4">
          <button type="submit" className="grow px-3 py-2 rounded-md bg-teal-600 hover:bg-teal-500 transition duration-200">Save</button>
          <button onClick={closeModal} type="button" className="grow px-3 py-2 rounded-md hover:bg-gray-600/50 transition duration-200">Cancel</button>
        </div>
      </form>
    </dialog>
  )
}

export default Modal