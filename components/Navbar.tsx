import { FunctionComponent, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  name: string,
  route: string
}> = ({activeItem, name, route, setActiveItem}) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a>
          <span 
            onClick={() => setActiveItem(name)} 
            className="hover:text-azul">{name}
          </span>
        </a>
      </Link>  
    ):null
  )
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("")

  const { pathname } = useRouter()

  useEffect(() => {
    if(pathname === "/") setActiveItem("Sobre")
    else if(pathname === "/resume") setActiveItem("Currículo") 
    else if(pathname === "/projects") setActiveItem("Projetos")       
  }, [])
  
  return (
    <div className="flex justify-between px-5 my-3">
      <span className="text-xl font-bold border-b-4 border-azul md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Sobre" route="/" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Currículo" route="/resume" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projetos" route="/projects" />        
      </div>
    </div>
  )
}

export default Navbar