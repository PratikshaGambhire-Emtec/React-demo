//props: props
//-props: user
export function TaskComponent(props){
    const { id, title, description } = props
return(
<div>
    <h4>{title }</h4>
    
    
  <div>Id: {id}</div>
  <div>Description: {description}</div>
</div>
 )
}