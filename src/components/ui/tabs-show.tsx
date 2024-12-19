"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import Link from "next/link";
import Blog from '@/images/BlogApp.png'
import Backend from '@/images/Crud.png'
import template from '@/images/template.png'
export function Tab() {
  const tabs = [
    {
      title: "Blog application",
      value: "Blog Application",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Blog Application using Appwrite as backend</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "CRUD operations",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>CRUD functionality for Blog Application using Node Js</p>
          <Image
             src={Backend}
                alt="dummy image"
                width="1000"
                height="1000"
                className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Next Auth",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Created user authentication system </p>
          <Image
             src={Backend}
                alt="dummy image"
                width="1000"
                height="1000"
                className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Personal Portfolio template",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Personal portfolio template</p>
          <Image
             src={template}
                alt="dummy image"
                width="1000"
                height="1000"
                className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[28rem] md:h-[48rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src={Blog}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover mb-2 object-left-top h-[70%]  md:h-[80%] absolute -bottom-10 inset-x-0 w-[95%] rounded-xl mx-auto"
    />
  );
};
