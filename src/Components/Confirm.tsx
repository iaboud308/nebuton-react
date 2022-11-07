


const Confirm = (props: any) => {

    return (
        <div className="container mt-5">
            <p className={`text-center text-${props.type}`}>{ props.message }</p>
        </div>
    )
}


export default Confirm;