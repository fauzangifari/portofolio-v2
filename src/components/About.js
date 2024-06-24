const aboutData = {
  designation: "About Me",
  title: "So, Who Am I?",
  text: [
    "I am Muhammad Fauzan Gifari Dzul Fahmi, known as Fauzan, a college student in Information Systems with a passion for building application. I believe IT can solve global problems and benefit society. My mission is to create websites that provide excellent user experiences, boosting trust and brand loyalty. I continuously expand my IT skills through courses, certifications, and internships, aiming to contribute to the field and help solve societal issues. Feel free to contact me with any questions."
  ],
  // skillIcons: [
  //   { name: "joomla", icon: "img/svg/joomla.svg" },
  //   { name: "wp", icon: "img/svg/wp.svg" },
  //   { name: "drupal", icon: "img/svg/drupal.svg" },
  //   { name: "laravel", icon: "img/svg/laravel.svg" },
  // ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="img/thumbs/64-49.jpg" alt="" />
                <div className="main" data-img-url="img/hero/2.jpg" />
                <div className="extra_image">
                </div>
                {/* {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <img className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))} */}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
