export const MainPage = () => {
  return (
    <div>
      <section className="bg-light">
        <div className="text-start container">
          <div className="row py-lg-4">
            <div className="col-md-6 mx-auto d-flex align-items-center">
              <div className="">
                <h1 className="h1">
                  Yuliya Burlai English for IT online lessons
                </h1>
                <p className="lead">
                  I’m offering friendly online English lessons for all levels :)
                </p>
                <p>
                  <a href="#" className="btn mt-4 cta-button">
                    Contact me for details
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img className="hero-image" src="/src/img/portrait.png" />
            </div>
          </div>
        </div>
      </section>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img
                  width="100%"
                  height="100%"
                  className="image-responsive"
                  src="src/img/class.png"
                />
                <div className="card-body">
                  <h3>Education</h3>
                  <p className="card-text">
                    While I have the classic combo of MA in English, a
                    non-degree year of studying in the USA plus CELTA, I
                    consider my experience with other languages just as
                    important. At some point in my life I learned & dropped
                    German & Chinese but continued learning & using French,
                    Spanish & Polish.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  width="100%"
                  height="100%"
                  className="image-responsive"
                  src="src/img/work.png"
                />
                <div className="card-body">
                  <h3>Work Experience</h3>
                  <p className="card-text">
                    10+ years of own experience as an English speaker in
                    business & IT, also working as a corporate soft skills
                    trainer, gave me the perspective of how English is a tool,
                    not a goal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  width="100%"
                  height="100%"
                  className="image-responsive"
                  src="src/img/vault.png"
                />
                <div className="card-body">
                  <h3>Why it's important to you</h3>
                  <p className="card-text">
                    I encourage people to explore how English can be something
                    they enjoy so much, they just want to use it all the time.
                    Learning a new language is like meeting a new person, your
                    new English-speaking identity. I will help you nurture that
                    new confidence while keeping tabs on how to save your effort
                    for this new marathon you'll be running for as long as
                    English is part of your life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
