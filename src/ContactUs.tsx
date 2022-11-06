import { useState } from "react";



const ContactUs = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e: any) => {

        console.log(e.target.value);
    }



    const handleSubmit = (e: any) => {

    }


    return (
        <div>
            <input type="text" name="firstName" onChange={handleChange} />
            <input type="text" name="lastName" onChange={handleChange} />
            <input type="text" name="email" onChange={handleChange} />
            <textarea onChange={handleChange}>

            </textarea>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}


export default ContactUs;