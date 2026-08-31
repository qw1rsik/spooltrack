import { Box, FolderKanban, Package, TrendingUp } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const static_1stBlock = [
  {label: "Финансовая сводка", first: "Общий доход", second: "Общие затраты", third: "Общая прибыль", fourth: "Средняя прибыль"},
  {label: "Время печати", first: "Всего часов", second: "Этот месяц", third: "Эта неделя", fourth: "Среднее не проект"},
  {label: "Проекты", first: "Всего проектов", second: "В работе", third: "Завершено", fourth: "Не выполнено"},
]

const data = [
  { name: 'Янв', доход: 400, затраты: 240 },
  { name: 'Фев', доход: 300, затраты: 200 },
  { name: 'Мар', доход: 600, затраты: 350 },
  { name: 'Апр', доход: 800, затраты: 300 },
  { name: 'Май', доход: 300, затраты: 200 },
];

const recentProjects = [
  { name: "Корпус для дрона", date: "27 авг", status: "В работе" },
  { name: "Держатель для телефона", date: "25 авг", status: "Завершён" },
  { name: "Крепление для камеры", date: "22 авг", status: "В работе" },
];

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
      <div className="flex gap-4 mt-6">
  

      <div className="bg-[var(--widget-color)] rounded-2xl p-5 flex-1">
        <h3 className="font-bold mb-4">Финансы по месяцам</h3>
        <ResponsiveContainer width="100%" height={300} debounce={0}>
          <LineChart data={data}>
            <Legend />
            <CartesianGrid stroke="var(--text-hover)" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="var(--second-color)" />
            <YAxis stroke="var(--second-color)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--bg-color)',
                border: '1px solid var(--text-hover)',
                borderRadius: '8px',
              }}
            />
            <Line type="linear" dataKey="доход" stroke="var(--text-acent-color)" strokeWidth={2} name="Доход" isAnimationActive={false} />
            <Line type="linear" dataKey="затраты" stroke="#60a5fa" strokeWidth={2} name="Затраты" isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[var(--widget-color)] rounded-2xl p-5 w-80 flex flex-col gap-3">
        <h3 className="font-bold">Последние проекты</h3>
        {recentProjects.map(({ name, date, status }, index) => (
          <div key={index} className="flex flex-col gap-1 border-b border-[var(--text-hover)] pb-3 last:border-0">
            <span className="font-medium">{name}</span>
            <div className="flex justify-between text-sm">
              <span className="text-[color:var(--second-color)]">{date}</span>
              <span
                className={
                  status === "Завершён"
                    ? "text-green-400"
                    : "text-[color:var(--text-acent-color)]"
                }
              >
                {status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>
  )
}

export default Home;