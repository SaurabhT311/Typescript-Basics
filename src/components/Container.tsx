//Style passed as props to the component

type ContainerProps = {
    styles:React.CSSProperties
}

export const Container = ({styles}: ContainerProps) => {
  return (
    <div style={styles}>
        Hello, Welcome to the style props.
    </div>
  )
}
