function WorkspaceCard({work}) {
  return (

    <div className=" bg-[#1d1f21] p-5 rounded-xl">
      <div className="flex gap-2">
        { work.tags.map((tag,index) => (
            <span key={index} className="text-black text-sm whitespace-nowrap font-bold px-2 py-1 rounded-2xl bg-slate-400">{tag}</span>
          ))
        }
      </div>
      <h3 className="font-semibold text-lg mt-3">{work.title}</h3>
      <p className="text-gray-400">{work.description}</p>
      <div className="mt-4 flex flex-col gap-2">
        { work.subtask.length ? work.subtask.map((task, index) => (
          <label key={index} id="todo" className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <span></span>
            <p className="text-base">{task}</p>
          </label>
        ))
          : ""
        }
      </div>
    </div>
  )
}

export default WorkspaceCard