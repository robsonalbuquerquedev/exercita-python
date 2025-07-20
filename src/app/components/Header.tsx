"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        setDarkMode(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    return (
        <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo ExercitaPython" width={40} height={40} />
                    <span className="text-xl font-bold text-blue-600 dark:text-yellow-400">ExercitaPython</span>
                </Link>

                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
                        <Link href="/">Início</Link>
                        <Link href="/temas">Tópicos</Link>
                        <Link href="/bonus">Bônus</Link>
                    </nav>

                    <button onClick={toggleDarkMode} className="text-xl text-gray-700 dark:text-gray-200 cursor-pointer">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>

                    <button
                        className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden px-4 pb-3 flex flex-col gap-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                    <Link href="/" onClick={() => setMenuOpen(false)}>Início</Link>
                    <Link href="/temas" onClick={() => setMenuOpen(false)}>Tópicos</Link>
                    <Link href="/bonus" onClick={() => setMenuOpen(false)}>Bônus</Link>
                </div>
            )}
        </header>
    );
}
