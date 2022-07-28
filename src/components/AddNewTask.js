import {useState} from 'react';


const AddNewTask = ({addingTasks, error}) =>{
    const [addTask, setAddTask] = useState('');

    const Task = (e) => {
        e.preventDefault();

        addingTasks(addTask);
        setAddTask('');
    }

    return(
        <div className = "border-2 w-5/12 m-auto border-red-300 rounded-xl bg-gray-200 lg:w-3/6 md:w-full md:p-16 sm:w-full sm:p-16 sm:p-10">

           

            <div>

            <h2>Task Name</h2>
            <input className="border-2  md:w- sm:w-1/4 border-red-300 rounded my-3.5 md:w-96 sm:w-52 "type="text" placeholder="Add New Task" value={addTask} onChange={(e) => setAddTask(e.target.value)} />
            <h4>{error}</h4>
            <button className="border-2 w-48 rounded bg-gray-500 border-solid border-gray-900 my-4" type="button" onClick={(e) => Task(e)}><span className="text-red-300">+</span> Add Task</button>

            </div>
        </div>
    )
}

export default AddNewTask;