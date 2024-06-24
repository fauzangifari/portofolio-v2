const features_list = [
  {
    title: "Problem Solving",
    text: "Skilled in identifying and solving complex IT and programming challenges, ensuring efficient and effective solutions.",
  },
  {
    title: "Technical Expertise",
    text: "Proficient in various programming languages and tools including HTML, CSS, JavaScript, Java, Python, and more.",
  },
  {
    title: "Collaboration",
    text: "Experienced in working collaboratively on IT projects, sharing knowledge as a lab assistant, and contributing to organizational success.",
  },
];

const Features = () => {
  return (
    <div className="devman_tm_section" id="features">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                    <span>{`0${i + 1}`}</span>
                      <div className="title">
                        <h3>{feature.title}</h3>
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
