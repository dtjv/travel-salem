export const Grid = ({ children, className, ...props }) => {
  return (
    <ul
      className={`grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-6 sm:grid-cols-3 ${className}`}
      {...props}
    >
      {children}
    </ul>
  )
}

export const HorizontalGrid = ({ children, className, ...props }) => {
  return (
    <ul
      className={`overflow-x-auto grid grid-cols-custom hide-scrollbar grid-rows-1 gap-x-4 grid-flow-col ${className}`}
      {...props}
    >
      {children}
    </ul>
  )
}
