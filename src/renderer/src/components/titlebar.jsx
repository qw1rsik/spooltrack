import { Minus, Square, X } from 'lucide-react'

function TitleBar() {
  return (
    <div 
      className="flex justify-end gap-2 p-2 bg-[var(--bg-color)] text-[color:var(--second-color)]"
      style={{ WebkitAppRegion: 'drag' }}
    >
      <div style={{ WebkitAppRegion: 'no-drag' }} className="flex gap-2">
        <button className="hover:bg-[var(--widget-color)] hover:text-[color:var(--text-color)] p-1.5 rounded transition-colors duration-200">
          <Minus size={16} />
        </button>
        <button className="hover:bg-[var(--widget-color)] hover:text-[color:var(--text-color)] p-1.5 rounded transition-colors duration-200">
          <Square size={14} />
        </button>
        <button className="hover:bg-red-600 hover:text-white p-1.5 rounded transition-colors duration-200">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

export default TitleBar;