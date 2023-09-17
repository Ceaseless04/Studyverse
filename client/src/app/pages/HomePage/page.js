import "./home.css";
// when you are doing import of components (navbar, etc) follow this format 
// import Function from "../../components/function";
import {Homepage} from "./home"


export default function Hi() {
    return (
        <>
          <Homepage />  
        </>
    );
}