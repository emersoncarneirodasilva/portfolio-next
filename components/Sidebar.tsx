import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  
  return (
    <>
      <Image 
        src="/images/eu1.jpg" width={130} height={130} alt="Imagem Emerson"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-azul">Emerson</span> C. Silva
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Desenvolvedor Web
      </p>
      
      {/* Currículo */}
      <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 hover:scale-105" 
        href="/assets/curriculo.pdf" download="curriculo.pdf">
        <GiTie className="w-6 h-6" /><span>Download Currículo</span>
      </a>

      {/* Ícones de mídia sociais */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-azul md:w-full">
        <a href="https://github.com/emersoncarneirodasilva">
          <AiFillGithub className="w-8 h-8 cursor-pointer hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/emerson-carneiro-da-silva-2a9402218/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer hover:scale-110" />
        </a>
      </div>      
      
      {/* Contatos */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{ marginLeft:"-1rem", marginRight:"-1rem" }}>
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" />
          <span>Natal-RN, Brasil</span>
        </div>
        <p className="my-2">mersiocarneiro87@gmail.com</p>
        <p className="my-2">+55 (84) 98859-9843 </p>
      </div>

      {/* Botão do email */}
      <button 
        className="w-9/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-azul to-azulCl hover:scale-105 focus:outline-none"
        onClick={() => window.open('mailto:mersiocarneiro87@gmail.com')}>
        Email
      </button>
      <button 
        onClick={changeTheme}
        className="w-9/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-azul to-azulCl focus:outline-none hover:scale-105">
        Mudar Tema
      </button>
    </>    
  )
}

export default Sidebar