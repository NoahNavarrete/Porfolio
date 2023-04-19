import React, {useRef} from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m16kvad', 'template_qvftnrf', form.current, 'jJ-YATinFmpkpjgLc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };


    const validate = Yup.object({
        name: Yup.string()
        .max(35, "Must be 35 characters or less")
        .required("Name is required"),
        email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
        subject: Yup.string()
        .required("Subject is required"),
        message: Yup.string()
        .required("Message is required"),

})

    return(
       <Formik
       initialValues={{
        name: "",
        email:"",
        subject:"",
        message:"",
       }}
        validationSchema = {validate}
>
        { formik =>
           ( <div>
                <h1 className="my-1 font-weight-bold-display-4 text-white">Contact me</h1>
                <Form onSubmit={sendEmail} ref={form}>
                <TextField label="Enter your name" name="name" type="text"/>
                <TextField label="Enter your email" name="email" type="email"/>
                <TextField label="Enter your subject" name="subject" type="text"/>
                <TextArea label="Enter your message" name="message"/>
                <button className="btn btn-dark mt-3" type="submit">Send</button>
                <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>

                </Form>
            </div>)
        }
       </Formik>
    )
}