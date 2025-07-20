export default function Footer() {
    return (
        <footer className="mt-16 py-6 text-center text-sm text-gray-500 border-t bg-gray-50">
            <p>
                © {new Date().getFullYear()} ExercitaPython · Desenvolvido por Robson Albuquerque
            </p>
            <p>
                <a
                    href="https://github.com/robsonalbuquerquedev"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                >
                    github.com/robsonalbuquerquedev
                </a>
            </p>
        </footer>
    );
}
