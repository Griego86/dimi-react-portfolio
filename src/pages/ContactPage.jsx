import { useEffect } from "react";
import { FiSend } from "react-icons/fi";

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Dimi Athanasopoulos'
  }, [])

  return(
      <main className="flex-1">
        <h1 className="text-3xl md:text-6xl py-10 text-center">GET IN TOUCH</h1>
        <div className="flex text-center">
          <FiSend size={60} className="mx-auto" />
        </div>
        <p className="text-base md:text-2xl text-center py-8">
          Whether you want to chat or have an idea for a project, feel free to send me an email!
        </p>
        <div className="text-base md:text-2xl text-center py-8">
            <a href="mailto:dimitrios.athanasop@gmail.com" className="border-solid rounded-md border-2 border-sky-500 p-3 hover:bg-white hover:text-slate-800">Say Hello!</a>
        </div>
      </main>
  )
}