import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Validation from "./signupValidations"
import axios from "axios"

export default function Signup() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    })

    // const [errors, setErrors] = useState({})

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(Validation(values));
        // if(errors.name==="", errors.email==="",errors.password===""){
        axios.post("http://localhost:8081/signup", values)
            .then(res => {
                // if(res.data == "exist"){
                //     alert("User exist already")
                // }
                // else if(res.data == "notexist"){
                    navigate("/home",{state:{id:email}});
                // }
            })
            .catch(err => {
                alert("Wrong details");
                console.log(err)
            });
        // }
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" for="name" className="form-label"><strong>Name</strong></label>
                        <input type="name" id="name" onChange={handleInput} className="form-control rounded-0" placeholder="Enter Name" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" for="email" className="form-label"><strong>Email</strong></label>
                        <input type="email" id="email" onChange={handleInput} className="form-control rounded-0" placeholder="Enter Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" for="password" className="form-label"><strong>Password</strong></label>
                        <input type="password" id="password" onChange={handleInput} className="form-control rounded-0" placeholder="Enter Password" />
                    </div>

                    <button type="submit" className="btn btn-success w-100" ><strong>Sign up</strong></button>
                    <div className="form-check mt-2 mb-2">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            You are agree our terms and conditions
                        </label>
                    </div>
                    <Link to="/" className="btn btn-default border w-100 bg-light">Log in</Link>
                </form>
            </div>
        </div>
    )
}