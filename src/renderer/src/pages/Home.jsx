import { Box, FolderKanban, Package, TrendingUp } from 'lucide-react'

const static_1stBlock = [
  {label: "Финансовая сводка", first: "Общий доход", second: "Общие затраты", third: "Общая прибыль", fourth: "Средняя прибыль"},
  {label: "Время печати", first: "Всего часов", second: "Этот месяц", third: "Эта неделя", fourth: "Среднее не проект"},
  {label: "Проекты", first: "Всего проектов", second: "В работе", third: "Завершено", fourth: "Не выполнено"},
]

function Home() {
  return (
    <div className="flex-1 overflow-auto bg-[var(--bg-color)] p-4 text-[var(--text-color)] pt-8 pb-6">
      <div className='flex w-full justify-around gap-3'>
        {
          static_1stBlock.map(({label, first, second, third, fourth}, index) => {
            return (
              <div key = {index} className='bg-[var(--widget-color)] flex-1 rounded-2xl px-4 py-2.5 flex gap-3.5 flex-col'>
                <h3 className='font-bold'>{label}</h3>
                <div className='flex gap-1.5 flex-col'>
                  <div className='flex justify-between'>
                    <span>{first} </span><span>0</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>{second}</span><span>0</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>{third} </span><span>0</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>{fourth} </span><span>0</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home;