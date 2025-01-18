interface CardProps {
  title: string
  children: React.ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white dark:bg-slate-700 shadow">
    <div className="px-4 py-5 sm:px-6">
      {title}
    </div>
    <div className="px-4 py-5 sm:p-6">{children}</div>
  </div>
  )
}