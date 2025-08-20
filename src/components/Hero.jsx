export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Pankaj Kumar</h1>
      <p className="mt-4 text-lg text-gray-700">React.js Developer | MERN Stack Enthusiast</p>
      <div className="mt-6 space-x-4">
        <a href="Pankaj_kumar_resume_rct.pdf" download className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Resume</a>
        <a href="https://github.com/pk11345" className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">GitHub</a>
        <a href="https://www.linkedin.com/in/pankaj-kumar-0aa6b7201/" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">LinkedIn</a>
      </div>
    </section>
  );
}
