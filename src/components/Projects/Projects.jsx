
function Projects() {
const projects = [
  {
    title: "React Router",
    imgSrc: "https://i.imgur.com/OheyG18.png",
    description:
      "A website featuring seamless routing and a GitHub route to display live GitHub details. Users can view GitHub user information.",
    tech: ["React Router", "GitHub API", "Pre-fetching API Loader on Hover"],
    link: "",
  },
  {
    title: "Anonymous Blogging",
    imgSrc: "https://i.imgur.com/Yt9JgIN.png",
    description:
      "A platform where users can create blog posts after signing up or logging in. User data is saved, allowing users to log in later and view their own and others' blogs.",
    link: "https://anonymous-blog-web-app.vercel.app/",
    tech: ["React Hook Form", "Appwrite"],
  },
  {
    title: "To-do List",
    imgSrc: "https://i.imgur.com/vlV7fsf.png",
    description:
      "A website where users can add and delete to-do lists. The to-do lists are saved locally.",
    link: "",
    tech: ["Redux", "Local Storage"],
  },
  {
    title: "Sticky Notes",
    imgSrc: "https://i.imgur.com/Kg2Nxwj.png",
    description:
      "A website allowing users to create, delete, copy, share, and change the color of notes. Features a menu UI.",
    link: "https://talibbb13.github.io/BP-Sicky-Notes/",
    tech: ["JavaScript", "CSS", "Responsive Design"],
  },
  {
    title: "Buzz Around",
    imgSrc: "https://i.imgur.com/CpBVHkm.png",
    description:
      "An interactive website where users can click on a bee to make it move randomly on the screen with smooth animations.",
    link: "https://talibbb13.github.io/GSAP-React-Buzz-Around/",
    tech: ["GSAP", "React", "GSAP Utils"],
  },
  {
    title: "Music Player",
    imgSrc: "https://i.imgur.com/BGmPhmH.png",
    description:
      "A music player allowing users to play, pause, skip, and rewind songs. Users can select songs from a playlist, view remaining time, shuffle the playlist, and control playback speed.",
    link: "https://talibbb13.github.io/BP-Music-Player/",
    tech: ["JavaScript", "CSS", "Remix Icon"],
  },
  {
    title: "Add to Cart (Feature)",
    imgSrc: "https://i.imgur.com/0iGb9bv.png",
    description:
      "A website where users can add products to a cart or wishlist.",
    link: "https://talibbb13.github.io/BP-Add-to-Cart/",
    tech: ["JavaScript", "Tailwind CSS", "Remix Icon"],
  },
  {
    title: "Docs Box",
    imgSrc: "https://i.imgur.com/nK5ari3.png",
    description:
      "A project with various document boxes containing dynamic information. Users can drag and move these boxes within the screen.",
    link: "https://talibbb13.github.io/React-Docs-Box/",
    tech: ["Framer Motion", "React Icons"],
  },
  {
    title: "Stop Watch",
    imgSrc: "https://i.imgur.com/YLHNY0g.png",
    description:
      "A stopwatch application with start, stop, and reset functions. It also includes date and time displays and loading animations.",
    link: "https://talibbb13.github.io/SP-Tym/stop-watch.html/",
    tech: ["JavaScript", "Tailwind CSS", "Remix Icon"],
  },
  {
    title: "Pinterest Search",
    imgSrc: "https://i.imgur.com/S5srox3.png",
    description:
      "A project allowing users to search for different images using frontend technologies.",
    link: "https://talibbb13.github.io/BP-Pinterest-Search/",
    tech: ["Vanilla JavaScript", "Array Filter"],
  },
  {
    title: "QR Code Generator",
    imgSrc: "https://i.imgur.com/RyZOxqc.png",
    description:
      "A project to generate QR codes from text or website links. Users input a message or text to generate a QR code, which can then be scanned to read the message.",
    link: "https://talibbb13.github.io/SP-QR-Code-Gen/",
    tech: ["API", "JavaScript"],
  },
  {
    title: "Kids Math Game",
    imgSrc: "https://i.imgur.com/ICfWAL2.png",
    description:
      "A kid-friendly website for learning and practicing basic arithmetic operations: addition, subtraction, multiplication, and division.",
    link: "https://talibbb13.github.io/BP-Maths-Game/",
    tech: ["JavaScript", "CSS", "Remix Icon"],
  },
  {
    title: "Bubble Game",
    imgSrc: "https://i.imgur.com/A6dzvIb.png",
    description:
      "A game where users click on a target number among many displayed on the screen. Each correct click scores 10 points. The game lasts for 60 seconds, after which the score is displayed.",
    link: "https://talibbb13.github.io/BP-Bubble-Game/",
    tech: ["JavaScript", "CSS", "Event Bubbling"],
  },
  {
    title: "Icoder (UI)",
    imgSrc: "https://i.imgur.com/E6LeW77.png",
    description:
      "A blog project where users can learn about various programming languages, contact the team, and learn about the project.",
    link: "https://talibbb13.github.io/BP-iCoder",
    tech: ["Bootstrap", "Responsive Design"],
  },
];


  return (
    <div className="min-h-screen text-white pt-24 px-4 md:px-14 bg-[url('https://i.imgur.com/Mt8gafZ.png')] bg-repeat-y bg-cover before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-90">
      {projects.map((project, ind) => (
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed=".7"
          key={ind}
          className={`min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 py-10 px-5 md:px-10 lg:px-20 ${
            ind % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full md:w-1/2 lg:w-2/3 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          />
          <div className="text-center md:text-left md:w-1/2 lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-[#CDEA68] Grotesk mb-3">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg md:text-sm mb-5">
              {project.description}
            </p>
            <h3 className="text-xl sm:text-2xl md:text-xl font-bold text-[#CDEA68] Grotesk mb-1">
              Technologies Used
            </h3>
            <p className="text-base sm:text-lg md:text-sm mb-5">
              {project.tech.join(" | ")}
            </p>
            {project.link && (
              <a
                href={project.link}
                className="text-[#CDEA68] underline text-base sm:text-lg md:text-xl font-semibold transition duration-300 hover:text-[#A9C747]"
              >
                See Project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
