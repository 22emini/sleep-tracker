"use client"
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';
import { toast } from 'sonner';
const ContactPage = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

        if (!serviceId || !templateId || !publicKey) {
          setIsSubmitting(false);
          toast.error("Email service configuration is missing.");
          return;
        }

        emailjs
          .sendForm(
            serviceId,
            templateId,
            form.current as HTMLFormElement,
            publicKey
          )
          .then(
            () => {
              console.log('Email sent successfully!');
              // Clear form fields
              setName('');
              setEmail('');
              setMessage('');
              setSubject('');
              // Show success modal
             toast.success("Message sent Sucessfully")
              setIsSubmitting(false);
            },
            (error) => {
              console.log('Email send failed...', error.text);
              setIsSubmitting(false);
              toast.error(" An error as occurred")
            }
          );
    };
  return (
    <div className='font-sans bg-gray-100 text-gray-800'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Contact SleepTracker
        </h1>
        <p className='text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Have questions or need help? Get in touch with us!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className='py-16 px-8 bg-white'>
        <h2 className='text-3xl font-bold text-center mb-8'>Get in Touch</h2>
        <form
          ref={form}
          className='max-w-3xl mx-auto space-y-6'
          onSubmit={sendEmail}
        >
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500'
              placeholder='Your Name'
              required
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500'
              placeholder='Your Email'
              required
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500'
              placeholder='Your Message'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md font-medium shadow-md cursor-pointer'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className='py-16 px-8 bg-gray-100'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Contact Information
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <h3 className='text-xl font-bold mb-2'>Email</h3>
            <p className='text-gray-600'>support@sleeptracker.com</p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-2'>Phone</h3>
            <p className='text-gray-600'>+1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-2'>Address</h3>
            <p className='text-gray-600'>
              123 SleepTracker St, Dream City, USA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;