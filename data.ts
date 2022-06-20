import { IProject, IService, ISkill } from "./type";
import { RiCodeSSlashLine, RiComputerLine } from "react-icons/ri";
import { BsCircleFill } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { ImMagicWand } from "react-icons/im"
import { VscRemoteExplorer } from "react-icons/vsc"
import { CgWebsite } from "react-icons/cg"

export const services: IService[] = [
  {
    Icon: CgWebsite,
    title: "Aplicação Web",
    about:
      "Desenvolvo <strong>sites</strong> profissionais, <strong>blogs</strong>, <strong>portfólios</strong>, <strong>landing pages</strong> e <strong>e-commerces</strong>.",
  },
  {
    Icon: RiCodeSSlashLine,
    title: "Clean Code",
    about:
      "Priorizo durante o desenvolvimento, um <strong>código limpo</strong> seguindo as melhores práticas do mercado.",
  },
  {
    Icon: RiComputerLine,
    title: "Interfaces de Alta Fidelidade",
    about:
      "Procuro garantir que os elementos gráficos <strong>atendam aos requisitos</strong> pré-definidos pelo cliente.",
  },
  {
    Icon: VscRemoteExplorer,
    title: "Páginas Web Responsivas",
    about: "Trabalho <strong>harmonizando</strong> a estrutura da página, <strong>equilibrando</strong> elementos visuais, em <strong>diferentes dispositivos</strong>.",
  },
  {
    Icon: BiTargetLock,
    title: "SEO",
    about:
      "Utilizo códigos com conjuntos de técnicas que melhoram o <strong>posicionamento</strong> nos sites de busca.",
  },
  {
    Icon: ImMagicWand,
    title: "Animações",
    about:
      "Produzo interações que chamam a atenção do usuário, transmitindo <strong>sensação de modernidade</strong>.",
  },
]

export const languages: ISkill[] = [
  {
    name: "HTML",
    level: "95%",
    Icon: BsCircleFill
  },
  {
    name: "CSS",
    level: "90%",
    Icon: BsCircleFill
  },
  {
    name: "JavaScript",
    level: "80%",
    Icon: BsCircleFill
  },
  {
    name: "TypeScript",
    level: "45%",
    Icon: BsCircleFill
  },
  {
    name: "React.JS",
    level: "65%",
    Icon: BsCircleFill
  },
  {
    name: "Next.JS",
    level: "70%",
    Icon: BsCircleFill
  },  
]

export const tools: ISkill[] = [
  {
    name: "Git",
    level: "50%",
    Icon: BsCircleFill
 },
 {
    name: "VS Code",
    level: "90%",
    Icon: BsCircleFill
 },
]

