"use client";

import { motion } from "framer-motion";
import { SiPython } from "react-icons/si";

export default function BonusViagemPage() {
    return (
        <section className="py-8">
            <motion.h1
                className="text-3xl font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-yellow-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <SiPython /> Projeto: AnáliseBonusViagem
            </motion.h1>

            <motion.p
                className="mb-6 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Este projeto simula o cálculo de um bônus de viagem com base em distância, valor gasto e regras de premiação.
                Excelente para treinar estruturas condicionais, operadores matemáticos e input/output em Python.
            </motion.p>

            <motion.pre
                className="bg-gray-100 dark:bg-gray-800 text-sm rounded-xl p-4 overflow-x-auto text-gray-800 dark:text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <code>{`# Análise de bônus de viagem
distancia = float(input("Informe a distância percorrida (km): "))
gasto = float(input("Informe o valor gasto na viagem (R$): "))

if distancia > 500 and gasto < 300:
    print("Você ganhou um bônus de R$100!")
elif distancia > 300:
    print("Você ganhou um bônus de R$50!")
else:
    print("Viagem sem bônus.")`}</code>
            </motion.pre>
        </section>
    );
}
