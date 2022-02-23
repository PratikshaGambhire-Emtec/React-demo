import axios from "axios"
import { setting } from '../config'

export const signup =async (userName, userPassword)=>{
    const url= setting.server + '/users/signup'

    let result
    try{
     result = await axios.post(url,{
        userName, userPassword
    })
        result = result.data
}catch(ex){
    result= ex
}
    return result

}

export const signin =async (userName, userPassword)=>{
    const url= setting.server + '/users/signin'

    let result
    try{
     result = await axios.post(url,{
        userName, userPassword
    })
    result = result.data
}catch(ex){
    console.log(ex)
}
    return result

}
