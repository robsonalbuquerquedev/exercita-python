"use client";

import { motion } from "framer-motion";
import { FaCode, FaProjectDiagram, FaBug, FaListAlt, FaCogs, FaRandom, FaTools } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  const temas = [
    { nome: "Estruturas Sequenciais", slug: "estruturas-sequenciais", icone: <FaCode /> },
    { nome: "Estruturas Condicionais", slug: "estruturas-condicionais", icone: <FaRandom /> },
    { nome: "Estruturas de Repetição", slug: "estruturas-de-repeticao", icone: <FaListAlt /> },
    { nome: "Listas e Coleções", slug: "listas-e-colecoes", icone: <FaTools /> },
    { nome: "Funções", slug: "funcoes", icone: <FaCogs /> },
    { nome: "Modularização", slug: "modularizacao", icone: <FaProjectDiagram /> },
    { nome: "Tratamento de Erros", slug: "tratamento-de-erros", icone: <FaBug /> },
  ];
  
  const bonus = [
    { nome: "AnáliseBonusViagem", rota: "/bonus/bonus-viagem", icone: <SiPython /> },
    { nome: "Cores no Terminal", rota: "/bonus/cores-terminal", icone: <SiPython /> },
  ];

  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
          <SiPython className="text-blue-600" /> ExercitaPython
        </h1>
        <p className="text-lg text-gray-700">Pratique programação com exercícios organizados por temas essenciais.</p>
      </motion.section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🧩 Tópicos de Lógica de Programação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temas.map((tema, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/temas/${tema.slug}`}
                className="block p-5 rounded-xl border border-gray-200 bg-white shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-blue-600 text-xl mb-2">
                  {tema.icone}
                  <span className="font-medium">{tema.nome}</span>
                </div>
                <p className="text-sm text-gray-500">Exercícios e desafios práticos para aprender {tema.nome.toLowerCase()}.</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">🎁 Bônus - Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonus.map((projeto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link
                href={projeto.rota}
                className="block p-5 rounded-xl border border-indigo-300 bg-indigo-50 hover:bg-indigo-100 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-indigo-600 text-xl mb-2">
                  {projeto.icone}
                  <span className="font-medium">{projeto.nome}</span>
                </div>
                <p className="text-sm text-indigo-700">Exemplos práticos aplicando lógica de programação.</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
