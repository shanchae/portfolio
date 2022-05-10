import React, { useState } from 'react'
import { send } from '@emailjs/browser'

function ContactMe() {
    const [ senderName, setSenderName ] = useState('')
    const [ senderEmail, setSenderEmail ] = useState('')
    const [ senderMessage, setSenderMessage  ] = useState('')
    const [ result, setResult ] = useState('')
    const [ isSubmitted, setIsSumbitted ] = useState(false)

    const displayAlert = () => {
        const timer = setTimeout(() => {
            setIsSumbitted(false)
        }, 5000)

        return () => clearTimeout(timer)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (senderEmail && senderName && senderMessage){
            send('service_k7et1g4', 'template_ckszepg', { senderName, senderEmail, senderMessage}, 'jmha3vZgL_DIQwWF7')
              .then((result) => {
                  setResult(result.text);
              }, (error) => {
                  setResult(error.text);
              })
        } else {
            setResult("Please enter values in the form")
        }

        setIsSumbitted(true)

        displayAlert()

        setSenderName('')
        setSenderEmail('')
        setSenderMessage('')
    
    }

  return (
    <div className='relative overflow-hidden w-full bg-zinc-700 h-screen'>
        <div className={`absolute ${isSubmitted ? "right-10" : "-right-full"} w-82 top-10 transition-all duration-500 ease-in-out bg-black p-3`}>
            <div className='text-2xl text-white text-center'>{result}</div>
        </div>
        <div className='w-10/12 md:8/12 h-full mx-auto flex flex-col-reverse md:flex-row gap-20 justify-center items-center'>
            <div className='w-10/12 md:w-5/12 border-2 border-cyan-600 rounded-md p-4 text-zinc-200'>
                <form onSubmit={sendEmail} className='flex flex-col space-y-8 text-xl'>
                    <div className='flex flex-col gap-2'>
                        Your Name
                        <input required className='w-2/3 bg-transparent border-b border-cyan-600 outline-none' type="text" name="senderName" value={senderName} onChange={(e) => setSenderName(e.target.value)} id=""/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        Your Email
                        <input required className='w-2/3 bg-transparent border-b border-cyan-600 outline-none' type="text" name="senderEmail" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} id="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        Message:
                        <textarea required className='bg-transparent border-b border-cyan-600 outline-none' name="senderMessage" value={senderMessage} onChange={(e) => setSenderMessage(e.target.value)} id="" />
                    </div>
                    <button className='w-fit mx-auto px-3 py-1 bg-cyan-600' onClick={sendEmail}>Submit</button>
                </form>
            </div>
            <div className='flex justify-center text-cyan-600 text-5xl'>
                Contact Me
            </div>
        </div>
    </div>
  )
}

export default ContactMe