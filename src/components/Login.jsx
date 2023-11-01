import { useState } from "react";
import logo from '../assets/j.png'




function App() {


  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleSignupForm = (event) => {
    event.prevent.Default();
    //console.log({ name, password })

    // Verificar senha inserida aqui

       // Redirect parapágina desejada
       history.push('./componets/Home');
    


  };


  return (
    <div className="principal">
      <div className='container mx-auto px-60	'>
        <img src={logo} className="object-scale-down object-center h-48 w-96  " alt="jay's logo" />

        <form className="flex items-center content-center" onSubmit={handleSignupForm}>

          <div className="">
            <label id="user" className="block mb-2 font-medium ">Digite seu usuario</label>
            <input type="text" className="border-2 rounded-lg w-60" placeholder="nome usuário" required value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="">
            <label id="" className="block mb-2 font-medium  ">Digite sua Senha</label>
            <input type="password" className="border-2 rounded-lg  dark:focus:border-blue-500 w-60" placeholder="********" required value={password} onChange={(event) => setPassword(event.target.value)} />
          </div><br></br>

          <button className="bg-teal-500 hover:bg-cyan-500 border-r-emerald-500 mx-auto rounded-md w-60" type="submit">
            <span className=" font-bold">Enviar</span>
          </button>
          <div>
            <a href="" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Esqueceu a Senha</a>
          </div>

        </form>


      </div>




    </div>
  );

}
export default App