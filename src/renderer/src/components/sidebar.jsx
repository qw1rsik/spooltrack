import { Home, FolderKanban, Box, Package, Settings } from 'lucide-react'

const buttons_up = [
  { label: "Главная", icon: Home },
  { label: "Проекты", icon: FolderKanban },
  { label: "Филамент", icon: Box },
  { label: "Упаковка", icon: Package },
];

function SideBar({ activePage, setActivePage }) {
  return (
    <div className="flex flex-col justify-between h-screen bg-[var(--bg-color)] text-[color:var(--second-color)] w-[var(--sidebar-width)] text-[length:var(--sidebar-font)] py-3">
      <div className="flex flex-col gap-4">
        <div className="text-[color:var(--text-color)] text-4xl font-bold px-4 py-1">
          <span className="text-[color:var(--text-acent-color)]">Spool</span>Track
        </div>
        <div className='px-2'>
          {buttons_up.map(({ label, icon: Icon }, index) => {
            const isActive = activePage === label;
            return (
              <button
                key={index}
                onClick={() => setActivePage(label)}
                className={`flex items-center gap-3 text-left px-3 py-2 rounded-2xl w-full transition-colors duration-200 ease-in-out ${
                  isActive
                    ? 'bg-[var(--widget-color)] text-[color:var(--text-color)]'
                    : 'hover:bg-[var(--text-hover)] hover:text-[color:var(--text-color)]'
                }`}
              >
                <Icon size="1.3em" />
                {label}
              </button>
            )
          })}
        </div>
      </div>

      <div className='px-2'>
        <button className="flex items-center gap-3 text-left px-3 py-2 hover:bg-[var(--text-hover)] hover:text-[color:var(--text-color)] rounded-2xl w-full transition-colors duration-200 ease-in-out">
          <Settings size="1.3em" />
          Настройки
        </button>
      </div>

    </div>
  )
}

export default SideBar;