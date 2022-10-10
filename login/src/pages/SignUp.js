import { useState } from "react"
import { Link } from "react-router-dom"

function SignUp() {
    const [data,setData] = useState([{username: 'admin', password: 'admin'},])
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const [passCheck,setPassCheck] = useState('')

    const onRegister = () => {
        // console.log(user)
        if(pass !== passCheck){
            alert('пароли не одинаковые')
        }
        setData((current) => {
            const obj = {
                // id: data.length + 1,
                username: user,
                password: pass
            }

            return{
                data: [...current, obj]
            }
        })
        // setData(current => [...current, obj])
        console.log(data)
    }
// не добавляет в массив data User и pass
    return (
        <div>
            <h1>register</h1>
            {/* {props.map((item) => { <li>{item}</li> })} */}
            <input onChange={(e) => setUser(e.target.value)} placeholder='user'/>
            <input onChange={(e) => setPass(e.target.value)} placeholder='pass'/>
            <input onChange={(e) => setPassCheck(e.target.value)} placeholder='passCheck'/>
            <button onClick={onRegister}> register </button>
            <p>if you registered  <Link to='sign-in' state={{from:data}}>sign in</Link></p>
        </div>
    )

}
export default SignUp






