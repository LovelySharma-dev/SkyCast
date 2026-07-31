import type { ReactNode } from "react"
import clsx from "clsx"

type Props = {
  children: ReactNode
  title: string
  className?: string
  childrenClassName?: string
}

export default function Card({
  children,
  title,
  className,
  childrenClassName,
}: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        "rounded-xl border border-zinc-800",
        "bg-zinc-900/80 p-4",
        "shadow-md",
        "transition-colors",
        "hover:border-zinc-700",
        className
      )}
    >
      <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
        {title}
      </h2>

      <div className={clsx("text-zinc-200", childrenClassName)}>
        {children}
      </div>
    </div>
  )
}