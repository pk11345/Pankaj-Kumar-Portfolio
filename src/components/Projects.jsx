
const projects = [
  { name: "Smart Notes App ", link: "https://notes-app-delta-wine.vercel.app/" },
  { name: "ShopCart – MERN Stack E-commerce", link: "https://shop-cart-1ox2.vercel.app/" },
  { name: "GhumoPhiro – Hotel Booking App", link: "https://github.com/pk11345/GhumoPhiro" },
  { name: "Task Management (React + Tailwind)", link: "https://task-management-drab-three.vercel.app/" },
  { name: "SaaS Landing Page", link: "https://saas-landing-page-azure-phi.vercel.app/" },
  { name: "Flipkart UI Clone", link: "https://flipkart-ui-beryl.vercel.app/" },
  { name: "New Tech Glasses Landing Page (Freelance)", link: "https://new-tech-glasses.vercel.app/" },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" 
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">{project.name}</h3>
            <p className="text-blue-600 mt-2">View Project →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
