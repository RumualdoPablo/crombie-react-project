import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { BASE_URL } from "../../App";

const schema = yup.object({
    email: yup.string().email().required(),
    phone: yup.string().min(9).max(15).required(),
    fullName: yup.string().min(3).max(20).required(),
    message: yup.string().min(3).max(20).required()
}).required();

type FormData = yup.InferType<typeof schema>;

const FooterForm: React.FC = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });


    const handleFetch = (data: FormData) => {

        fetch(`${BASE_URL}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Comentario enviado con éxito', response.json());
                } else {
                    console.error('Error al enviar el comentario');
                }
            })
            .catch((error) => {
                console.error('Error en la petición:', error);
            });
        reset()
    };

    return (<>

        <div className='relative mb-20 flex justify-between w-3/4 mx-auto py-12 bg-white rounded-xl shadow-xl'>
            <div className=' w-1/4 ml-28'>
                <h3 className='text-4xl font-semibold leading-snug mb-4'>Subscribe Now to get Special features</h3>
                <p>Let's subscribe with us and find the fun</p>
            </div>
            
                <form onSubmit={handleSubmit(handleFetch)} className='flex flex-col m-5 space-y-6'>
                    <input
                        type="text"
                        id="fullName"
                        placeholder='Nombre'
                        className='bg-slate-50 border-2 rounded-lg p-2'
                        {...register("fullName")}
                    />
                    <input
                        type="number"
                        id="phone"
                        placeholder='Phone number'
                        className='bg-slate-50 border-2 rounded-lg p-2'
                        {...register("phone")}
                    />
                    <input
                        type="text"
                        id="email"
                        placeholder='E-mail'
                        className='bg-slate-50 border-2 rounded-lg p-2'
                        {...register("email")}
                    />
                    <textarea
                        id="message"
                        placeholder='Leave us your message!'
                        className='bg-slate-50 border-2 rounded-lg p-2 h-40'
                        {...register("message")}
                    />
                    <p>{errors.message?.message}</p>
                    <button type="submit" className="py-4 px-16 m-4 text-slate-50 bg-red-500 shadow-2xl shadow-red-300 rounded-lg  font-bold">Subscribe now!</button>
                </form>
            </div>
    </>
    );
};

export default FooterForm