import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function () {
  return(
    <footer>
          <p className="flex flex-row justify-center">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
          </p>
          <p class="text-center py-2">
            Copyright &copy;2024 Dimitrios Athanasopoulos
          </p>
        </footer>
  )
}