'use client'

import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { CardBody } from './ui/card-body'

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
   
    console.log('Form submitted')
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <CardBody className="w-full max-w-md  rounded-xl shadow-lg">
        <TextGenerateEffect words="Contact Me" className="text-3xl roboto font-bold text-center mb-6 text-white" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              rows={4}
            />
          </div>
          <Button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Send Message
          </Button>
        </form>
      </CardBody>
    </div>
  )
}

