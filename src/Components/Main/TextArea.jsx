import React from 'react'
import {ErrorMessage, useField} from "formik"

export const TextArea = ({label, ...props}) => {
    const [field, meta] = useField(props)
    console.log(field, meta);
    return(
        <div className='mb-2'>
            <label htmlFor={field.name}>{label}</label>
            <textarea  id="message" cols="30" rows="8"
           className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}{...props}
            autoComplete="off"></textarea>
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}