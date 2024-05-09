'use client'
import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';


interface ModalContactUsProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const ModalContactUs: React.FC<ModalContactUsProps> = ({active, setActive}) =>  {

    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      
        e.preventDefault();
        setErrorMessage("")
        setName('');
        setEmail('');
        setText('');
          const dataPay = {

                email: email,
                name: name,
                text: text,
        

          };
          
          const res = await fetch("/api/Users", {
            method: "POST",
            headers: { // Correctly set headers
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ dataPay }),
          });
      
          if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message);
          } else {
            router.refresh();
            router.push("/");
          }

      }

  
  return (
    <div className="flex flex-col items-center justify-center bg-beige-200 z-20 p-5 rounded-lg animate-fadeIn">
          <form 
            className='flex flex-col items-center justify-center p-5 bg-[rgba(245,245,220,1)] rounded-2xl shadow-lg' 
            onSubmit={handleSubmit} 
            
            method='post'>
            <input
                className='mb-2 w-full rounded-md shadow-md p-1'
                name='name'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className='mb-2 w-full rounded-md shadow-md p-1'
                name='email'
                placeholder='Enter your email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                className='mb-3 w-full rounded-md shadow-md p-1'
                name='message'
                placeholder='Enter text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={6}

            />
          
            <div className='flex gap-5'>
              <button className='rounded-md p-2 hover:bg-gray-300' type='button' onClick={() => setActive(false)}>Cancel</button>
              <button className='rounded-md p-2 hover:bg-gray-300' type='submit' onClick={() => setActive(false)}>Submit</button>
            </div>
          </form>
          <p className="text-red-500">{errorMessage}</p>
    </div>
  )
}

export default ModalContactUs;