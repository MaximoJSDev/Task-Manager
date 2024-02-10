function WorkspaceHeader() {
  return (
    <header className="flex items-center gap-6 border-b border-b-slate-700 pb-[24px] mb-[24px]">
      <picture className="p-2 bg-blue-600 rounded-md">
        <img className="w-16 h-16" src="/workspace.svg" alt="workspace" />
      </picture>
      <div>
        <h1 className="text-4xl font-bold">School Projects</h1>
        <div className="flex gap-2 opacity-70 mt-1">
          <img src="/board.svg" alt="" />
          <span>12 Boards in workspace</span>
        </div>
      </div>
    </header>
  )
}

export default WorkspaceHeader