export const projects: IProject[] = [
  { 
    id: 0,
    name: "GitHub API",
    description:
      "Criação de uma interface componentizada onde é possível buscar perfis de usuários do github.",
    image_path: "/images/github-api.png",
    deployed_url: "https://github-api-snowy.vercel.app/",
    github_url: "https://github.com/emersoncarneirodasilva/github-api",
    category: ["React.JS"],
    key_techs: ["React.JS"],
  },
  { 
    id: 1,
    name: "Login Page",
    description:
      "Página de login (login page), construída com Next.JS e Tailwind.",
    image_path: "/images/login.jpeg",
    deployed_url: "https://login-page-next-02.vercel.app/",
    github_url: "https://github.com/emersoncarneirodasilva/login-page-next-02",
    category: ["Next.JS"],
    key_techs: ["React.JS", "Next.JS"],
  },
  { 
    id: 2,
    name: "PokeNext",
    description:
      "Projeto de uma pokedex, onde podemos consultar imagens e características dos pokemons (consultando uma API).",
    image_path: "/images/pokenext02.png",
    deployed_url: "https://pokenext-virid.vercel.app/",
    github_url: "https://github.com/emersoncarneirodasilva/pokenext",
    category: ["Next.JS"],
    key_techs: ["React.JS", "Next.JS"],
  },
  { 
    id: 3,
    name: "Buscador Cep",
    description:
      "Projeto de localização de endereço a partir do CEP.",
    image_path: "/images/cep.jpeg",
    deployed_url: "https://buscador-cep-seven.vercel.app/",
    github_url: "https://github.com/emersoncarneirodasilva/buscador-cep",
    category: ["React.JS"],
    key_techs: ["React.JS"],
  },
  { 
    id: 4,
    name: "Meu Link",
    description:
      "Projeto de um encurtador de links feito com React.JS.",
    image_path: "/images/meulink.jpeg",
    deployed_url: "https://meulink-bay.vercel.app/",
    github_url: "https://github.com/emersoncarneirodasilva/meulink",
    category: ["React.JS"],
    key_techs: ["React.JS"],
  },
  { 
    id: 5,
    name: "Calculadora IMC",
    description:
      "Projeto de uma calculadora IMC utilizando React.JS.",
    image_path: "/images/imc.jpeg",
    deployed_url: "https://emersoncarneirodasilva.github.io/calculadora-imc/",
    github_url: "https://github.com/emersoncarneirodasilva/calculadora-imc",
    category: ["React.JS"],
    key_techs: ["React.JS"],
  },
  { 
    id: 6,
    name: "Jogo da Velha",
    description:
      "Recriação do jogo da velha, criado utilizando HTML, CSS e JavaScript.",
    image_path: "/images/jogo-da-velha.jpeg",
    deployed_url: "https://emersoncarneirodasilva.github.io/jogo-da-velha/",
    github_url: "https://github.com/emersoncarneirodasilva/jogo-da-velha",
    category: ["HTML", "CSS", "JavaScript"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  { 
    id: 7,
    name: "Jogo Genius",
    description:
      "Recriando jogo Genius utilizando HTML, CSS e JavaScript.",
    image_path: "/images/jogo-genius.jpeg",
    deployed_url: "https://emersoncarneirodasilva.github.io/jogo-genius/",
    github_url: "https://github.com/emersoncarneirodasilva/jogo-genius",
    category: ["HTML", "CSS", "JavaScript"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  { 
    id: 8,
    name: "Relógio Glass",
    description:
      "Projeto criado com HTML, CSS e JavaScript.",
    image_path: "/images/relogio-glass03.png",
    deployed_url: "https://emersoncarneirodasilva.github.io/relogio_glass/",
    github_url: "https://github.com/emersoncarneirodasilva/relogio_glass",
    category: ["HTML", "CSS", "JavaScript"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  { 
    id: 9,
    name: "Website Restaurant",
    description:
      "Site recriado utilizando HTML, CSS e JavaScript.",
    image_path: "/images/food02.png",
    deployed_url: "https://emersoncarneirodasilva.github.io/website_restaurant/",
    github_url: "https://github.com/emersoncarneirodasilva/website_restaurant",
    category: ["HTML", "CSS", "JavaScript"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  { 
    id: 10,
    name: "Website Gym",
    description:
      "Site recriado utilizando HTML, CSS e JavaScript.",
    image_path: "/images/gym02.png",
    deployed_url: "https://emersoncarneirodasilva.github.io/website_gym/",
    github_url: "https://github.com/emersoncarneirodasilva/website_gym",
    category: ["HTML", "CSS", "JavaScript"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  { 
    id: 11,
    name: "Website Petshop",
    description:
      "Site recriado utilizando HTML, CSS e JavaScript.",
    image_path: "/images/pet02.png",
    deployed_url: "https://emersoncarneirodasilva.github.io/website_petshop/",
    github_url: "https://github.com/emersoncarneirodasilva/website_petshop",
    category: ["HTML", "CSS", "JavaScript", "jQuery"],
    key_techs: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  { 
    id: 12,
    name: "Starbucks Clone",
    description:
      "Landing page recriada utilizando HTML, CSS e JavaScript.",
    image_path: "/images/starbucks02.png",
    deployed_url: "https://emersoncarneirodasilva.github.io/starbucks_clone/",
    github_url: "https://github.com/emersoncarneirodasilva/starbucks_clone",
    category: ["HTML", "CSS", "JavaScript"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  { 
    id: 13,
    name: "Recriando Netflix",
    description:
      "Recriando o site Netflix utilizando HTML, CSS e jQuery.",
    image_path: "/images/netflix02.png",
    deployed_url: "https://emersoncarneirodasilva.github.io/recriando-netflix/",
    github_url: "https://github.com/emersoncarneirodasilva/recriando-netflix",
    category: ["HTML", "CSS", "JavaScript", "jQuery"],
    key_techs: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  { 
    id: 14,
    name: "Amazing Clock",
    description:
      "Relógio incrível (amazing clock) construído com HTML e CSS.",
    image_path: "/images/amazing-clock.jpeg",
    deployed_url: "https://emersoncarneirodasilva.github.io/amazing-clock/",
    github_url: "https://github.com/emersoncarneirodasilva/amazing-clock",
    category: ["HTML", "CSS", "JavaScript"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  { 
    id: 15,
    name: "Currículo Online",
    description:
      "Currículo criado utilizando HTML, CSS.",
    image_path: "/images/resume02.jpeg",
    deployed_url: "https://emersoncarneirodasilva.github.io/curriculo_online/",
    github_url: "https://github.com/emersoncarneirodasilva/curriculo_online",
    category: ["HTML", "CSS"],
    key_techs: ["HTML", "CSS"],
  }  
]