import { motion } from "framer-motion";
import { fadeInUp, routerAnimation } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
    >
      {/* Formação */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Formação</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Mestrado em Quimíca</h5>
            <p className="font-semibold">UFRN (2016-2018)</p>
            <p className="my-3">
              Sou mestre em química pela Universidade Federal do Rio Grande do
              Norte.
            </p>
          </div>
        </motion.div>
        {/* Experiência */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experiência</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Desenvolvedor Web Front-End
            </h5>
            <p className="font-semibold">Hubbi (2022-2023)</p>
            <p className="my-3">
              Construção de páginas web modernas e dinâmicas, assim como também,
              integrando dados provenientes do back-end.
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">Bolsista Capes</h5>
            <p className="font-semibold">UFRN (2016-2018)</p>
            <p className="my-3">
              Extração de metais em placas de circuitos impressos obsoletas
              através de reações com ácidos, bases e processos eletroquímicos.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Linguagens e Frameworks */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Linguagens & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Ferramentas & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
