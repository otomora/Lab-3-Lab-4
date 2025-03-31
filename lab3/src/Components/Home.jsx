import WelcomeWidget from "./WelcomeWidget";
    export default function Home(props){
        return(
            <>
                <h1>¡Estás en casa!</h1>
                <WelcomeWidget email={props.email} />  
            </>
        );
    }