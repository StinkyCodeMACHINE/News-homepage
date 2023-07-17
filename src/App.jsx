import react, { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <header className="navbar">
        <img src="/assets/images/logo.svg" alt="logo" />
        <nav className="normal-navbar-options">
          <div className="navbar-option">Home</div>
          <div className="navbar-option">New</div>
          <div className="navbar-option">Popular</div>
          <div className="navbar-option">Trending</div>
          <div className="navbar-option">Categories</div>
        </nav>
        <img
          onClick={() => setClicked((oldClicked) => !oldClicked)}
          className="menu-icon"
          src={`/assets/images/icon-menu${clicked ? "-close" : ""}.svg`}
          style={clicked ? { position: "fixed", display: "block" } : {}}
        />
        <nav
          onClick={() => setClicked(false)}
          style={clicked ? { opacity: 1 } : { zIndex: -999}}
          className="dark-background"
        >
          <div
            className="modal-container"
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={
              clicked ? { transform: "scaleX(1)" } : { transform: "scaleX(0)"}
            }
          >
            <div className="navbar-option">Home</div>
            <div className="navbar-option">New</div>
            <div className="navbar-option">Popular</div>
            <div className="navbar-option">Trending</div>
            <div className="navbar-option">Categories</div>
          </div>
        </nav>
      </header>
      <main className="main-container">
        <article className="main-article-container">
          <div className="main-article-img-container"></div>
          <div className="main-article-info-container">
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>Read more</button>
            </div>
          </div>
        </article>
        <aside>
          <h2>New</h2>
          <article className="side-article">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article className="side-article">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <article className="side-article">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </aside>
      </main>
      <footer>
        <article className="bottom-article">
          <img src="/assets/images/image-retro-pcs.jpg" alt="retro pc" />
          <div>
            <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </article>
        <article className="bottom-article">
          <img
            src="/assets/images/image-top-laptops.jpg"
            alt="laptop keyboard"
          />
          <div>
            <h2>02</h2>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </article>
        <article className="bottom-article">
          <img src="/assets/images/image-gaming-growth.jpg" alt="gamepad" />
          <div>
            <h2>03</h2>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </article>
      </footer>
    </>
  );
}

export default App;
