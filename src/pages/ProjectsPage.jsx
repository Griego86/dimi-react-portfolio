import { NavLink } from "react-router-dom"

export default function ProjectsPage () {
  return(
    <div className="flex-1 flex flex-col">
      <h1 className="text-center text-6xl">My Projects</h1>
      <NavLink to="/dimi-react-portfolio/project1" className="py-10 mx-auto"><h1>SuperChatt</h1></NavLink>
    </div>
  )
}