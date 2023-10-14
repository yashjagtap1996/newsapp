import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Contact = () => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string().min(10).max(10).required()
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    let Submit = (data, e) => {
        e.preventDefault()
        console.log(data);
        reset()
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit(Submit)} className='w-50 mx-auto mt-5 shadow p-4'>
                <label htmlFor="" className='form-label'>Enter Name</label>
                <input {...register("name")} type="text" className='form-control' />
                <p className='text-danger'>{errors.name?.message}</p>
                <label htmlFor="" className='form-label'>Enter Email</label>
                <input {...register("email")} type="email" className='form-control' />
                <p className='text-danger'>{errors.email?.message}</p>
                <label htmlFor="" className='form-label'>Enter Phone</label>
                <input {...register("phone")} type="number" className='form-control' />
                <p className='text-danger'>{errors.phone?.message}</p>
                <input className='btn btn-success' type="submit" />
            </form>
        </>
    )
}

export default Contact