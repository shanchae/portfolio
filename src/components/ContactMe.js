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
        }, 10000)

        return () => clearTimeout(timer)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (senderEmail && senderName && senderMessage){
            send('service_k7et1g4', 'template_ckszepg', { senderName, senderEmail, senderMessage}, 'jmha3vZgL_DIQwWF7')
              .then((result) => {
                  console.log(result.text)
                  setResult('Sent successfully! Thank you for reaching out! (❁´◡`❁)');
              }, (error) => {
                  console.log(error)
                  setResult('Something went wrong! Please try again later. (⊙_⊙;)');
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
        <div className={`absolute ${isSubmitted ? "right-10" : "-right-full"} w-fit top-10 transition-all duration-500 ease-in-out bg-fuchsia-700 p-3`}>
            <div className='text-2xl text-white text-center'>{result}</div>
        </div>
        <div className='w-10/12 md:8/12 h-full mx-auto flex flex-col-reverse md:flex-row gap-20 justify-center items-center'>
            <div className='w-10/12 md:w-5/12 border-4 border-fuchsia-700 bg-fuchsia-300 text-zinc-700'>
                <div className='bg-fuchsia-700 text-fuchsia-200 text-3xl text-center p-1'>HELLO ╰(*°▽°*)╯</div>
                <form onSubmit={sendEmail} className='flex flex-col space-y-8 text-xl p-4'>
                    <div className='flex flex-col gap-2'>
                        Your Name
                        <input required className='w-2/3 bg-transparent border-b border-fuchsia-700 outline-none' type="text" name="senderName" value={senderName} onChange={(e) => setSenderName(e.target.value)} id=""/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        Your Email
                        <input required className='w-2/3 bg-transparent border-b border-fuchsia-700 outline-none' type="text" name="senderEmail" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} id="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        Message:
                        <textarea required className='bg-transparent border-b border-fuchsia-700 outline-none' name="senderMessage" value={senderMessage} onChange={(e) => setSenderMessage(e.target.value)} id="" />
                    </div>
                    <button className='w-fit mx-auto px-3 py-1 bg-fuchsia-700 text-fuchsia-200 hover:bg-fuchsia-600 transition-colors duration-300 ease-in-out' onClick={sendEmail}>Submit</button>
                </form>
            </div>
            <div className='flex justify-center text-fuchsia-600 text-5xl'>
                Contact Me
            </div>
        </div>
    </div>
  )
}

export default ContactMe