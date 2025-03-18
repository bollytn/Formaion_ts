type ContainerProps = {
    style: React.CSSProperties
}

const Container = ({ style }: ContainerProps) => {
    return (
        <div style={style}>Container</div>
    )
}

export default Container