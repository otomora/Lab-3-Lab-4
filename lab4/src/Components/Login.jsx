import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useUserState } from "../Hooks/UseUserState";


export default function Login() {
    const { setUser } = useContext(AuthContext)
    const {emailRef, passwordRef, login, error, setError} = useUserState()
    
    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const isSuccess = login(email, password);
        if (!isSuccess) {
            setError("Invalid credentials");
        }
        else {
            console.log("set User State")
            setUser({ email });
        }
    }

    return (
        <div>
            <input type="email" 
            placeholder="Email"
            ref={emailRef}
            />
            <br />
            <input type="password" 
            placeholder="Password"
            ref={passwordRef}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
        
        )
        
    }
