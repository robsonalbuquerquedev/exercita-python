"use client";

import { motion } from "framer-motion";
import { SiPython } from "react-icons/si";
import Link from "next/link";

const projetos = [
    {
        nome: "AnáliseBonusViagem",
        descricao: "Projeto que calcula e analisa bônus de uma viagem, ideal para treinar estruturas condicionais e cálculos práticos.",
        rota: "/bonus/bonus-viagem",
    },
    {
        nome: "Cores no Terminal",
        descricao: "Demonstração de como deixar o terminal mais divertido e legível usando cores em scripts Python.",
        rota: "/bonus/cores-terminal",
    },
];

export default function BonusPage() {
    return (
        <section className="py-8">
            <motion.h1
                className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                🎁 Projetos Bônus
            </motion.h1>

            <motion.p
                className="mb-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Aqui estão projetos especiais criados por Robson Albuquerque que mostram a lógica em ação!
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projetos.map((proj, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <Link
                            href={proj.rota}
                            className="block p-5 rounded-xl bg-indigo-50 dark:bg-indigo-900 border border-indigo-300 dark:border-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition"
                        >
                            <div className="flex items-center gap-3 text-indigo-700 dark:text-indigo-300 text-xl mb-2">
                                <SiPython />
                                <span className="font-semibold">{proj.nome}</span>
                            </div>
                            <p className="text-sm text-indigo-800 dark:text-indigo-200">{proj.descricao}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
