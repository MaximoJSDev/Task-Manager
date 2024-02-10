function WorkspaceAdd({openModal, type}) {
  return (
    <>
      <div onClick={() => openModal(type)} className="flex justify-center w-full py-2 px-4 bg-[#1d1f21] rounded-xl cursor-pointer hover:bg-[#2f3337] transition duration-300">
        <img className="h-7 w-7" src="/add.svg" alt="" />
      </div>
    </>
  )
}

export default WorkspaceAdd