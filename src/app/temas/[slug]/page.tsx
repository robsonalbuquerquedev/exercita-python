"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const temas: Record<
    string,
    {
        titulo: string;
        descricao: string;
        exercicios: { id: string; titulo: string }[];
    }
> = {
    "estruturas-sequenciais": {
        titulo: "Estruturas Sequenciais",
        descricao: "Execução passo a passo de comandos, sem desvios. Ideal para quem está começando.",
        exercicios: [
            { id: "ex01", titulo: "Solicitar nome e idade e exibir na tela" },
            { id: "ex02", titulo: "Calcular a média entre duas notas" },
            { id: "ex03", titulo: "Converter graus Celsius em Fahrenheit" },
        ],
    },
    "estruturas-condicionais": {
        titulo: "Estruturas Condicionais",
        descricao: "Tome decisões com if, elif e else!",
        exercicios: [
            { id: "ex01", titulo: "Verificar se um número é par ou ímpar" },
            { id: "ex02", titulo: "Calcular aumento salarial com base no valor" },
            { id: "ex03", titulo: "Determinar se um aluno foi aprovado pela média" },
        ],
    },
    "estruturas-de-repeticao": {
        titulo: "Estruturas de Repetição",
        descricao: "Repita ações com for e while de forma controlada.",
        exercicios: [
            { id: "ex01", titulo: "Contar de 1 a 10 com for" },
            { id: "ex02", titulo: "Imprimir números pares até 100" },
            { id: "ex03", titulo: "Somar vários números até digitar zero" },
        ],
    },
    "listas-e-colecoes": {
        titulo: "Listas e Coleções",
        descricao: "Organize e manipule grupos de dados com listas, tuplas e dicionários.",
        exercicios: [
            { id: "ex01", titulo: "Criar uma lista de frutas e exibir uma a uma" },
            { id: "ex02", titulo: "Ordenar lista de números digitados" },
            { id: "ex03", titulo: "Contar quantas vezes um nome aparece na lista" },
        ],
    },
    funcoes: {
        titulo: "Funções",
        descricao: "Organize seu código em blocos reutilizáveis.",
        exercicios: [
            { id: "ex01", titulo: "Criar função que calcula fatorial" },
            { id: "ex02", titulo: "Função que verifica se número é primo" },
            { id: "ex03", titulo: "Função para formatar texto de entrada" },
        ],
    },
    "modularizacao": {
        titulo: "Modularização",
        descricao: "Divida seu código em arquivos e módulos para facilitar a manutenção.",
        exercicios: [
            { id: "ex01", titulo: "Separar funções em arquivos diferentes" },
            { id: "ex02", titulo: "Importar e reutilizar código" },
            { id: "ex03", titulo: "Usar módulos do Python como `math` e `datetime`" },
        ],
    },
    "tratamento-de-erros": {
        titulo: "Tratamento de Erros",
        descricao: "Evite que seu programa trave com try/except e tratamento de exceções.",
        exercicios: [
            { id: "ex01", titulo: "Lidar com erro de divisão por zero" },
            { id: "ex02", titulo: "Capturar erro de entrada inválida com try/except" },
            { id: "ex03", titulo: "Criar mensagens personalizadas de erro" },
        ],
    },
};

export default function TemaPage() {
    const { slug } = useParams();

    const tema = temas[slug as string];

    if (!tema) {
        return <p className="text-red-600 dark:text-red-400">Tema não encontrado.</p>;
    }

    return (
        <section className="py-8">
            <motion.h1
                className="text-3xl font-bold mb-4 text-blue-700 dark:text-yellow-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                📘 {tema.titulo}
            </motion.h1>

            <motion.p
                className="mb-6 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {tema.descricao}
            </motion.p>

            <motion.ul
                className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-100"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
            >
                {tema.exercicios.map((ex, i) => (
                    <motion.li
                        key={i}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow hover:shadow-md transition"
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <Link href={`/temas/${slug}/${ex.id}`} className="block hover:underline">
                            {ex.titulo}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
}
