export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "MongoDB", "Express.js", "Git", "AutoCAD"];
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-4 text-center font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
