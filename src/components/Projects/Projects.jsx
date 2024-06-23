import CreateStringBand from "../CreateStringBand";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      imgSrc:
        "https://i.imgur.com/zpZrZnN_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem facere maxime perspiciatis aut omnis obcaecati.",
      link: "#",
      tech: "I used...",
    },
    {
      title: "Project 2",
      imgSrc:
        "https://i.imgur.com/zpZrZnN_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem facere maxime perspiciatis aut omnis obcaecati.",
      link: "#",
      tech: "I used...",
    },
    {
      title: "Project 3",
      imgSrc:
        "https://i.imgur.com/zpZrZnN_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem facere maxime perspiciatis aut omnis obcaecati.",
      link: "#",
      tech: "I used...",
    },
  ];

  return (
    <div className="min-h-screen text-white pt-24 pb-10 px-4 md:px-14">
      {projects.map((project, ind) => (
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed=".7"
          key={ind}
          className={`min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-10 px-5 md:px-10 lg:px-20 ${
            ind % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          />
          <div className="text-center md:text-left md:w-1/2 lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#CDEA68] Grotesk mb-4">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              {project.description}
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CDEA68] Grotesk mb-2">
              Tech Used
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              {project.tech}
            </p>
            <a
              href={project.link}
              className="text-[#CDEA68] underline text-base sm:text-lg md:text-xl font-semibold transition duration-300 hover:text-[#A9C747]"
            >
              See Project
            </a>
          </div>
        </div>
      ))}
      <CreateStringBand />
    </div>
  );
}

export default Projects;
