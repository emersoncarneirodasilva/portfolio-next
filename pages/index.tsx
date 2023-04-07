import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { motion } from "framer-motion";
import { fadeInUp, routerAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About = ({ endpoint }) => {
  console.log(endpoint);

  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h6 className="my-3 font-medium text-justify">
        Graduado e mestrado em química pela Universidade Federal do Rio Grande
        do Norte (UFRN), mas que encontrou nos códigos a realização em trabalhar
        e poder ajudar a transformar o mundo. Trabalhou na empresa Hubbi
        (Plataforma de Marketplace exclusiva para o setor de autopeças) como
        desenvolvedor web front-end construindo páginas web modernas e
        dinâmicas, assim como também, integrando dados provenientes do back-end.
        Atualmente estudando programação através de cursos online/bootcamps, e
        construindo projetos (pessoais) na área. Profissional com conhecimento
        lógico, senso prático, trabalho em equipe e boa percepção para os
        detalhes na segurança dos processos produtivos. <br />
        Almejo trabalhar como programador front-end, desenvolvedor web ou áreas
        afins com o intuito de aprender e desenvolver habilidades relacionadas
        ao desenvolvimento de softwares e construção de interfaces de páginas
        web. Estou disponível para freelances nessas áreas.
      </h6>

      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide">Meus serviços</h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg md:col-span-1 dark:bg-dark-200"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

/* export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log(process.env.VERCEL_URL)
  
  const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  const data = await res.json()
  
  console.log(data)

  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    }
  }
}*/
/*
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/services")
  const data = await res.json()

  console.log("SERVER", services)
  
  return {
    props: {
      services: data.services,
    }
  }
}*/

export default About;
