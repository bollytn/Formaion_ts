type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void
}

const Bouton = ({handleClick}:ButtonProps) => {
    return (
        <button onClick={event => handleClick(event,1)}>
            submit
        </button>
    )
}

export default Bouton