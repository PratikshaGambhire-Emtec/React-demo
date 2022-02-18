
import './App.css';
import { TaskComponent, taskComponent } from './component/task.component';

//component
//-reusable entity
//-types
  //-functional component(*)
  // -class component
function App() {
  const username = 'Prati'
  const user= {name: 'prati', address: 'Pune', email: 'pc@gmail.com'}
  const task = 
    {id:1,
     title:'learn NestJS', 
     description:'Watch Amits lecture'
    }

  const tasks = [
    {id:1,
     title:'learn NestJS', 
     description:'Watch Amits lecture'
    },
    {id:2,
      title:'Practice Assignment', 
      description:'Practice the given assignment'
     },
     {id:3,
      title:'finish NestJS', 
      description:'finish the given lecture'
     },
  ] 
  
  return (
    <div className="App">
      <h1> Demo application </h1>

      <div>{username}, Welcome to the reactJS</div>
      
      <hr />
      <div>
        <div>Name: {user.name}</div>
        <div>Address: {user.address}</div>
        <div>Email: {user.email}</div>
      </div>
      <hr />

      <div>
        <div>Id: {tasks[0].id}</div>
        <div>Title: {tasks[0].title}</div>
        <div>Description: {tasks[0].description}</div>
      </div>

      <hr />
      {tasks.map((task)=> {
        return(    
        
      <TaskComponent 
      id={task.id}
       title={task.title} 
      description={task.description} />)
      })}


        <hr />

      <TaskComponent id={task.id} title={task.title} description={task.description} />
    
    </div>
  );
}

export default App;
