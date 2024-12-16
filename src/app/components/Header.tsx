const Header = () => {
    return (
        <header className="bg-custom-lavender text-white py-12 rounded-3xl shadow-lg">
            <div className="max-w-6xl mx-auto text-center px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide leading-snug">
                    Username Checker
                </h1>
                <p className="mt-4 text-custom-light text-lg md:text-xl font-medium">
                    Check username availability across popular platforms instantly
                </p>

            </div>
        </header>
    );
};

export default Header;
