import { Hero } from './Hero';

export const MainPage = () => {
  return (
    <div>
      <Hero />

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card">
                <div className='img-container'>
                <img
                  className="feature-img d-block mx-auto"
                  src="src/img/class.svg"
                />
                </div>
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
              <div className="card">
                <div className='img-container'>
                <img
                  className="teacher-img d-block mx-auto"
                  src="src/img/work.svg"
                />
                </div>
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
              <div className="card">
                <div className='img-container'>
                <img
                  className="vault-img"
                  src="src/img/vault.svg"
                />
                </div>
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
