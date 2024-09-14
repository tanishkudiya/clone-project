import { Email, Password } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom"
import Validation from "./loginValidations"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // const handleInput = (event) => {
    //     setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
    // }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Log in</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" for="email" name="email" className="form-label"><strong>Email</strong></label>
                        <input onChange={e => setEmail(e.target.value)} type="email" id="email" className="form-control rounded-0" placeholder="Enter Email" />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" for="password" name="password" className="form-label"><strong>Password</strong></label>
                        <input onChange={e => setPassword(e.target.value)} type="password" id="password" className="form-control rounded-0" placeholder="Enter Password" />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>

                    <button type="submit" className="btn btn-success w-100" ><strong>Login</strong></button>
                    <div className="form-check mt-2 mb-2">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            You are agree our terms and conditions
                        </label>
                    </div>
                    <Link to="/signup" className="btn btn-default border w-100 bg-light">Create your account</Link>
                </form>
            </div>
        </div>
    )
}