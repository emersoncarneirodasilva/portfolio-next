import { FunctionComponent } from "react";
import { Category } from "../type";

const NavItem: FunctionComponent<{ 
  value: Category | "Todos"
  handlerFilterCategory: Function
  active: string
  }> = ({value, handlerFilterCategory, active}) => {
    
  let className = "capitalize cursor-pointer hover:text-azul"
  if (active === value) {
    className += " text-azul"
  }
  
  return (
    <li className={className}
      onClick={() => handlerFilterCategory(value)}>{value}</li>
  )
}

const ProjectsNavbar: FunctionComponent<{handlerFilterCategory: Function, active: string}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="Todos" {...props} />
      <NavItem value="HTML" {...props} />
      <NavItem value="CSS" {...props} />
      <NavItem value="JavaScript" {...props} />
      <NavItem value="jQuery" {...props} />
      <NavItem value="React.JS" {...props} />
      <NavItem value="Next.JS" {...props} />
    </div>
  )
}

export default ProjectsNavbar