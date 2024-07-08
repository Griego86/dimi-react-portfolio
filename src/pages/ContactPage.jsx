import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Dimi Athanasopoulos'
  }, [])

  return(
    <div>
      This is a contact page.
    </div>
  )
}