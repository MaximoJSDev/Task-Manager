import { useRef, useState } from "react";

function Modal({modal,WORKS,setWORKS,typeBoard}) {
  const [tags, setTags] = useState([]);
  const formRef = useRef();
  const tagsRef = useRef();

  const closeModal = () => modal.current.close();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    const {title, description} = Object.fromEntries(formData);
    setWORKS([{
      type: typeBoard,
      title,
      description,
      subtasks: [],
      tags: tags
    },...WORKS]);
    closeModal();
    formRef.current.reset();
    setTags([]);
  }

  const handleKeyUp = (evt) => {
    if (evt.code !== "Space") return;
    setTags([...tags, tagsRef.current.value]);
    tagsRef.current.value = "";
  }

  const handleClickTag = (deleteTag) => setTags(tags.filter(tag => tag !== deleteTag));
  
  return (
    <dialog ref={modal} className="min-h-[400px] w-[468px] z-10 bg-[#323940] text-white p-8 rounded-xl outiline-none">
      <form onSubmit={handleSubmit} ref={formRef}
       className="flex flex-col gap-2">
        <label className="flex flex-col font-bold gap-3">
          Titulo
          <input required name="title" className="bg-[#45505a] p-3 rounded-md" type="text" />
        </label>
        <label className="flex flex-col font-bold gap-3">
          Descripcion
          <input required name="description" className="bg-[#45505a] p-3 rounded-md" type="text" />
        </label>
        <label className="flex flex-col font-bold gap-3">
          Añadir subtareas
          <input  name="subtasks" className="bg-[#45505a] p-3 rounded-md" type="text" />
        </label>
        <label className="flex flex-col font-bold gap-3">
          Tags
          <div className="bg-[#45505a] p-3 rounded-md flex flex-wrap gap-1">
            <ul className="flex gap-1">
              { tags.map((tag, index) => (
                  <li onClick={() => handleClickTag(tag)} key={tag+index} className="text-black text-sm whitespace-nowrap font-bold px-2 py-1 rounded-2xl bg-slate-400">{tag}</li>
              ))}
            </ul>
            { tags.length < 3 ? <input onKeyUp={handleKeyUp} ref={tagsRef} name="tags" className="bg-[#45505a] rounded-md px-1 outline-1 outline-cyan-400/20" type="text" /> : "" }
          </div>
        </label>
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded-md bg-blue-500">Guardar</button>
          <button onClick={closeModal} type="button" className="px-3 py-2 rounded-md hover:bg-gray-600/50">Cancelar</button>
        </div>
      </form>
    </dialog>
  )
}

export default Modal