const HeroSection = () => {
    return (
        <div
            className="bg-cover bg-center h-64 md:h-96 flex flex-col justify-center text-white"
            style={{
                backgroundImage:
                    `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${require('../assets/hero-section.webp')})`
            }}
        >
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold">Ciao, sono Matteo Santoro</h1>
                <p className="text-gray-300 md:text-lg mt-2">Sviluppatore Freelancer con oltre 5 anni di esperienza su stack JS</p>
            </div>
        </div>
    );
}

export default HeroSection;