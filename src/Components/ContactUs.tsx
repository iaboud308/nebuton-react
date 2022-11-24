import { useState } from "react";
import { postReq } from "../Utils/Helpers";
import Confirm from "./Confirm";




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
    const [status, setStatus] = useState('');
    const [resMessage, setResMessage] = useState('');

    const mapper: any = formToStateMapper(setFirstName, setLastName, setEmail, setMessage);

    const handleChange = (e: any) => {
        mapper[e.target.name](e.target.value);
    }



    const handleSubmit = async (e: any) => {
        const payload = { firstName, lastName, email, message, "companyName": "Nebuton" };
        const response = await postReq('https://contact-us-server.hyderion.com/api/contact', JSON.stringify(payload));
        console.log(response);

        // if(response && response.response.status === 200) {
            setStatus('success');
            setResMessage('Your request has been sent');
            clearForm();
        // } else {
        //     setStatus('danger');
        //     setResMessage('There has been an error');
        // }

    }


    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    }


    return (
        <div className="container">
            <h1 className="my-5 text-center">Contact Us</h1>
            <Confirm type={status} message={resMessage} />
            <div className="row justify-content-center">

                <div className="col-lg-3 mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstName" className="form-control" onChange={handleChange} value={ firstName } />
                </div>

                <div className="col-lg-3 mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastName" className="form-control" onChange={handleChange} value={ lastName } />
                </div>
            </div>

            <div className="row justify-content-center mb-3">
                <div className="col-lg-6">
                    <label className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" onChange={handleChange} value={ email } />
                </div>
            </div>

            <div className="row justify-content-center mb-3">
                <div className="col-lg-6">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-control" rows={6} onChange={handleChange} value={ message } />
                </div>
            </div>

            <div className="d-grid col-lg-6 mx-auto">
                <button className="btn btn-primary btn-lg" onClick={handleSubmit}>Submit</button>
            </div>


        </div>
    )
}


export default ContactUs;