import { useLocation, useNavigate } from "react-router-dom"

export default function Home(){

    const location = useLocation();

    return (
        <div className="home">
            <h1>Hello {location} and we are welcome</h1>
        </div>
    )
}