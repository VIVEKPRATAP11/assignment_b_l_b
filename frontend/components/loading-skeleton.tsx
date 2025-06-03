export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="gradient-card rounded-2xl overflow-hidden animate-pulse">
          <div className="h-56 skeleton" />
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="h-6 skeleton rounded w-3/4" />
              <div className="h-4 skeleton rounded w-1/2" />
            </div>
            <div className="flex justify-between items-center">
              <div className="h-4 skeleton rounded w-1/3" />
              <div className="h-8 skeleton rounded w-1/4" />
            </div>
            <div className="space-y-2">
              <div className="h-3 skeleton rounded w-full" />
              <div className="h-3 skeleton rounded w-2/3" />
            </div>
            <div className="h-10 skeleton rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}
