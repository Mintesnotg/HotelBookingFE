import Link from 'next/link';
export const Headernav = () => {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link href="/">
                    Hotel booking 
                </Link>
                <div className="space-x-4">
                    <Link href="/login">
                        Login
                    </Link>
                    <Link href="/register">
                        Register
                    </Link>
                </div>
            </nav>
        </header>
    );
}


// export default Headernav();