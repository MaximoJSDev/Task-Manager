export function Aside() {
  
  return (
    <div className="w-[370px] px-10">
      <h3 className="h-[80px] bold text-3xl font-bold	flex items-center gap-4 mb-[48px]">
        <img className="w-14 h-14" src="/app.svg" alt="logo" />
        Task Manager
      </h3>
      <h3 className="flex justify-between items-center text-2xl font-bold">
        Workspaces
        <div className="p-2 rounded-full transition duration-200 hover:bg-black/10 cursor-pointer">
          <img src="/add.svg" alt="" />
        </div>
      </h3>
      <ul className="flex flex-col gap-6 mt-6">
        <li className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <img className="" src="/down.svg" alt="down" />
            <picture className="p-[8px] bg-purple-500 rounded-full">
              <img className="w-6 h-6" src="/workspace.svg" alt="workspace" />
            </picture>
            <span>Human Resource</span>
          </div>
          <img src="/dots.svg" alt="" />
        </li>
        <li className="flex items-center justify-between gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <img className="" src="/down.svg" alt="down" />
            <picture className="p-[8px] bg-blue-500 rounded-full">
              <img className="w-6 h-6" src="/workspace.svg" alt="workspace" />
            </picture>
            <span>School Projects</span>
          </div>
          <img src="/dots.svg" alt="" />
        </li>
        <li className="flex items-center justify-between gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <img className="" src="/down.svg" alt="down" />
            <picture className="p-[8px] bg-amber-500 rounded-full">
              <img className="w-6 h-6" src="/workspace.svg" alt="workspace" />
            </picture>
            <span>Agency Branding</span>
          </div>
          <img src="/dots.svg" alt="" />
        </li>
        <li className="flex items-center justify-between gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <img className="" src="/down.svg" alt="down" />
            <picture className="p-[8px] bg-green-500 rounded-full">
              <img className="w-6 h-6" src="/workspace.svg" alt="workspace" />
            </picture>
            <span>Development Stuff</span>
          </div>
          <img src="/dots.svg" alt="" />
        </li>
      </ul>
    </div>
  )
}