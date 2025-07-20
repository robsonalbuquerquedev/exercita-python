"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const exerciciosMock: Record<
    string,
    Record<
        string,
        {
            titulo: string;
            enunciado: string;
            codigo: string;
        }
    >
> = {
    "estruturas-condicionais": {
        ex01: {
            titulo: "Verificar se o número é par ou ímpar",
            enunciado:
                "Crie um programa que peça um número ao usuário e diga se ele é par ou ímpar.",
            codigo: `numero = int(input("Digite um número: "))

if numero % 2 == 0:
    print("O número é par.")
else:
    print("O número é ímpar.")`,
        },
    },
    funcoes: {
        ex01: {
            titulo: "Função para calcular fatorial",
            enunciado:
                "Crie uma função que receba um número e retorne seu fatorial.",
            codigo: `def fatorial(n):
    resultado = 1
    for i in range(2, n + 1):
        resultado *= i
    return resultado

print(fatorial(5))  # Resultado: 120`,
        },
    },
};

export default function ExercicioPage() {
    const { slug, exercicio } = useParams();

    const exercicioInfo =
        exerciciosMock[slug as string]?.[exercicio as string];

    const [copiado, setCopiado] = useState(false);

    const copiarCodigo = () => {
        navigator.clipboard.writeText(exercicioInfo?.codigo || "");
        setCopiado(true);
        setTimeout(() => setCopiado(false), 1500);
    };

    if (!exercicioInfo) {
        return (
            <p className="text-red-600 dark:text-red-400">
                Exercício não encontrado.
            </p>
        );
    }

    return (
        <section className="py-8">
            <motion.h1
                className="text-2xl font-bold mb-2 text-blue-700 dark:text-yellow-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {exercicioInfo.titulo}
            </motion.h1>

            <motion.p
                className="mb-6 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {exercicioInfo.enunciado}
            </motion.p>

            <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-sm overflow-x-auto text-gray-800 dark:text-gray-100">
                    <code>{exercicioInfo.codigo}</code>
                </pre>
                <button
                    onClick={copiarCodigo}
                    className="cursor-pointer absolute top-2 right-2 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black px-3 py-1 rounded hover:opacity-90 text-xs"
                >
                    {copiado ? "Copiado!" : "Copiar"}
                </button>
            </motion.div>
        </section>
    );
}
