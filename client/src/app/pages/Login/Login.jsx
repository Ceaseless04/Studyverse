import "./Login.css";
// when you are doing import of components (navbar, etc) follow this format 
// import Function from "../../components/function";


export function Login() {
    return (
        <>
            <h1>Login page</h1>

            <div className="container">
                <label> Email </label> <br/>
                <input type="email" class="email" placeholder="jkRowl@gmail.com" required/> 
                        
            </div>

            <button type="submit"> log in</button>

        </>
       

    );
}