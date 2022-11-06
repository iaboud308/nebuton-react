import { useState } from "react";
import { postReq } from "../Utils/Helpers";




const formToStateMapper = (setFirstName: Function, setLastName: Function, setEmail: Function, setMessage: Function) => {

    return {
        firstName: setFirstName,
        lastName: setLastName,
        email: setEmail,
        message: setMessage
    }
} 



const ContactUs = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const mapper: any = formToStateMapper(setFirstName, setLastName, setEmail, setMessage);

    const handleChange = (e: any) => {
        mapper[e.target.name](e.target.value);
    }



    const handleSubmit = async (e: any) => {
        const payload = { firstName, lastName, email, message, "companyName": "Nebuton" };
        console.log(payload);
        const response = await postReq('https://contact-us-server.hyderion.com/api/contact', JSON.stringify(payload));
        console.log(response);

    }


    return (
        <div className="container">
            <h1 className="my-5">Contact Us</h1>
            <div className="row mb-3">

                <div className="col-2">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstName" className="form-control" onChange={handleChange} />
                </div>

                <div className="col-2">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastName" className="form-control" onChange={handleChange} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4">
                    <label className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" onChange={handleChange} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-control" rows={6} onChange={handleChange} />
                </div>
            </div>

            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

        </div>
    )
}


export default ContactUs;