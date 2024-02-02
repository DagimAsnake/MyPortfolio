import React, { useState } from 'react';
import axios from 'axios';
import Address from './Address';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required`;
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      newErrors[name] = 'Invalid email address';
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!query.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!query.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(query.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!query.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    if (!validateForm()) return;

    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        'https://getform.io/f/53848c5b-eb78-456b-a63f-4c4c03e9e057',
        formData,
        {
          headers: { Accept: 'application/json' },
        }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: '',
          email: '',
          message: '',
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div
      name='contact'
      className='w-full bg-gradient-to-b from-gray-800 to-black p-4 text-white'
    >
      <div className='flex flex-col md:flex-row p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8 md:pr-4 md:w-1/2'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with me</p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col w-full'
          >
            <input
              type='text'
              name='name'
              value={query.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Enter your Name'
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name}</p>
            )}

            <input
              type='email'
              name='email'
              value={query.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Enter your Email'
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email}</p>
            )}

            <textarea
              name='message'
              rows='10'
              value={query.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Enter your Message'
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.message ? 'border-red-500' : ''
              }`}
            ></textarea>
            {errors.message && (
              <p className='text-red-500 text-sm'>{errors.message}</p>
            )}

            <button
              type='submit'
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >
              Let's talk
            </button>
            {formStatus && (
              <div className='mt-4 p-4 bg-green-500 text-white rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 inline-block mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <p className='inline-block'>Message sent successfully!</p>
              </div>
            )}
          </form>
        </div>
        <div className="md:w-1/2">
          <Address />
        </div>
      </div>
    </div>
  );
};

export default Contact;
