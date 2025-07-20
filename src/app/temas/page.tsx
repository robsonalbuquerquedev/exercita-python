"use client";

import { motion } from "framer-motion";
import { FaCode, FaRandom, FaListAlt, FaTools, FaCogs, FaProjectDiagram, FaBug } from "react-icons/fa";
import Link from "next/link";

const temas = [
    { nome: "Estruturas Sequenciais", slug: "estruturas-sequenciais", icone: <FaCode /> },
    { nome: "Estruturas Condicionais", slug: "estruturas-condicionais", icone: <FaRandom /> },
    { nome: "Estruturas de Repetição", slug: "estruturas-de-repeticao", icone: <FaListAlt /> },
    { nome: "Listas e Coleções", slug: "listas-e-colecoes", icone: <FaTools /> },
    { nome: "Funções", slug: "funcoes", icone: <FaCogs /> },
    { nome: "Modularização", slug: "modularizacao", icone: <FaProjectDiagram /> },
    { nome: "Tratamento de Erros", slug: "tratamento-de-erros", icone: <FaBug /> },
];

export default function TemasPage() {
    return (
        <section className="py-8">
            <motion.h1
                className="text-3xl font-bold mb-6 text-blue-700 dark:text-yellow-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                🧠 Tópicos de Lógica de Programação
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {temas.map((tema, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            href={`/temas/${tema.slug}`}
                            className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow hover:shadow-lg transition hover:scale-[1.02]"
                        >
                            <div className="flex items-center gap-3 text-blue-600 dark:text-yellow-300 text-xl mb-2">
                                {tema.icone}
                                <span className="font-medium">{tema.nome}</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Veja exercícios, exemplos e desafios sobre {tema.nome.toLowerCase()}.
                            </p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
