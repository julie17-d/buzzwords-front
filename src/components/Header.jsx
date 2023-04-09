import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div class="flex flex-col items-center">
            <Link to={`/`}>
                <img src="/buzzwords_logo.png" alt="buzzwords icon"
                    class="m-2 md:m-5 h-64 lg:h-512" />
            </Link>
            <h1 class="m-2 md:m-5
            font-serif Playfair Display text-3xl md:text-6xl tracking-wider">
                BUZZWORDS
            </h1>
        </div>
    )
}

export default Header