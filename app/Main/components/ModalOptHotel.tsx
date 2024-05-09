'use client'
import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';


interface ModalOptHotelProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const ModalOptHotel: React.FC<ModalOptHotelProps> = ({active, setActive}) =>  {

    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [checkbox, setCheckbox] = useState('')
    const [errorMessage, setErrorMessage] = useState("");

    const handleRadioChange = (value: any) => {
      setCheckbox(value);
  };
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      
        e.preventDefault();
        setErrorMessage("")
        setName('');
        setEmail('');
        setText('');
        setCheckbox('')
          const dataPayOpt = {

                email: email,
                name: name,
                checkbox: checkbox,
                text: text,
        

          };
          
          const res = await fetch("/api/UsersOpt", {
            method: "POST",
            headers: { // Correctly set headers
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ dataPayOpt }),
          });
      
          if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message);
          } else {
            router.refresh();
            router.push("/");
          }
          console.log(dataPayOpt)
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

<label className='flex flex-col items-center justify-center p-1'>
                    <div className="pb-2">Choose your hotel house:</div>
                    <div className="">
                    <input
                          type="radio"
                          className='mr-4'
                          name="checkbox"
                          value="Hotel1"
                          checked={checkbox === 'Hotel1'}
                          onChange={() => handleRadioChange('Hotel1')}
                      />
                      Hotel house #1
                      </div>
                      <div className="">
                      <input
                          type="radio"
                          className='mr-4'
                          name="checkbox"
                          value="Hotel2"
                          checked={checkbox === 'Hotel2'}
                          onChange={() => handleRadioChange('Hotel2')}
                      />
                      Hotel house #2
                      </div>
                      <div className="pb-2">
                      <input
                          type="radio"
                          className='mr-4'
                          name="checkbox"
                          value="Hotel3"
                          checked={checkbox === 'Hotel3'}
                          onChange={() => handleRadioChange('Hotel3')}
                      />
                      Hotel house #3
                      </div>
                  </label>
            
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

export default ModalOptHotel;