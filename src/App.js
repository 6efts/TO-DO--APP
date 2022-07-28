
import AddNewTask from './components/AddNewTask';
import PendingTask from './components/PendingTask';
import {useState, useReducer} from 'react';


const reducerAddingTask = (state,action ) => {
    if(action.type === 'Add'){

     return [...state,{ name : action.payload,
        donetask : 'https://cdn-icons-png.flaticon.com/512/709/709510.png',
        delete : 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png',
        status : 'Pending' 
      }]
    }

    if(action.type === 'done'){
       return  state.filter((task) =>{
        if(action.payload ===  task.name){
         state = {...task, status : task.status = 'Done'}
        }
        return state;
     })
    }

    if(action.type === 'delete'){
      return state.filter((task) => task.name  !== action.payload )
    }

    return state;
}
  
const App = () => {

  const [addTask, dispatchAddTask] = useReducer(reducerAddingTask, [])
  const [error, setError] = useState(null);


  const addingTasks = (pendingTasks) => {

    const newTask = pendingTasks.toLowerCase();

    setError('');

    if(pendingTasks.trim() === ''){
      setError('Please enter a valid task');
      return;
    }


    if(addTask.some(({name}) => name === newTask)){
  
      setError('Task is already in the queue');
      return;
    }

    dispatchAddTask({type: 'Add', payload: pendingTasks});
  }


  return (
    

    <div className="flex flex-col text-center gap-9 font-medium text-3xl my-12 md:p-12 sm:p-4 ">

        <h1 className="text-6xl sm:text-5xl">TO-DO APP</h1>

        <div><AddNewTask addingTasks={addingTasks} error={error} /></div>
      
        <div className='border-2 w-5/12 m-auto border-red-300 rounded-xl bg-gray-200 p-6 lg:w-3/6 md:w-full md:p-16 sm:w-full sm:p-16'>
          <div>
          <div> <p className="sm:text-2xl">Pending Tasks</p> </div>
          {
             addTask.some((task) => task.status === 'Pending'  ) ? 
             addTask.filter((task) => task.status === 'Pending' ).map((task) =>
              <PendingTask key={task.name} name={task.name} donetask ={task.donetask} deleteTask={task.delete} status ={task.status} dispatch={dispatchAddTask}/>
            ) 
            : <h2 className="sm:text-2xl">No Pending Task</h2>
          }
          </div>
        </div>
      
      <div className='border-2 w-5/12 m-auto border-red-300 rounded-xl bg-gray-200 p-6 lg:w-3/6 md:w-full md:p-16 sm:w-full sm:p-16'>
          <div>
            <div> <p className="sm:text-2xl">Done Tasks</p> </div>
              {
                 addTask.some((task) => task.status === 'Done'  ) ?
                  addTask.filter((task) => task.status === 'Done' )
                  .map((task) =>
                  <PendingTask key={task.name} name={task.name} donetask ={task.donetask} deleteTask={task.delete} status ={task.status} dispatch={dispatchAddTask}/>
                ) 
                : <h2 className="sm:text-2xl">TASKS DONE</h2>      
              }
            </div>
          </div>
    </div>
  );
}

export default App;


