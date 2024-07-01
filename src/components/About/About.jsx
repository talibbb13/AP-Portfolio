function About() {
  return (
    <div className="About-Page min-h-screen text-white px-40 py-32 relative bg-[url('https://i.imgur.com/Mt8gafZ.png')] bg-repeat-y bg-cover before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-90 before:z-0">
      <div className="mx-auto space-y-12 text-center relative z-10">
        <h1 className="text-7xl font-bold text-[#CDEA68] Grotesk mb-4">
          Talib Raeen
        </h1>
        <p className="text-xl tracking-wide" style={{ wordSpacing: ".1rem" }}>
          Hi, I'm a web developer from Mumbai, India. I love playing chess,
          watching sci-fi movies, and exploring philosophy and psychology. These
          interests fuel my curiosity and creativity.
        </p>

        <div>
          <h2 className="text-3xl font-bold text-[#CDEA68] Grotesk mb-2">
            My Journey into Web Development
          </h2>
          <p className="text-xl tracking-wide" style={{ wordSpacing: ".1rem" }}>
            My web development journey began with a problem when I wanted to
            sell game accounts but couldn't find genuine websites. This sparked
            my interest in creating such websites, and over time, my passion for
            web development grew.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#CDEA68] Grotesk mb-2">
            Skills and Tools
          </h2>
          <p className="text-xl tracking-wide" style={{ wordSpacing: ".1rem" }}>
            I've had the pleasure of working with a variety of tools and
            technologies that have shaped my skills as a web developer. Here's a
            snapshot of what I bring to the table:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xl">
            <li>HTML, CSS, JavaScript</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>
              React - for more visit the{" "}
              <a href="/skills" className="text-[#CDEA68] underline">
                Skills
              </a>{" "}
              page
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#CDEA68] Grotesk mb-2">
            Educational Background
          </h2>
          <p className="text-xl tracking-wide" style={{ wordSpacing: ".1rem" }}>
            Though my background is in Accounting and Finance (BAF), my heart is
            in web development. I've gained significant knowledge through online
            courses from Sheryians Coding School and Hitesh Choudhary, focusing
            on web animation, design, and production-grade applications.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#CDEA68] Grotesk mb-2">
            Personal Mantras and Work Ethic
          </h2>
          <p className="text-xl tracking-wide" style={{ wordSpacing: ".1rem" }}>
            "Stay Hungry, Stay Foolish" This quote resonates deeply with me. I
            believe in balancing intense coding sessions with healthy habits
            like maintaining good posture, going out in between, eating healthy
            food, and staying active. My ability to work for hours and hours
            with intense focus is fueled by my passion for continuous learning
            and improvement.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#CDEA68] Grotesk mb-2">
            Goals and Aspirations
          </h2>
          <p className="text-xl tracking-wide" style={{ wordSpacing: ".1rem" }}>
            In the short term, I aim to establish a reputable name in the web
            development industry while diving into video editing and data
            structures and algorithms (DSA). Long-term, I aspire to explore AI
            and data science, delve into digital marketing, and perhaps even
            pursue a career as a professional chess player. I also have an
            interest in backend development and look forward to enhancing my
            skills in this area.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#CDEA68] Grotesk mb-2">
            Get in Touch
          </h2>
          <p className="text-xl">
            Feel free to reach out through my{" "}
            <a href="/contact" className="text-[#CDEA68] underline">
              Contact
            </a>{" "}
            page. I'd love to connect, collaborate, or just have a chat about
            web development, chess, or anything in between.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
