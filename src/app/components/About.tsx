const About = () => {
    return (
        <section className="bg-custom-light text-custom-slate p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-custom-moss mb-6">
                    About Our App
                </h1>
                <p className="text-lg leading-relaxed mb-4 text-custom-slate">
                    Welcome to our app! Checking username availability across popular platforms
                    has never been easier. Whether you're creating a new brand, securing your personal
                    identity, or launching a business, our tool helps ensure your desired username
                    is free and ready to use.
                </p>
                <p className="text-lg leading-relaxed text-custom-slate">
                    We scan across multiple platforms, saving you time and effort. Simply enter a
                    username, and our app will instantly show you whether it's available on the most
                    popular social media sites and online services.
                </p>

            </div>
        </section>
    );
};

export default About;
