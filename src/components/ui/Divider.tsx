interface DividerProps {
  title?: string;
}

export default function Divider({ title }: DividerProps) {
    return (
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-base font-semibold text-gray-900">{title}</span>
        </div>
      </div>
    )
  }
  