
const PendingTask = ({name, donetask, deleteTask,status, dispatch}) =>{

    const onClick = (name, type) =>{
        dispatch({type: type, payload: name });
    }

    return(
            <div className = "flex justify-center my-3.5 ">

                <span><h4 className="mr-4">{name}</h4></span>
                {status === 'Pending' && <img className="w-10 sm:w-10 mr-2 cursor-pointer" src={donetask} alt="check if done" onClick={ () => {onClick(name, 'done')}} />}
                <img className="w-10 sm:w-10 cursor-pointer" src={deleteTask} alt="check if done" onClick={ () => {onClick(name, 'delete')}} />
            </div>

    )
}

export default PendingTask;