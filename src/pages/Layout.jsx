import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav className=" shadow-md py-5">
                <div className="flex items-center justify-between px-8">

                    <h1 className="text-xl font-sans font-bold tracking-wide">Halo</h1>

                    <ul className="flex space-x-6 ">

                        <li>
                            <Link to="/" className="font-sans font-medium hover:text-gray-500 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/product" className="font-sans font-medium hover:text-gray-500 transition">Product</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <Outlet />

        </div>
    )
}