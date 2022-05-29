export const MainPage = () => {
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">
              Yuliya Burlai English for IT online lessons
            </h1>
            <p className="lead text-muted">
              I’m offering a friendly online english lessons for all levels :)
              First lesson is always free - check me out!
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">
                Grab your free first lesson
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
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
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
