import "./Signup.css";
// when you are doing import of components (navbar, etc) follow this format 
// import Function from "../../components/function";


export function Signup() {
    return (
        <>
        <div className="MaxContainer">
            <h1 className="tagName">Signup page</h1>

            <div className="container1 containers">
                <label className="inputLabel"> Email</label>
                <input type="email" class="inputEmail" placeholder="jkRowl@gmail.com" required/> 
                <br/><br/>
            </div>

            <div className="container2 containers">
                <label className="inputLabel"> Username </label>
                <br/>
                <input type="username" class="inputUserN" placeholder="jKRow33" required/> 
                <br/><br/>
            </div>
            
            <button type="submit" className="SubButton"> Verify email</button>

        </div>    
        </>
    );
}