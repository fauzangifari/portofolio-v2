const homeData = {
  firstName: "Muhammad Fauzan",
  lastName: "Gifari",
  designation: "Fullstack Developer",
  address: "Indonesia",
  img: "img/hero/2.jpg",
  bio: "I am Fauzan, an Information Systems student passionate about web programming. I aim to create user-friendly websites that solve problems and benefit society. Contact me with any questions.",
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/1.jpg"/>
        </div>
        <div className="container">
          <div className="content">
            <div className="center">
              <div className="inner">
                <h3 className="hello">HELLO I'M</h3>
                <h3 className="name">
                  {homeData.firstName} {homeData.lastName}
                </h3>
                <h3 className="job">
                  {homeData.designation} from {homeData.address}
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Hire me
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="right">
              <div className="image">
                <img src="img/thumbs/53-61.jpg" alt="" />
                <div className="main" data-img-url={homeData.img} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
