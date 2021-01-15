export const ContainerX = ({ children, ...props }) => (
  <div
    className={`mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 ${
      props.className ?? ''
    }`}
  >
    {children}
  </div>
)

export const ContainerY = ({ children, ...props }) => (
  <div className={`py-8 sm:py-12 lg:py-14 ${props.className ?? ''}`}>
    {children}
  </div>
)
