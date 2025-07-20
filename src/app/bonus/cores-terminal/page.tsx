"use client";

import { motion } from "framer-motion";
import { SiPython } from "react-icons/si";

export default function CoresTerminalPage() {
    return (
        <section className="py-8">
            <motion.h1
                className="text-3xl font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-yellow-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <SiPython /> Projeto: Cores no Terminal
            </motion.h1>

            <motion.p
                className="mb-6 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Este projeto demonstra como usar cores ANSI no terminal para deixar suas saídas mais visuais e organizadas.
                Excelente para scripts interativos!
            </motion.p>

            <motion.pre
                className="bg-gray-100 dark:bg-gray-800 text-sm rounded-xl p-4 overflow-x-auto text-gray-800 dark:text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <code>{`# Cores ANSI no terminal
print('\\033[1;31;43mOlá, Mundo\\033[m')
print('\\033[4;30;45mOlá, Mundo\\033[m')
print('\\033[30mOlá, Mundo\\033[m')
print('\\033[7;33;44mOlá, Mundo\\033[m')
a = 3
b = 5
print(f'Os valores são \\033[32m{a}\\033[m e \\033[31m{b}')
nome = 'Robson'
print(f'Olá! Muito prazer em te conhecer, \\033[4;33m{nome}')
cores = {
    'limpa': '\\033[m',
    'azul': '\\033[34m',
    'amarelo': '\\033[33m',
    'pretoebranco': '\\033[7:30m'
}
print(f'{cores["limpa"]}Olá! Muito prazer em te conhecer, {cores["azul"]}{nome}{cores["limpa"]}')`}</code>
            </motion.pre>
        </section>
    );
}
